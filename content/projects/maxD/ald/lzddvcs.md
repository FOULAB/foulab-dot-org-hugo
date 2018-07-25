+++
title = "Lazer Devices"
topic = "maxster"
headline = "Lazer Devices"
+++

Here are some images and notes of various devices I have designed and built.

{{< youtube pVfel6o8b3A >}}

//Descriptive<br/>
This audio visual performance device I developed thrives on simplicity, itis as simple as mechanically extended speakers and a laser. The two speakers actuate a pair of mirrors that rotate on perpendicular axis. One speaker waves the beam vertically and the other horizontally. By modulating waveforms with PureData, organic shapes are produced. Certain key elements of appealing shapes are things such as duty cycle, phase offsets, harmonics, all within frequencies under 200 Hertz. Natural sounds can also be used: one can control a form by humming into a microphone. And it can also be used as a form of visuals for musical concerts. I call it LJing.

//Origin<br/>The reason I started combining speakers and lasers was to produce an  affordable DIY laser scanner. Laser scanners trace predetermined images,  simple graphics consisting of lines. This requires to control the exact  angle of a mirror at a high speed. My first attempt was using hard drive  parts, but failed to succeed do to the advanced electronics in its control  mechanisms. Speakers where my second attempt. But I was not able to control  their absolute position. While experimenting with audio in PureData, I was  able to draw some interesting shapes, that were no where close to what I was  looking for at that time.<br />
A couple months later, after entering art school, I decided to explore the possibilities of using audio synthesis, speakers and a laser.

//Techniques<br/>Here are some images of various stages of my prototyping. These devices are all built out of flattened PVC pipe. 10 feat of 4 inch PVC pipe costs about 10$, it is a very cheap source of plastic. Most importantly, it plays well with foulab's CNC router (computer numerical control). Many plastics will melt instead of getting cut due to the speed of our router. 4 inch PVC pipe has a thickness of 1/8th of an inch, using a 1/8th router bit, snap fit constructions are made very easy.<br/>These were all designed with QCAD, a 2D computer-aided design (CAD) software. The designs were then imported into gCncCam, a 2.5D computer-aided manufacturing (CAM) software. Then our modified EMCO PCMill 30 was controlled by EMC2, Enhanced Machine Controller. This all ran on an old P4 with a gig of ram, running the EMC2's prebuilt Ubuntu release.<br/>I normally build most of my projects with scavenging and repurposing. Throughout developing these laser devices I also learned to use our CNC machine and its software toolchain. It did yield a high amount of frustration. Sometimes the work would of been done much quicker by hand. But I kept hacking and at one point things worked well. Consistent accuracy, is very pleasing. Machines are your friends, specially when your are trying to build three identical devices.

The Devices
-----------
{{< centered-image src="l3906.jpg" height="834.666666667" width="626" >}}
{{< centered-image src="l3908.jpg" height="834.666666667" width="626" >}}
Here we have lzrV5 sitting on top of lzrV2. I unfortunately no longer have images of lzrV1. lzrV2 
had the mirrors pivoting on ball bearings, which offered too much looseness at this scale, resulting 
in shaky shapes. The speakers had great linear movement, but where a little loud, hard on the ears 
during long periods of experiments.<br/>
lzrV5 was a miniaturization test. The 20mm wide speakers did not offer enough linear movement. A 
small blurry shape could be seen at a distance

{{< centered-image src="l4054.jpg" height="469.5" width="626" >}}
{{< centered-image src="l4056.jpg" height="469.5" width="626" >}}
{{< centered-image src="l4058.jpg" height="469.5" width="626" >}}
lzrV3 is my most trustworthy build. It sports Polk Audio My Dock amp and speakers. It is pricey 
but the parts are great for this application and the device actually fits in the dock's travel bag. 
The laser is a 5mw 532nm (green) module hooked up to a iduino (arduino clone), in order to be 
controlled via software. Features a sleek back panel, optional battery pack for the amplifier 
and standard tripod mount. Here we see it with a iPod touch thats sole purpose is to run touchOSC 
in order to control PD.

{{< centered-image src="l4050.jpg" height="469.5" width="626" >}}
{{< centered-image src="l4059.jpg" height="469.5" width="626" >}}
lzrV6 for 6 channels of audio for 3 lasers. Having well experimented with one laser audio visual 
performances, one laser confined me to very simple sound structure. So I thought having three 
separate lasers and sounds would be fun. The device is built, I have used it with great success 
for LJing at a electronic music event, but I need to work on its performance aspect.

//More images

{{< centered-image src="l3849.jpg" height="469.5" width="626" >}}
{{< centered-image src="l3868.jpg" height="469.5" width="626" >}}
This is a hacked up portable lzrV4 in an underground ice tunnel.


{{< centered-image src="l3912.jpg" height="834.666666667" width="626" >}}
Drilling the mirrors for lzrV6 with a PCB drill bit.

{{< centered-image src="l3918.jpg" height="469.5" width="626" >}}
Speakers in their brackets for lzrV6.

{{< centered-image src="l3915.jpg" height="469.5" width="626" >}}
Assembling the lzrV6, spot the carcass of lzrV1 at the top left!

{{< centered-image src="l3919.jpg" height="469.5" width="626" >}}
lzrV6 tacking shape!

{{< centered-image src="l3923.jpg" height="469.5" width="626" >}}
Top and bottom halves of lzrV6.

{{< centered-image src="l3995.jpg" height="834.666666667" width="626" >}}
lzrV6 and lzrV3 ready for some LJing at a electronic music event.

