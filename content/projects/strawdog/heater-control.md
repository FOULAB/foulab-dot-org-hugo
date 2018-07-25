+++
title = "Heater Control"
topic = "strawdog"
headline = "Heater Control"
+++


If you were to rack your brain for an example of a poor design for a control system, 
you might come up with those baseboard heaters with the thermostat integrated in the 
heater.  When the heater turns on, it quickly heats the air in front of it, which 
activates its thermostat and turns it off.  Sadly, I was stuck with a handful of them 
attempting to heat a rather poorly insulated apartment.  And, since its an apartment, 
I didn't have the option of ripping them out and running proper wiring to a thermostat.

{{< centered-image src="poordesign.jpg" alt="Heater with poor design" height="234" width="400" >}}
<center>A canonical example of poor design</center>

I toyed briefly with the idea of just running the wire to the thermostat across the 
floor.  However, landlords and spouses, not to mention the fire marshal, frown on 
running 240 V heater wires across the floor.<br/><br/>So i needed a way to control 
the heater based on the average temperature of the room, and it had to be wireless.  
The [X10 protocol](http://en.wikipedia.org/wiki/X10_(industry_standard) 
allows sending and recieving messages through the electrical power wiring.  An X10 
modem also exists (the PSC05), which can be interfaced nicely with the Atmega chip 
[(thanks to the work of Brohogan)](http://www.arduino.cc/playground/X10/ReceiveX10).  
The guts of an inexpensive power supply, the ATmega chip, and a few supporting 
components can all be fit neatly in a mint tin which can piggyback on the top of the 
X10 modem.

{{< regular-image src="finished1.png" height="400" width="318" >}}{{< regular-image src="finished2.png" height="400" width="287" >}}
<center>Two of the finished products.</center>

It was developed on the Arduino, but for cost reasons is implemented using an ATmega 
on a piece of protoboard.  I've used the DS1820 digital temperature sensor as an 
input.  (I experimented with a few, and found the analog sensors very time consuming 
to calibrate.)  The thermostat is constructed in a mint tin attached on the back 
of the PSC05.  It thus occupies about the same amount of space as a wall wart, and, 
depending on the mint tin, looks much better.

Each thermostat is paired with 
an X10 appliance controller to control one heater.  However, they each regularly 
broadcast the temperature, so a computer can listen in to what is going on, and monitor 
the temperature of the rooms, and the current heater state.  Its been running on 
three heaters for the coldest part of this winter (2011-12), and I'm very happy with 
the results.  We've saved well over a hundred dollars from last year.  This project 
is one of the very few of my projects that has almost paid for itself.

Design
------
*Power supply:*

For the 5V regulated supply, 
my initial plan was to pull power from the 15V lines inside the PSC05. This failed 
because the Atmega pulled too much current – this drew down the PSC05 power voltage 
internally, causing it to silently fail to work – it looked like it was working, 
it received properly, but it would not send.  So i needed a separate supply.  Little 
mini chargers from DealExtreme were far cheaper than any supply i could build myself.  
Beware, however, some cheap USB chargers are unregulated, in which case you need 
to put your own regulator (a 7805, for example).  I found a bunch of tiny, regulated 
ones though, and the guts of those work very well.

*Circuit:*

The circuit is extremely straightforward, and i just 
built it on protoboard. The two indicator LEDs are not essential, but they can be 
convenient to have for debugging.

{{< centered-image src="circuit.png" height="641" width="625" >}}
<center>[The circuit, click to go to design on circuit lab](https://www.circuitlab.com/circuit/tcyqz7/heater-control/)
</center>

Integration with the modem / Assembly
-------------------------------------
The X10 modem has a light which blinks when X10 communication is taking place. For 
debugging, you can pull this indicator light from the X10 modem up through the box.  
Or, if you would rather not tamper with the unit, you can just cover it up.  Its not 
essential to be visible.  I like the blinkenlights, so i pulled it through.

I also brought the 120V power through from the modem. This way i only used one outlet, 
instead of two.  Like the LED wires, i pulled two small wires through the LED hole 
in the front of the PSC05.The power drawn is miniscule, so small wires are fine, 
but be sure the insulation is sufficient for 120V.  Also, in the case of a metal mint 
tin, it is important to ground the tin.  Otherwise, its conceivable that the mint 
tin would contact the hot house wiring, and could give an unpleasant or even fatal 
shock to someone touching it.  It can be grounded by attaching a ground wire, and 
screwing the ground wire to the central screw on the plug.  Yes, its a very remote 
chance that this would happen, but still, i recommend you do it.

<center>
{{< regular-image src="1c.jpg" height="200" width="200" >}}
{{< regular-image src="2c.jpg" height="200" width="200" >}} 
{{< regular-image src="3c.jpg" height="200" width="200" >}}<br/>
a) PSC05 with back removed b) Connect LED leads and 120V supply c) Route wiring through the front LED hole
</center>

I did not pull the PSC05 control wires through the same way though.  I simply chopped 
the end off a phone cord, and plugged it in as intended.  Phone cords are cheap, and 
disassembling the jack from the PSC05 was a hassle (i did try it on one, but it was a pain.)

{{< centered-image src="finalassy.jpg" height="469" width="625" >}}
<center>Final assembly</center>

Installation
-----------
The control unit installs by just plugging it into a convenient outlet, and arranging 
the wire with the temperature sensor so that its a few feet off the floor.  I pinned 
it in place with a pushpin.  Installation on the heater side is more complicated.  I
used a 240V X10 appliance control, which just barely fits in a standard electrical box. 
The heaters had conduit type holes on the sides, so i was easily able to attach an 
electrical box to the side of the heater this way.  (On disassembly, i left the 
connectors but not the boxes, in place, fully closed, to prevent stray fingers or paws 
from finding their way into the live heater wires.)

