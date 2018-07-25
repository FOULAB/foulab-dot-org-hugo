+++
title = "Lzrptch"
topic = "maxster"
headline = "Lzrptch"
+++

//Pure Data<br/>I used PureData from the beginning in this project. It is a 
great tool to experiment with audio synthesis. At first I only knew some basics, 
but as experiments yielded results, I also learned much more about PD. This 
became my finale project for my programming for artist class. I developed in 
PD, but had to transfer everything over to MAXMSP once in a while, the class only accepted MAXMSP patches...

Most of my patches work with shapes. Shapes consist of two synthesized sound waves 
(left/right), one for the vertical movement and one for the horizontal movement of 
the laser. Each shapes has 8 parameters: left and right frequency, frequency 
decimal point, duty cycle, gain and low pass filter. It starts with a phasor, 
that generates square waves, who's duty cycle is modified and then smoothed out with a low pass filter.

At first the experimenting patches were full of sliders and other number objects. As I 
found what I wanted to do, I was able to start controlling these values with input devices. 
First an double analog joystick game pad (logitech dual action). Then a USB-MIDI control 
pad (Akai LPD8). And now with tchOSC with custom interface on a iPod touch.

The current software can manage 8 shapes on up to 4 lasers. There is also laser pulsing control, 
to break the shapes into separate segments of various length. There are also some elements to 
input live music to control certain parameters of the shapes.

This software also works with one of my other projects. &gt; [FRO](../../fro)

//Screenshots<br />
Here are some images of the evolution of my patches.

{{< centered-image src="lzpd1.png" height="433.010362694" width="626" >}}
{{< centered-image src="lzpd2.png" height="466.262068966" width="626" >}}
{{< centered-image src="lzpd3.png" height="499.263803681" width="626" >}}
{{< centered-image src="lzpd4.png" height="392.462455304" width="626" >}}
{{< centered-image src="lzpd5.png" height="391.995238095" width="626" >}}
{{< centered-image src="lzpd6.png" height="677.421428571" width="626" >}}
{{< centered-image src="lzpd7.png" height="393.485714286" width="626" >}}
{{< centered-image src="lzpd8.png" height="431.607560756" width="626" >}}

