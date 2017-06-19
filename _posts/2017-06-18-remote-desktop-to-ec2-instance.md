---
layout: post
title: Remote desktop to EC2 instance
---

I'm planning to run training and inference of some deep learning models on some EC2 GPU instances, because I'm too cheap to get myself a physical GPU-enabled machine, and also because with EC2 you have the flexibility to choose how powerful you want your machine to be for each task. With this use case, coupled with the task being computer vision tasks, I thought I'd figure out how to connect to an EC2 instance over a graphical user interface (GUI), a.k.a "remote desktop".

There are several options out there, including VNC, NoMachine and the remote desktop protocol (RDP). I use RDP at work. It turns out that RDP is also the easiest to set up on EC2.

I've placed the scripts in [https://github.com/boonjiashen/RemoteEC2](https://github.com/boonjiashen/RemoteEC2)

Steps to running RDP from macOS to Ubuntu

1. __Launch an Ubuntu EC2 instance that allows incoming TCP traffic on port 3389__. That's the default port that the RDP server listens to.
2. __Run the build script on the Ubuntu instance__. See the git repository! In the script, you'll be prompted to set a password for the `ubuntu` user, who's the default user in Ubuntu EC2 instances.
3. __Install Microsoft Remote Desktop on your client__. This client would be your Mac.
4. __Run Microsoft Remote Desktop__. You'll only need to specify 1) the public DNS of your EC2 instance (typically xxx.aws.com), 2) your username `ubuntu`, and 3) the password that you decided on above.
5. __Microsoft Remote Desktop should now display your Ubuntu desktop!__

As a meta-point, I'm using a remote Ubuntu instance to create this post because I'm having trouble getting my Mac to install the Ruby gems required to build my website assets.

I hope this was helpful! Getting all this information was surprisingly non-trival.
