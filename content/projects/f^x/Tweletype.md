+++
title = "Tweletype"
topic = "FX"
headline = "Tweletype"
+++

The tweletype is a hardware terminal with a keyboard for input and a printer for output. It prints on one long continuous roll of paper.

A small python script running on a nearby computer downloads messages from the people it is following on Twitter, and sends them to the serial port, causing them to be printed on the paper. It also looks for 
messages which mention [@tweletype] (https://twitter.com/tweletype), and prints those too.

Anything typed on the keyboard (followed by Enter) will be sent as a tweet from the [@tweletype] (https://twitter.com/tweletype) account.

There are actually two pieces of hardware connected to the Tweletype account right now. The first is a TI-745 data terminal, from 1979, which prints on thermal paper. This is still available today as fax pape
r.

Here's a closeup: 

{{< centered-image src="TI745-1.JPG" alt="TI745 Closeup" height="626" width="626" >}}

And some Twitter messages:

{{< centered-image src="TI745-2.JPG" alt="TI745 Some Messages" height="626" width="626" >}}

And here's a zoomed-out picture where you can see the long paper full of tweets disappearing into the background:

{{< centered-image src="TI745-3.JPG" alt="TI745 Feed" height="626" width="626" >}}

The second is a Model 28 Teletype, from circa 1964. This particular unit was formerly the property of NASA and still has their asset tag sticker on it.

It's a bit more imposing that the previous version, being about 4 feet high and made out of sheet metal. It's mostly electromechanical, containing very few electronic parts. The binary encoding and decoding i
s performed by levers and cams, all powered by a single AC motor. Model 28

If you're interested, you can download the source code for the tweletype project at [Google Code] (https://code.google.com/archive/p/tweletype/).