I also put in two neon 
indicator lights to indicate whether the X10 box had applied power to the heater, and 
whether the heater was actually on.  The idea is to turn the heat up quite high on the 
heater thermostat.  Then the X10 does all the controlling.  These lights are totally 
unnecessary, and are just for debugging.  However, when theres a cold draft, it is 
nice to be able to glance across the room and know whats going on.

<center>
{{< regular-image src="1.jpg" height="200" width="200" >}}
{{< regular-image src="2.jpg" height="200" width="200" >}}
{{< regular-image src="3.jpg" height="200" width="200" >}}<br/>
a) Remove heater front plate b) X10 appliance module barely fits in box c) Route wiring  
{{< regular-image src="4.jpg" height="200" width="200" >}} 
{{< regular-image src="5.jpg" height="200" width="197" >}}<br/>
d) Connect e) Enjoy. Note the neon indicator lights
</center>

Control Strategy
----------------
A strategy which immediately came to mind, probably influenced by much of the X10 and 
intelligent home type projects out there, was to have a central controller.  Thermostats 
would report in to the central controller, and it would decide when and how to switch 
things on or off.  However, a disadvantage of that strategy is its need for a central 
controller.  You may not wish to dedicate a machine to this task for all kinds of 
reasons.

A simpler strategy, and what i ended up doing, is for each thermostat 
to talk to its corresponding heater.  Then each heater and each thermostat can be set 
up or taken down independently.  The disadvantage of this is that there is no 
coordination between the units so they have a tendency to talk over each other and 
interfere.  Which heater corresponds to which controller is controlled by the X10 
unit code.  This value is saved in the ATmegas eeprom memory, so it does not forget 
when powered down, and so that the same code can be uploaded to each.

In addition to sending the commands to change  the heater state, each unit broadcasts 
its temperature.  There were no other X10 units around, so i had the whole space of 
X10 codes to use.  Each unit used one house code to control the heater, and another 
to send the temperature information.  A laptop connected to an arduino/PSC05 running 
the X10 communicator program could listen to this chatter, and monitor the house 
temperature.

Code
----
The code is available on github: [https://github.com/str4w/heatercontrol]
In addition to the code for the heater itself, there are other useful projects in the repo:

* X10Thermostat: The main project.  This code runs on each controller.
* X10Communicator:  Allows listening to and sending X10 messages via the serial port.  This is how i logged the data for the graph.
* PrintX10Codes: dump all the x10 codes to the serial port.
* EEpromSaveByte: loads the unit code into EEprom memory.

Results
-------
So, enough with the build log, did it work already?  Yes.  Like a charm.  A picture 
is worth a thousand words, and i've blathered enough already.  Heres some graphs:

<center>
{{< centered-image src="graphall.png" height="375.6" width="626" >}}
<center>Graphs of all three heaters for winter 2012.  The top graph is the temperature, and the bottom line is the on/off state.  At the start of April, it got warm enough to not really need the heaters anymore, so thats when i deactivated them.</center>

The week of 5-11 February was pretty cold.  By the end of the week, the heater 
is just pretty much on all the time.

{{< centered-image src="officecoldweek.png" height="375.6" width="626" >}}
<center>Office temperature, and heater state for Feb 5-11, 2012.</center>

{{< centered-image src="lrcoldweek.png" height="375.6" width="626" >}}
<center>Living room temperature, and heater state for Feb 5-11, 2012.</center>

{{< centered-image src="kitchencoldweek.png" height="375.6" width="626" >}}
<center>Kitchen temperature, and heater state for Feb 5-11, 2012.</center>

By the end of February it was warmer.  The heater is switched on a lot less now - 
this is where the thermostat starts to save me money.

{{< centered-image src="kitchenwarmweek.png" height="375.6" width="626" >}}
<center>Kitchen temperature, and heater state for Feb 19-25, 2012.</center>

One thing i find very interesting in the graph, is this kind of "thermal 
momentum".  The heater switches on significantly before the room actually heats up.  
A big part of that though is that this often happens at night, when its a lot colder 
outside.  The heater just cannot keep the room temperature stable, until the sun 
comes out.

Further notes
-------------
To test if its working, without having to 
connect a laptop to debug it, there are a couple of tricks.  If the heater is on, 
simply grab the temperature sensor.  After a minute or so, the heat of your hand 
should cause it to turn off.  Similarly, if it is off, put an ice cube, or a cold 
beverage against the sensor.

A problem with these x10 control units (although not necessarily with x10 in general) 
is that they only listen and cannot report their status.  So theres no way to check 
that a heater actually turned on when you told it to.

If you try to transmit X10 codes using the X10 library, but you are not actually 
connected to the PSC05, or it is not plugged in, then the program will freeze.  
This is because the transmission waits to synchronize with the zero crossings.   
If its not plugged in, it will never get any.

The X10 library that i linked to above has evolved since i first downloaded it.  The 
code used in this project is thus from early, early versions.  It would be good to 
arrange it to use the new stuff.

It seemed at first that the extended x10 
codes would be the right place to send extra information, like the temperature.  
However, the PSC05 can't use these codes as they were intended.  This is described 
in the manual, but if you are lazy like me and don't read the manual.... its good to know.

Next steps
----------
A good next step would be to put controls, a real time clock and a display so that 
it would really be a full, programmable thermostat.  However, i chose a higher level 
strategy, and moved to a home with a better heating system.

