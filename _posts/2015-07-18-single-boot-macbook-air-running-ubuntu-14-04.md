---
layout: post
title: Single boot MacBook Air running Ubuntu 14.04
author: Jia Shen Boon
tags:
modified_time: '2015-07-18T10:06:42.136-07:00'
blogger_id: tag:blogger.com,1999:blog-6651978490904982752.post-6369373923933502757
blogger_orig_url: http://blog.jiashen.me/2015/07/single-boot-macbook-air-running-ubuntu.html
---

[![](https://pbs.twimg.com/profile_images/1486153713/cof_orange_hex_400x400.jpg)](https://pbs.twimg.com/profile_images/1486153713/cof_orange_hex_400x400.jpg)

## Motivation

For a long time, my MacBook Air was set up to boot up to both Mac OS X Maverick and Ubuntu 14.04, i.e., dual boot. What happens is you just hold the alt/option button on startup, and the screen will prompt you to choose either the Maverick or Ubuntu partition.

Yesterday I decided to go all out with Ubuntu - no more Mac OS X - for a couple of reasons. 1) The Maverick partition took up 20 GB in my 128 GB machine. That's a big percentage. 2) I wasn't using Maverick for much of anything anyway, and I've found alternatives to those use cases. 3) The dual boot solution always felt inelegant. Having to choose a partition at startup just _feels_ ugly.

I wanted a single boot MacBook Air running Ubuntu, and surprisingly, I couldn't find a good guide on the Internet for this. This post is just a diary entry on **what worked for me**. I'm not an operating systems guru, I'm not a kernel maintainer. But if you're in the same situation as I was and you follow these instructions, you'll probably get what you came for.

## Ingredients

*   **13" MacBook Air [6,2](https://help.ubuntu.com/community/MacBookAir6-2/Trusty)**. You'll need the ~200 MB recovery partition that comes with your MacBook Air. The partition lets you kind of perform emergency procedures when things go awry. We need it; if you removed it, I can't help you.
*   **SD card with 32-bit Ubuntu 14.04.2 in persistent mode.**
*   **Wired Internet connection**. The Ubuntu installer doesn't come with the driver for the MacBook Air's wireless card. The easiest way to get wireless Internet is to start with a wired connection and then download the wireless card driver. (As far as I know, the only way to have a wireless connection on the MacBook Air is Thunderbolt-Ethernet adaptor + Ethernet cable + Ethernet port to the Internet.)

## Steps

1.  Back up all your files. They're about to be erased from your machine.
2.  Boot up the recovery disk. This comprises holding CMD+R when you hear the Apple startup tone.
3.  Select "Disk Utility".
4.  Partition your disk for Ubuntu the way you like it*. I allocated 30 GB to root, 4 GB to swap, 8 MB to the reserved BIOS boot area, and the rest to /home. Don't worry about the partition format since you can format them via the Ubuntu installer.
5.  Boot up the SD card.
6.  Select "Install Ubuntu".
7.  Select "Something else" when prompted to select an installation type.
8.  Allocate your partitions the way you decided (e.g., mount the 30 GB partition to root). Wherever possible, choose to reformat the partition. I chose ext3 as the format, but really I know nothing about disk formats.
9.  Let the installer do its thing. The last thing it'll do is prompt you to restart the machine. When it restarts, your MacBook Air will now boot straight to Ubuntu!

*Refer to [this stackexchange post](http://apple.stackexchange.com/questions/167868/cant-make-more-than-two-partitions) if Disk Utility isn't letting you create more than two partitions.

## What didn't work

The steps above look all fine and good, but I actually faced more trouble than expected to get the machine up. Here's one method that **DIDN'T** work.

1.  Partition hard disk as stated above, but without the reserved BIOS boot area.
2.  Install from a USB stick (instead of an SD card) with an Ubuntu 64-bit (instead of 32-bit) installer in non-persistent mode (as opposed to persistent mode).
3.  After installation, the machine wouldn't be able to find the Ubuntu partition.
*   If I didn't hold the option/alt button on startup, the screen would flash a "file not found" kind of icon.
*   If I did hold the option/alt button on startup, the startup manager would fire up but with no options available.

Here's another method that **DIDN'T** work.

1.  Partition hard disk **with** reserved BIOS boot area.
2.  Install from USB stick with an Ubuntu 64-bit installer in non-persistent mode.
3.  After installation the machine seems to try to boot into Ubuntu, but a black screen will appear with the message "error: file '/grub/i386-pc/normal.mod' not found." followed by a "grub rescue" prompt.

As you can see, my friends, behind every successful man is a lot of failure.

## Conclusion

We discussed a method to have just a single Ubuntu operating system running on a 13" MacBook Air. As long as your recovery partition still exists, this method should work.

Hope this helps!

## References

*   How to dual boot OS-X/Ubuntu on a 13" MacBook Air [[Ubuntu](https://help.ubuntu.com/community/MacBookAir6-2/Trusty)]. By far the most useful reference.
*   How to load into an SD card an Ubuntu installer in persistent mode [[pendrivelinux](http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/)]