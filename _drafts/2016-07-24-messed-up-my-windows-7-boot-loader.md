---
layout: post
title: "Messed Up My Windows 7 Boot Loader"
date: 2016-07-24 18:00:00 +0700
comments: true
permalink: 2016-07-24-messed-up-my-windows-7-boot-loader
disqus_identifier: 43601100-5176-11e6-9bce-e8de279ede17
---

I was trying to reproduce a scenario on how to get rid of a secondary OS with an existing primary OS (Windows 7) before actually installing a secondary OS (I've been wanting to install [Arch Linux](https://www.archlinux.org/) for a while now). For this, I chose Ubuntu 16.04 LTS. I had been using Ubuntu on [VirtualBox][] inside the primary Windows 7 for quite sometime, so I was confident I could work this out. Heck, I had even successfully installed Ubuntu on my laptop three years before.

#### Computer condition
1. Has two drives installed. One SSD (`/dev/sdb`) and one HDD (`/dev/sda`). Windows 7 as the primary OS was installed in the SSD.
    The original partition scheme as given by `fdisk -l` is as follows:
    
    * `/dev/sda`
    
        | Device | Start | End | Sectors | Size | Type |
        |:-------|:------|:----|:--------|:-----|:-----|
        | /dev/sda1 | 34 | 262177 | 262144 | 128M |  Microsoft reserved |
        | /dev/sda2 | 264192 | 7793481727 | 7793217536 | 3,6T | Microsoft basic data |

        <br>
    * `/dev/sdb`
    
        | Device | Start | End | Sectors | Size | Type |
	|:-------|:------|:----|:--------|:-----|:-----|
        | /dev/sdb1 | 2048 | 206847 | 204800 | 100M | Microsoft basic data |
        | /dev/sdb2 | 206848 | 250058751 | 249851904 | 119,1G | Microsoft basic data |
2. BIOS was set to boot from SSD.
3. The motherboard is GIGABYTE's [GA-H97-D3H][] which already supports [UEFI][]. I still did not actually know what BIOS/UEFI was. Did a quick Google search, and figured since I had Windows 7 installed and it did not support UEFI. I should just forget about the UEFI stuff for the time being.

Ubuntu is one of those user-friendly linux distributions and thus considered [one of the best choices for beginners][]. With a GUI interface when installation, one may just click Next (then Next then Next) and wait for its complete installation. My confidence still worked just fine until I arrived at this,

![Choosing installation type windows](http://i.stack.imgur.com/Oh3pu.png)

***Fig. 1** - Some image taken from <http://askubuntu.com>. Replace Windows 8 with Windows 7*

Only then did I remember that I actually had two drives! Fearing that I would mess up, I went for option *Something else* just to be safe. The next window would then be something similar to this,

![Installation type (Managing partition)](http://3.bp.blogspot.com/-pxWk2cy-L_8/UjDam7FVitI/AAAAAAAABhY/rqNPjx0PVFg/s1600/ubuntu6.png)

***Fig. 2** - Some image taken from [everydaylinuxuser.com](http://www.everydaylinuxuser.com/2013/09/install-ubuntu-linux-alongside-windows.html). Just a sketch. The actual windows showed up in my case had `/dev/sda` and `/dev/sdb` in it*

Now this is the part where I messed up.

I had watched [a YouTube video tutorial on installing Arch Linux][]. It was said that it was neater to just declare two partitions for `swap` and `/`. I then proceed by changing the partition scheme for `/dev/sda` into the following,

| Device | Start | End | Sectors | Size | Type |
|:-------|:------|:----|:--------|:-----|:-----|
| /dev/sda1 | 34 | 262177 | 262144 | 128M |  Microsoft reserved |
| /dev/sda2 | 264192 | 7793481727 | 7793217536 | 3,6T | Microsoft basic data |
| /dev/sda3 | 7793481728 | 7797481471 | 3999744 | 1,9G | Linux swap |
| /dev/sda4 | 7797481472 | 7813482495 | 16001024 | 7,6G | Linux filesystem |

with `/dev/sda4` being the `/` partition.

Now, if you notice *Fig. 2*, you can see that Ubuntu also asks us to specify *Device for boot loader installation*. I guessed this referred to [GRUB]. This was the part where it got messy to the point that I had to resort to re-installing Ubuntu for four times. I put the list of my failed attempts as follows


- Iteration 0 (Installed `GRUB` on `/dev/sdb`)
  
    I did a quick Google search and found that `GRUB` should be installed on the disk (not on a partition). This means on a `/dev/sdX`, rather than `/dev/sdXY`. I thought that since my BIOS booted from SSD (`/dev/sdb`), it would make sense to install the boot loader on `/dev/sdb`.

    Everything seemed good. The machine restarted. `GRUB` showed up, but there was no Windows 7 option. I just thought it must have been *that regular issue* in which I should just resort to [Boot-Repair][]'s automatic repair and `GRUB` would finally show Windows 7.

    

- Iteration 1 (Installed `GRUB` *on a partition* in `/dev/sda`)


- Iteration 2










[VirtualBox]: https://www.virtualbox.org/wiki/VirtualBox
[one of the best choices for beginners]: https://www.linux.com/news/best-linux-distribution-new-users
[GA-H97-D3H]: http://www.gigabyte.com/products/product-page.aspx?pid=4962
[UEFI]: https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface
[a YouTube video tutorial on installing Arch Linux]: https://youtu.be/Wqh9AQt3nho?t=3m4s
[GRUB]: https://en.wikipedia.org/wiki/GNU_GRUB
[Boot-Repair]: https://help.ubuntu.com/community/Boot-Repair