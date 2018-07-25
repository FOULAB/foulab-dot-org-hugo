+++
title = "Heartbeat"
topic = "strawdog and gapzap"
headline = "Heartbeat"
+++

The heartbeat to midi project was a collaboration with [David Usher](http://www.davidusher.com) to develop a device that can read a persons heartbeat and produce a midi note. The project was completed in 2013, since then, there has been a minor repair or two necessary, but overall it has held up solidly. Here is a video of it in action:

{{< youtube PyDLtRc8l5g >}}


The final device fit into an Altoids tin, thanks to using an Arduino Nano, and a 9v battery instead of a Duemilanove and a bunch of AA's.

{{< centered-image src="altoids.jpg" width="626" alt="Altoids tin" >}} 
<br /><center>The design fit in an Altoids tin</center>


While simple in principle, the tricky part is that the human heartbeat is actually fairly irregular. Instead of being like a pendulum that swings back and forth at a stable frequency, it is more like a series of events, spaced roughly the same time interval apart. The ear picks up this irregularity very quickly.

To make this work in an aesthetically pleasing way, it was necessary to smooth out the rate, but remain reasonably responsive to changes in heart rate. Simple linear filtering was not enough, and an adaptive algorithm had to be developed.

More details about the development are available in the blog posts, and the code is available on Github:
https://github.com/str4w/HeartbeatMidi
