+++
title = "Limelight"
topic = "strawdog"
headline = "Limelight"
+++

The Joule Thief is a well known circuit for boosting voltage from a 
nearly dead battery to power an LED.  What if you don't have a dead 
battery?  Use a lime, and some copper and zinc!

This was a surprisingly educational project.  The Joule Thief circuit 
is extremely simple [Wikipedia: Joule Thief](http://en.wikipedia.org/wiki/Joule_thief)

Here is the result, hooked to the lab power supply, with 0.5V input, 
and basically unlimited current.

{{< centered-image src="limelite_circuit.png" height="335" width="600" >}}
<center>The circuit for the LimeLite</center>

0.5V btw, is not enough to light an LED, even a red one.  The result is 
nice and bright, and the scope hooked to the + side of the LED shows an 
approximately 2kHz roughly square waveform.

{{< centered-image src="scope_slow.jpg" height="435" width="500" >}}
<center>The signal on the LED lead with 0.5V from a bench power supply.  About 2kHz</center>

A battery can be made from any acidic substance – like lime juice – by 
placing two dissimilar metals in it.  Copper (A wire or a penny) and 
zinc (a galvanized nail) work well.  However, just sticking copper 
and zinc in a lime will generate a voltage, but it can't sustain current 
for any length of time.  As a result, it won't drive the Joule Thief.  
The animation shows what happens though

{{< centered-image src="scope_anim.gif" height="240" width="320" >}}
<center>What happens if you naively stick metal in a lime</center>

If you just stick two pieces of metal into a lime, the internal resistance 
of the lime means that the available current drains very quickly.  The 
circuit switches faster and faster as the lime battery cannot recover.
One solution – soak tissue in lime juice and wrap the galvanized nail.  
Then wrap that with copper wire.  This works better.

{{< centered-image src="tissue_battery.jpg" height="453" width="600" >}}
<center>A battery made using tissue. This generates a reasonable amount of current to drive the circuit.</center>

A better solution – shred the inside of the lime.  This lowers its 
internal resistance caused by the membranes of the lime, and allows enough 
current to flow to operate the Joule thief.  The current available is 
still significantly less than that for the lab power supply though, and it 
switches at a noticeably higher frequency - something around 10kHz.

{{< centered-image src="lime_battery.jpg" height="450" width="600" >}}
<center>Limelight driven by lime based battery</center>
{{< centered-image src="glowinggreen.jpg" height="450" width="600" >}}
<center>Limelight driven by lime based battery</center>

Many thanks to FX for the high efficiency diodes – works much better

