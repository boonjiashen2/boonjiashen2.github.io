---
layout: post
title: 'UAV Software Recipes I: Hardward-in-the-loop simulation'
author: Jia Shen Boon
tags:
modified_time: '2015-06-30T10:01:37.577-07:00'
blogger_id: tag:blogger.com,1999:blog-6651978490904982752.post-871585390835275053
blogger_orig_url: http://blog.jiashen.me/2015/06/uav-software-recipes-i-hardward-in-loop.html
---

[![](https://blog.adafruit.com/wp-content/uploads/2014/10/NewImage183.png)](https://blog.adafruit.com/wp-content/uploads/2014/10/NewImage183.png)

3DRobotics IRIS+

## Background

Hey everybody! Today I want to write about simulating an unmanned aerial vehicle (UAV, popularly known as "drones") with hardware in the loop (HIL, HITL). I'm not sure about the nitty gritty details but as far as I can tell, HITL is when you place the flight stack that sits in your flight controller unit (FCU) in a simulated environment, i.e. you inject simulated sensory inputs into the flight stack and ask the flight stack to produce actuator outputs. This scenario is the same as software in the loop (SITL), except that in SITL, the flight stack in question is an instance that sits in your workstation, e.g. your laptop, rather than the actual one in your flight controller unit.

Why would you pick HITL over SITL? For one thing, since HITL involves the actual flight stack that you'll be flying with, it should give simulated results that are closer to real world flight results. On the other hand, SITL can be done with your laptop and nothing else; HITL requires you to connect your laptop to the FCU, which can be a pain if your UAV is bulky and cumbersome.

Again, I'm not 100% sure on the above, but it makes sense to me.

To provide some context, I've been working as a research assistant at a robotics lab at Wisconsin. These recipes are the crystallization of my poking around existing software libraries in the UAV world.

# UAV system specifications

Here's the hardware related specifications that I'm running on. You'll need the PX4 flight stack for this HITL, but everything else is swappable. For example, you can go with another FCU besides the Pixhawk.

*   3DRobotics IRIS+ chassis
*   3DRobotics Pixhawk FCU
*   PX4 flight stack [[Github](https://github.com/PX4/Firmware)] [[Pixhawk](https://pixhawk.org/start)]
*   FrSky Taranis Plus remote control transmitter (RC transmitter)

Note: the HITL that I'll be describing DOES NOT work with the Ardupilot/Arducopter flight stack. At the time of writing, Ardupilot only supports SITL. If you're using it, either switch to PX4 or be content with SITL.

# Software specifications

*   Ubuntu 14.04.1 on the workstation. I'll refer to this workstation as the ground control station or GCS.
*   jMAVSim simulator [[Github](https://github.com/DrTon/jMAVSim)] [[Gitter](https://gitter.im/DrTon/jMAVSim)]
*   qgroundcontrol GCS software [[qgroundcontrol](http://qgroundcontrol.org/)]

# How to run the simulator

1.  Flash PX4 firmware to the Pixhawk using qgroundcontrol.
2.  Perform initial calibration of PX4 using qgroundcontrol. Make sure to assign a channel to flight modes, because you'll have to set the mode to manual later during flight.
3.  Change `SYS_AUTOSTART` parameter on PX4 to 1001.
4.  Connect IRIS+ microUSB to GCS' USB
5.  Compile and run `Simulator.java`.

    ~~~
    >> cd
    >> ant  # build simulator
    >> java -cp lib/*:out/production/jmavsim.jar me.drton.jmavsim.Simulator  # run simulator
    ~~~
    {: .language-bash}

6.  Turn on RC transmitter and flip mode to manual. You should see something like:

    ```
    MSG: Flight mode: MANUAL
    ```

7.  Arm Pixhawk via RC transmitter. You should see something like the following. Notice that it states`TAKEOFF DETECTED` even though my throttle stick is still down, which is weird.

    ```
    MSG: ARMED by RC
    MSG: home: 55.7533878, 37.6253804, 5.50
    MSG: [cmd] arming state: ARMED
    MSG: [sdlog2] log dir: /fs/microsd/log/2015-06-29
    MSG: TAKEOFF DETECTED
    MSG: [sdlog2] starting: 18_55_11.px4log
    ```

8.  Push throttle stick up. The graphic of jMAVSim's simulated copter should now take off.