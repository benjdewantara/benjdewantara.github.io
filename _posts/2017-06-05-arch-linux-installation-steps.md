---
layout: post
title: "Arch Linux Installation Steps"
date: 2017-06-05 22:00 +0700
permalink: :name
comments: true
disqus_identifier: 12906620-4931-11e7-aac2-e8de279ede17
---


The table of contents provided by [ArchWiki's installation guide][arch-wiki-installation-guide] is as follows

1. [Pre-installation](#pre-installation)
	- [Set the keyboard layout](#set-the-keyboard-layout)
	- [Verify the boot mode](#verify-the-boot-mode)
	- [Connect to the Internet](#connect-to-the-internet)
	- [Update the system clock](#update-the-system-clock)
	- [Partition the disks](#partition-the-disks)
	- [Format the partitions](#format-the-partitions)
	- [Mount the file systems](#mount-the-file-systems)
2. [Installation](#installation)
	- [Select the mirrors](#select-the-mirrors)
	- [Install the base packages](#install-the-base-packages)
3. [Configure the system](#configure-the-system)
	- [Fstab](#fstab)
	- [Chroot](#chroot)
	- [Time zone](#time-zone)
	- [Locale](#locale)
	- [Hostname](#hostname)
	- [Network configuration](#network-configuration)
	- [Initramfs](#initramfs)
	- [Root password](#root-password)
	- [Boot loader](#boot-loader)
4. [Reboot](#reboot)
5. [Post-installation](#post-installation)
6. [My own summary](#my-own-summary)
7. [Further configuration](#further-configuration)
   - [Adding a user](#adding-a-user)
   - [Configuring a windowing system](#configuring-a-windowing-system)
   - [Configuring a desktop environment](#configuring-a-desktop-environment)
8. [VirtualBox configuration](#virtualbox-configuration)

I thought I should expand and add more notes to it to suit my machine (and my future machines, amen to that). A learning experience like this can always be generalized to future learning experiences anyway.

References:
- [ArchWiki](https://wiki.archlinux.org/) (I will always try to understand the wiki articles first before resorting to practical YouTube videos)
- [How to Install Arch Linux - YouTube](https://www.youtube.com/watch?v=3TB6KYsUyj4)

# Pre-installation #

-------------------------------------------------------------------------------

#### Set the keyboard layout ####

Nothing to do here (yet?)

#### Verify the boot mode ####

I still don't know what's the deal with this whole UEFI thing. I think at some point in the past, I had turned off some UEFI setting in my motherboard when installing Ubuntu to avoid unnecessary newbie issues.

``` bash
$ ls /sys/firmware/efi/efivars
```

#### Connect to the Internet ####

``` bash
$ ping archlinux.org
```

#### Update the system clock ####

``` bash
$ timedatectl set-ntp true
```

#### Partition the disks ####

Reading material: [ArchWiki's Partitioning page][archwiki-partitioning], [ArchWiki's GNU Parted article][archwiki-gnu-parted-article]

Based on my knowledge thus far, I think BIOS or UEFI has to do with the motherboard (also, a UEFI-able motherboard may have its UEFI settings turned off). Meanwhile, MBR or GPT has to do with how a disk is partitioned. At the time of writing this, I did a BIOS/GPT scenario. This explains why I will use:

- `parted /dev/sda mklabel gpt`,
- and `parted /dev/sda mkpart 1MB 3MB` then flag it with `bios_grub`

Suppose we are given `/dev/sda` (this can be any `/dev/sdX`), and we use GNU's `parted`. We can use either `parted /dev/sda print` or `fdisk -l /dev/sda` to see its specification.

We make the disk `/dev/sda` use GPT partitioning scheme. *gpt* can be replaced with *msdos* if we want to use the MBR scheme instead (see `parted /dev/sda help mklabel`).

``` bash
$ parted /dev/sda mklabel gpt
```

I believe this step will also cause any existing partitioning scheme in `/dev/sda` to be erased--including the existing defined partitions. Can we take it as an act of complete quick-format?

We would like `/dev/sda` to end up with this layout

| Mount point                | Partition | Flag       | Suggested size  |
| :----------                | :-------  | :--        | :-------------  |
| special area for bios_grub | /dev/sda1 | bios_grub  | 2MiB            |
| /boot                      | /dev/sda2 | boot       | 200MiB          |
| swap                       | /dev/sda3 | linux-swap | 4GiB            |
| /                          | /dev/sda4 | ext4       | remaining space |

First, create the partitions--assuming `/dev/sda` is entirely clean,

``` bash
$ parted /dev/sda mkpart primary 1MiB 3MiB # this will end up as partition number 1
$ parted /dev/sda mkpart primary ext4 3MiB 200MiB # this will end up as partition number 2
$ parted /dev/sda mkpart primary linux-swap 200MiB 4200MiB # and so on
$ parted /dev/sda mkpart primary ext4 4200MiB 100% # 100% indicates the end of the disk /dev/sda
```

Setting the flags,

``` bash
$ parted /dev/sda set 1 bios_grub on
$ parted /dev/sda set 2 boot on
```

This should conclude the disk partitioning part. Keep doing `parted /dev/sda print` (or `fdisk -l`) to look at the current state of the disk partitioning.

[archwiki-partitioning]: https://wiki.archlinux.org/index.php/Partitioning

[archwiki-gnu-parted-article]: https://wiki.archlinux.org/index.php/GNU_Parted


#### Format the partitions ####

In this step, we only deal with the following partitions:

* `/dev/sda2` (future `/boot` directory)
* `/dev/sda3` (future `swap` directory)
* `/dev/sda4` (future `/` directory)

Don't touch `/dev/sda1` (the one that's flagged with `bios_grub`)

We do the following,

``` bash
$ mkfs.ext4 /dev/sda2
$ mkswap /dev/sda3
$ swapon
$ mkfs.ext4 /dev/sda4
```


#### Mount the file systems ####

We have partition `/dev/sda2` that will act as the `/boot` directory, and partition `/dev/sda4` that will act as `/` directory. We mount both partitions as follows,

``` bash
$ mount /dev/sda4 /mnt # of all future `/anything` directory, we mount the `/` directory first as /mnt
$ mkdir /mnt/boot
$ mount /dev/sda2 /mnt/boot
```

# Installation #

-------------------------------------------------------------------------------

#### Select the mirrors ####

Starting from this point, [`pacman`][] will be used, synchronize firstly,

``` bash
$ pacman -S -y
```

[A YouTube tutorial video by linuxscoop](https://www.youtube.com/watch?v=3TB6KYsUyj4) demonstrates using [reflector]() (a Python script) to choose the fastest mirror. This may take some time because [`python`][] needs to be downloaded first. In the end, this could help a lot during the heavy `pacstrap`ing (unless we have a fast and stable internet connection).

``` bash
$ pacman -S reflector
$ reflector --verbose -i 5 --sort rate --save /etc/pacman.d/mirrorlist
```

[`pacman`]: https://wiki.archlinux.org/index.php/Pacman

[`python`]: https://www.archlinux.org/packages/extra/x86_64/python/



#### Install the base packages ####

Here, [`pacstrap`][] will deal with the mounted partitions on `/mnt` to install the [`base`][] set of packages. Optionally, we may install [`base-devel`][] set of packages as well.

``` bash
$ pacstrap /mnt base base-devel
```

[`pacstrap`]: https://git.archlinux.org/arch-install-scripts.git/tree/pacstrap.in
[`base`]: https://www.archlinux.org/groups/x86_64/base/
[`base-devel`]: https://www.archlinux.org/groups/x86_64/base-devel/

# Configure the system #

-------------------------------------------------------------------------------

#### Fstab ####

Simply using `genfstab -U /mnt >> /mnt/etc/fstab` to generate the `fstab` file still does not consider the `swap` partition. Manually edit `/mnt/etc/fstab` to include the `swap` partition.

[`fstab`][] is used to define how each partition is mounted at boot. We use `blkid` to obtain the **UUID** of each partition.

``` bash
$ blkid
```

The output of `blkid` may be appended to `/mnt/etc/fstab` for the time being.

``` bash
$ blkid >> /mnt/etc/fstab
```

`blkid` should generate something similar to this

``` bash
/dev/sda1: PARTUUID=" *some uuid* "
/dev/sda2: UUID="d0d0d110-0a71-4ed6-936a-304969ea36af" TYPE="ext4" PARTUUID=" *some uuid*  "
/dev/sda3: UUID="039b6c1c-7553-4455-9537-1befbc9fbc5b" TYPE="swap" PARTUUID=" *some uuid*  "
/dev/sda4: UUID="98a81274-10f7-40db-872a-03df048df366" TYPE="ext4" PARTUUID=" *some uuid*  "
...
...
...
```

This serves only to obtain the **UUID** of each partition. We modify the `/etc/fstab` file to look like this,

``` bash
# /etc/fstab: static file system information.
#
# <file system> <dir>    <type>    <options>    <dump>   <pass>
UUID=d0d0d110-0a71-4ed6-936a-304969ea36af /boot ext4   rw,relatime,fmask=0022,dmask=0022,codepage=437,iocharset=iso8859-1,shortname=mixed,errors=remount-ro 0      2
UUID=98a81274-10f7-40db-872a-03df048df366 /     ext4   rw,relatime,discard,data=ordered                                                                     0      1
UUID=039b6c1c-7553-4455-9537-1befbc9fbc5b none  swap   defaults                                                                                             0      0
```

[`fstab`]: https://wiki.archlinux.org/index.php/Fstab


#### Chroot ####

``` bash
$ arch-chroot /mnt
```


#### Time zone ####

``` bash
$ ln -sf /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
$ hwclock --systohc
```


#### Locale ####

Do `nano /etc/locale.gen` (still don't know how to `vi`) and uncomment `en_US.UTF-8 UTF-8`. Generate the locale with

``` bash
$ locale-gen
```

Do `nano /etc/locale.conf` and type in `LANG=en_US.UTF-8`


#### Hostname ####

Note to self. This is the name of your ***machine***, not the name of a username.


``` bash
$ echo myhostname > /etc/hostname
```


#### Network configuration ####


``` bash
$ systemctl enable dhcpcd
```



#### Initramfs ####

``` bash
$ mkinitcpio -p linux
```


#### Root password ####

``` bash
$ passwd
```

#### Boot loader ####

Install [`grub`][] and [`os-prober`][] first.

``` bash
$ pacman -S grub os-prober
```

Afterwards, we install `grub` onto `/dev/sda` and generate a config file,

``` bash
$ grub-install --recheck /dev/sda
$ grub-mkconfig -o /boot/grub/grub.cfg
```


[`grub`]: https://www.archlinux.org/packages/core/x86_64/grub/

[`os-prober`]: https://www.archlinux.org/packages/community/x86_64/os-prober/



# Reboot #

-------------------------------------------------------------------------------

Exit, unmount partitions, and reboot.

``` bash
$ exit
$ umount -R /mnt
$ reboot
```


# Post-installation #

-------------------------------------------------------------------------------





# My own summary #

-------------------------------------------------------------------------------

``` bash
# [Pre-installation] Verify the boot mode
ls /sys/firmware/efi/efivars
# [Pre-installation] Connect to the Internet
ping -c 3 archlinux.org
# [Pre-installation] Update the system clock
timedatectl set-ntp true
# [Pre-installation] Partition the disks
parted /dev/sda mklabel gpt
parted /dev/sda mkpart primary 1MiB 3MiB
parted /dev/sda mkpart primary ext4 3MiB 200MiB
parted /dev/sda mkpart primary linux-swap 200MiB 4200MiB
parted /dev/sda mkpart primary ext4 4200MiB 100% # 100% indicates the end of the disk /dev/sda
parted /dev/sda set 1 bios_grub on
parted /dev/sda set 2 boot on
# [Pre-installation] Format the partitions
mkfs.ext4 /dev/sda2
mkswap /dev/sda3
swapon
mkfs.ext4 /dev/sda4
# [Pre-installation] Mount the file systems
mount /dev/sda4 /mnt # of all future `/anything` directory, we mount the `/` directory first as /mnt
mkdir /mnt/boot
mount /dev/sda2 /mnt/boot
# [Installation] Select the mirrors
pacman -S -y
pacman -S reflector
reflector --verbose -i 5 --sort rate --save /etc/pacman.d/mirrorlist
# [Installation] Install the base packages
pacstrap /mnt base base-devel
# [Configure the system] Fstab
genfstab -U /mnt >> /mnt/etc/fstab
blkid >> /mnt/etc/fstab
#    proceed by editing /mnt/etc/fstab
# [Configure the system] Chroot
arch-chroot /mnt
# [Configure the system] Time zone
ln -sf /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
hwclock --systohc
# [Configure the system] Locale
locale-gen
# [Configure the system] Hostname
echo myhostname > /etc/hostname
# [Configure the system] Network configuration
systemctl enable dhcpcd
# [Configure the system] Initramfs
mkinitcpio -p linux
# [Configure the system] Root password
passwd
# [Configure the system] Boot loader
pacman -S grub os-prober
grub-install --recheck /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
# [Reboot]
exit
umount -R /mnt
reboot

```

# Further configuration #

After configuring the fundamentals, we can proceed by adding a user, and configuring a GUI instead of a boring shell.

This section basically cherry picks what's given in the [article General recommendations][].

[article General recommendations]: https://wiki.archlinux.org/index.php/General_recommendations


## Adding a user ##

-------------------------------------------------------------------------------

Prolonged use of `root` account is not a good practice. Here we add a new user named `benjdewantara` belonging to groups wheel, storage, and power--I still don't exactly know, again, [linuxscoop's video](https://www.youtube.com/watch?v=3TB6KYsUyj4) recommends doing that. Then set its password using `passwd`.

``` bash
$ useradd -m -g users -G wheel,storage,power benjdewantara
$ passwd benjdewantara
```

[Users and groups]: https://wiki.archlinux.org/index.php/Users_and_groups#Unused_groups


## Configuring graphical user interface ##

-------------------------------------------------------------------------------

Two things to pay attention to first:
- This step involves building a package from [Arch User Repository (AUR)][], so we will use [`makepkg`][]. This can be made easier 
- `makepkg` refuses to be executed when done by `root`, so at this point, we need to be logged in as a non-`root` user.

At this point, it's a good idea to install an [AUR helper][], an utility software designed to help automating the building-and-installing steps of packages from [Arch User Repository][] (the ones listed in <https://aur.archlinux.org/>). With an AUR helper, one does not have to manually `git clone` the package then do `makepkg`. An example of an AUR helper is [`packer`][].

Again, looking at the table of contents of this ArchWiki article on [General Recommendations][], specifically its [graphical user interface][] section, makes me think that we need to determine five things to build a graphical user interface on top of our Arch Linux base installation.

* Display server ([`xorg-server`][], [`xorg-apps`][])
* Display drivers ([`xorg-drivers`][])
* Desktop environments ([`xfce4`][], [`xfce4-goodies`][])
* Window managers ([`compiz`][], notice that this resides in the , so we need to use [`makepkg`][], or just directly `makepkg` directly)
* Display manager ([`gdm`][])

We do `pacman -S` to install each package set at a time, except for `compiz` that needs to be built separately. 

``` bash
$ pacman -S xorg-server xorg-apps
$ pacman -S xorg-drivers
$ pacman -S xfce4 xfce4-goodies
$ git clone https://aur.archlinux.org/compiz.gitb # cd into ./compiz directory afterwards
$ makepkg # this is done inside ./compiz directory
$ makepkg -i # this is done inside ./compiz directory
$ pacman -S gdm
```

To enable the `gdm` display manager service upon starting the machine, we do `systemctl`

``` bash
$ systemctl enable gdm.service
```

Reboot, and we should see a graphical login screen instead of a command-line interface one.

[General Recommendations]: https://wiki.archlinux.org/index.php/General_recommendations#Graphical_user_interface

[`xorg-server`]: https://www.archlinux.org/packages/?name=xorg-server

[`xorg-apps`]: https://www.archlinux.org/groups/x86_64/xorg-apps/

[`xorg-drivers`]: https://www.archlinux.org/groups/x86_64/xorg-drivers/

[`xfce4-goodies`]: https://www.archlinux.org/groups/x86_64/xfce4/

[graphical user interface]: https://wiki.archlinux.org/index.php/General_recommendations#Graphical_user_interface

[`lightdm`]: https://www.archlinux.org/packages/?name=lightdm

[`compiz`]: https://aur.archlinux.org/packages/compiz/

[Arch User Repository (AUR)]: https://wiki.archlinux.org/index.php/Arch_User_Repository

[`makepkg`]: https://wiki.archlinux.org/index.php/Makepkg

[AUR helper]: https://wiki.archlinux.org/index.php/AUR_helpers

[Arch User Repository]: https://wiki.archlinux.org/index.php/Arch_User_Repository

[`packer`]: https://aur.archlinux.org/packages/packer

















## Configuring a windowing system ##

Install [Xorg windowing system][].

``` bash
$ pacman -S xorg-server xorg-apps
```

[Xorg windowing system]: https://wiki.archlinux.org/index.php/Xorg


## Configuring a desktop environment ##

At the time of writing this, I chose to install **Xfce**. Using pacman, we can retrieve the set of packages that belong to the package set [`xfce4`][].

``` bash
$ pacman -S xfce4
```

[`xfce4`]: https://www.archlinux.org/groups/x86_64/xfce4/


# VirtualBox configuration #

The term host OS is our primary OS. The term guest OS is the OS being virtualized by VirtualBox. If we use VirtualBox to virtualize Arch Linux, these steps might help

## Install VirtualBox utility software inside the guest OS ##

The only reliable way to [install VirtualBox guest additions into the guest (Arch Linux)][] is only by using `pacman`. Inserting ISO image that comes with the VirtualBox did not work for me.

``` bash
$ pacman -S virtualbox-guest-utils
```

## Setting the guest machine's resolution ##

1. Go to **guest OS** (virtualized Arch Linux)

	Use `hwinfo --framebuffer` to list available resolution dimension choices, suppose we want the dimension "1280x1024" (that has 24 bits color value).



2. Go to our **host OS**'s terminal and type in

	``` bash
	$ VBoxManage setextradata "NameOfVM" "CustomVideoMode1" "1280x1024x24"
	```

	The list of available `"NameOfVM"` can be viewed in our own VirtualBox folder under `/home/username/` directory, for example `/home/username/VirtualBox VMs/`

3. Go to the **guest OS**

    Open file `/etc/default/grub` and edit these two lines so as to include your choice of resolution dimension.
	
        GRUB_CMDLINE_LINUX_DEFAULT="quiet video=1280x1024"
		GRUB_GFXMODE="1280x1024x24"

	Afterwards, run the `grub-mkconfig -o /boot/grub/grub.cfg` to commit changes to the bootloader.
	
	Reboot and the resolution of Arch Linux virtual machine should be adjusted.
	

## Configuring shared folder between host and guest ##

A shared folder can be used by the guest OS to access files from host OS.

1. Go to your **host OS**

	Run `VBoxManage` and pass in the name of virtual machine (`"NameOfVM"`), the name of the shared folder (`"shared_folder_name"`)--this will be used later in the guest OS to identify the name of the shared folder from host OS, and the path to the folder. For example,
   
	``` bash
	$ VBoxManage sharedfolder add "NameOfVM" --name "shared_folder_name" --hostpath "/home/username/share_this_folder"
	```

2. Go to your **guest OS**

	Run the `mount` command as follows. We may want to create the directory `/media/shared_from_guest/` first.
	
	``` bash
	$ mount -t vboxsf shared_folder_name /media/shared_from_guest/
	```
	
	The parameter `shared_folder_name` should match the one used earlier when running `VBoxManage` in **host OS**.







[arch-wiki-installation-guide]: https://wiki.archlinux.org/index.php/Installation_guide#Partition_the_disks

[install VirtualBox guest additions into the guest (Arch Linux)]: https://wiki.archlinux.org/index.php/VirtualBox#Install_the_Guest_Additions
