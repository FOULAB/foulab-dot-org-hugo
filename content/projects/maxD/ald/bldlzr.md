+++
title = "Building a Lazer Device"
topic = "maxster"
headline = "Building a Lazer Device"
+++

Plans
-----

You can download the CAD drawings of my devices in order to produce your own, but everyone's tools 
and materials vary. Instead of constraining you into my designs, I will put emphasis on tips and 
tricks on how to design your own with your available resources.

Particular Parts
----------------

Here is a list of particular pieces used in this project. There are some notes for each of them, 
documenting what I found to be good characteristics to build a satisfying device.

-laser<br />
Any visible dot laser should do. A basic red laser pointer will do the trick, but lacks 
brightness. A 5mw green laser module works great. Even better if they react well to pulsing 
(~500 hertz). There are plenty of suppliers on-line, eBay, deal extreme and other laser 
specific re-sellers. Getting a pair of safety eye wear corresponding to your laser's wavelength is recommended.

-speakers<br />
The main attraction of the speaker is its linear movement. Sub woofers are ideal, due do the distance traveled 
by the cone. But sub woofers are large and loud. A smaller (~30mm) "full range" speaker tend to work well. 
A durable cone helps connecting the speaker to the mirror.

-amplifier<br />
Since these devices act closely to oscilloscopes, the amplifier plays a big role in the produced shape. 
Different amplifier classes will amplify the sound in different ways, producing different shapes. Class 
A or AB seem to work well.

-mirrors<br />
Pretty much any small mirror will work. Ideally: front silvered, thick, narrow (~10mm). This can be 
scavenged out of laser printers.

-screws<br />
Threaded pointy ones. Smaller threads are nice.

The Mechanism
-------------

The goal is to convert the speakers linear motion to rotary motion. There is not much more to this device 
than two of these, perpendicular and upside down from each other.

{{< centered-image src="1.png" alt="motion" height="626" width="626">}}

Building the Mechanism
----------------------

There are some particular methods to building this mechanism.

-mirror pivots<br />
The mirrors, roughly ~8mm X ~10mm, are drilled on two opposite ends. The pointy screws will rest at the bottom 
of these shallow holes. A long front silvered mirror from a laser printer is ideal, it can be cut into smaller 
pieces with a rotating tool cutting disc. Drilling the mirrors is very tricky. Scoring an cross on the mirror 
with the cutting disc can help start the drilling process on the center point. Drill very slowly using a drill 
bit of roughly ~1.5mm diameter. The hole does not need to be deep, it simply has to provide a "&gt;" for the 
point of the pointy screw. The screws should go into plastic material, thick enough for the screw to be able 
to be adjusted back in forth. The material should also provide flex in order to apply the right amount of 
pressure to the mirror. Just tight enough so it dose not rattle and loose enough to let it rotate freely.
{{< centered-image src="2.png"  alt="mirror" height="626" width="626" >}}

-linkage system<br />
The linkage system is made of solid core wire and hot glue. Bending a "Z" in the wire provides an adjustment 
method. Bending the middle section will allow to tune the mechanism, sending the laser beam straight from 
one mirror to an other and straight out. One end is hot glued to the speaker, the other to the mirror. On the 
mirror side, a certain amount of swivel is needed at the joint. This is achieved by very slightly lubricating 
the end of the wire. Once the glue cools, the wire should be able to swivel inside the glue, without allowing 
much play.
{{< centered-image src="3.png" alt="linkage" height="626" width="626" >}}

Assembly
-------

Basically two of these mechanisms need to be assembled together with the laser. The two speaker and mirror 
assemblies should be positioned perpendicular from on and another. This way the beam hits the first mirror, 
modulating horizontally, and hits the second mirror, modulating vertically. Keep in mind to have access to 
the pointy screws to adjust your mirrors. Here is the top view and side view of the essential elements.
{{< centered-image src="4.png" alt="lzrtop" height="626" width="626" >}}
{{< centered-image src="5.png" alt="lzrside" height="626" width="626" >}}


