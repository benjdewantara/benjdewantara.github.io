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

I thought I should expand and add more notes to it to suit my machine (and my future machines, amen to that).

References:
- [ArchWiki](https://wiki.archlinux.org/)
- [How to Install Arch Linux - YouTube](https://www.youtube.com/watch?v=3TB6KYsUyj4)

# Pre-installation #

-------------------------------------------------------------------------------

#### Set the keyboard layout ####

Nothing to do here (yet?)

#### Verify the boot mode ####

I still don't know what's the deal with this whole UEFI thing. I think at some point in the past, I had turned off some UEFI setting in my motherboard when installing Ubuntu to avoid unnecessary issues.

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

Based on my knowledge thus far, I think BIOS or UEFI has to do with the motherboard (even a UEFI-able motherboard may have its UEFI settings turned off). While MBR or GPT has to do with how the disks is partitioned. At the time of writing this, I did a BIOS/GPT scenario. This explains why I will use:

- `parted /dev/sda mklabel gpt`,
- and `parted /dev/sda mkpart 1MB 3MB` then flag it with `bios_grub`

Suppose we are given `/dev/sda` (this can be any `/dev/sdX`), and we use GNU's `parted`. We can use either `parted /dev/sda print` or `fdisk -l /dev/sda` to see its specification.

This is to make the disk `/dev/sda` use the GPT partitioning scheme. *gpt* can be replaced with *msdos* if we want to use the MBR scheme instead.

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
$ parted /dev/sda mkpart primary 1MiB 3MiB
$ parted /dev/sda mkpart primary ext4 3MiB 200MiB
$ parted /dev/sda mkpart primary linux-swap 200MiB 4200MiB
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

We have partition `/dev/sda2` acting as the `/boot` directory, and partition `/dev/sda4` acting as `/` directory. We mount both partitions as follows,

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

[A YouTube tutorial video by linuxscoop](https://www.youtube.com/watch?v=3TB6KYsUyj4) demonstrates using [reflector]() (a Python script) to choose the fastest mirror. This may take some time because [`python`][] needs to be downloaded first, in the end, this could help a lot during the heavy `pacstrap`ing.

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









[arch-wiki-installation-guide]: https://wiki.archlinux.org/index.php/Installation_guide#Partition_the_disks
