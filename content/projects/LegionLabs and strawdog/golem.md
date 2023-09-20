+++
title = "The Golem: One bit to rule them all"
topic = "LegionLabs and strawdog"
headline = "The Golem: One bit to rule them all"
+++


A Foulaboration brought to you by LegionLabs and strawdog
=========================================================

*An update:* Tselly Regev points out that 
[two machines named Golem](http://scienceblogs.com/weizmann/2013/10/10/a-computer-for-nobel-prize-winning-work/)
were built at the Weizmann institute in the 1960's. More information about 
these machines may be available through the interviews in 
[The Computer Pioneers](http://www.ieeeghn.org/wiki/index.php/Archives:The_Computer_Pioneers:_Weizmann_Institute_Video_Oral_History)

Comments, responses to the challenge?  Post them at the 
[corresponding blog posts](http://strawprojects.blogspot.com/search/label/Golem) or at strawdog3 (at) gmail (dot) com

*A challenge:* we would be delighted to offer a free 555 timer and a beer to 
the first person (besides us) who writes a non-trival program for the Golem.  
And don't worry, our definition of non-trivial is pretty relaxed.
{{< centered-image src="animation.gif" alt="Animated Golem running" >}}
<center><br/>The Golem</center><br/>

A system is [Turing-complete](http://en.wikipedia.org/wiki/Turing_complete) 
if it can solve any problem that can be defined as an algorithm. It is natural to 
ask (well, Legionlabs found it natural) what minimalist Turing-Complete system 
could be easily implemented. While taking the train to work one day, a one-bit, 
single instruction set processor (zero bits didn't cut it) was designed.

[Turing machines](http://en.wikipedia.org/wiki/Turing_machine) 
must be able to conditionally branch (to form loops, the building block of algorithms), 
and move data (to store the result of an iteration of an algorithm). So, a simple 1-bit, 
single-instruction set computer can be made using the an operation of form 
"COPY, BRANCH IF X", where X is any parameter that has at least 2 exclusive logic 
states ( for example, logic=TRUE and LOGIC=FALSE). In our example,  X is TRUE if the 
number copied was a 1, and FALSE if the number copied was a 0.

If the branching operation is absolute (can point to any memory address), it 
is necessary to have separate areas of memory devoted to "copying target" addresses, to 
"branching target" addresses, and for storing the data (which is also the branch flag).

If the branching operation is relative, then only one type of memory/data is 
necessary, but it may take several cycles to get to a memory address, and who would 
bother designing a CPU that takes more than one cycle to branch _*(grin)*_.

The second system only runs off a single tape, and the first fits nicely on a punched 
card. The authors are aware that the second example perhaps constitutes a better 
description of a true one-bit computer than the first example, but since punched cards 
are inherently good, our choice was predetermined. Also it should run at precisely 
1 MIPS/Mhz which is nice.

Because Legionlabs has a soft spot for old legends of all sorts, the machine was named 
Golem, and the single instruction (Copy data bit to memory address A, if the datum 
copied was 1, branch to memory address B) was named EMET.

(Branch if EMET=TRUE, get it? Also, since it has no opcode to generate output, it cannot 
speak... well, unless you memory-map I/O)

Although its possible to go old school and implement all this with marks on paper, its a 
bit easier to play with in an interactive implementation.  We have implemented a version 
in Processing for your amusement.

<center>
<table><tr valign="top">
<td>{{< centered-image src="golem-paper.jpg" alt="Golem on paper" >}}
<br /><center>For Purists</center> 
</td>
<td>{{< centered-image src="golem-blinken.png" alt="Blinky Golem" >}} 
<br /><center>Das Blinkenlights</center> </td>
</tr></table>
</center>

In these diagrams, the instruction index is on the far left, the instruction memory is the 
next column (one bit only), followed by the write to address, and the branch to address.  
The machine always copies its bit to the write to address; if the bit was 1, it jumps to 
the branch to address.

Here is a simple counting algorithm implemented on this Turing machine. Fun fact: The vast 
majority of people don't know how to perform a counting operation. Grade school generally 
implants memory-mapped ALUs in children, not an actual counting algorithm. 
The javascript version does not permit editing, but if you download the code and run it
with the java target for processing a GUI can be enabled.  Clicking on edit will allow you 
to edit a form of pseudo assembly, that, at least at some 
point, strawdog found somewhat marginally easier to understand than the bitwise statements.
{{< centered-image src="golem-counting.png" alt="Golem Counting" >}}
<center>

[Implementation of counting algorithm on openprocessing.org](https://www.openprocessing.org/sketch/42797)

</center>

However, it is not immediately intuitive how the fact that this is a Turing-complete system 
relates to Turing machines as they are usually formulated. It was natural to ask (well 
strawdog found it natural) what a Turing machine would look like in this one bit system.

Consider the machine known as the 
[3-state Busy Beaver](http://en.wikipedia.org/wiki/Busy_beaver). 
Here it is, presented in the Turing machine form we are more familiar with.
{{< centered-image src="busybeaver.png" alt="Busy Beaver algorithm" >}}
<center>

[Implementation of Busy-Beaver classic Turing machine on openprocessing.org](https://www.openprocessing.org/sketch/42796)

</center>

Now heres what it looks like implemented in the one bit processor.
{{< centered-image src="golem-busybeaver.png" width="626" alt="Busy Beaver algorithm in Golem" >}}
<center>

[Implementation of Busy-Beaver algorithm in one-bit processor  on openprocessing.org](https://www.openprocessing.org/sketch/42798)

</center>

Lets analyse whats going on here! This program can be broken into two parts: the Turing state 
machine itself (memory locations 2-49) and the tape, which is in the locations 51-189.

The fun part turns out to be implementing the tape, and this is extra fun because the machine 
does not have the capacity to store a return address, or to manipulate addresses. Each cell 
of the tape requires 21 memory locations. The turing state machine accesses a cell of the 
tape by starting at the beginning and jumping to the cell which is activated.

This may be slightly more easy to understand by looking at the code written in a kind of pseudo-assembly.
```
HALT:            1 1 0 +0              K ; HALT STATE
Input:           2 0 +0 (C1B)          b ; input buffer
C0B:             3 0 +0 (CZeroStart)   b ; tape was zero
B0B:             4 0 +0 (BZeroStart)   b ;
#----------
AZeroStart:      5 1 +0    +5         r ; azerostart
                 6 1 -1    +1         w ; set writemode
                 7 1 (B0B) +1         w ;
                 8 1 (B1B) +1         w ;
                 9 1 -1    (T0SR)     w ;
                10 0 -5    +1         w ; set shiftmode
                11 1 -0    (T0W1)     w ;
#----------
BZeroStart:     12 1 +0    +5         r ; bzerostart
...
```
[Full Code Listing](golem-listing)

In this notation, location labels are on the far left, references to labelled locations are 
enclosed in parentheses (e.g. (HALT)), and relative referencing is indicated by a +/- before 
the offset.

If you want to play with it, please do.  The processing code is available from the links above 
at openprocessing.org.  You can code for the machine right in the java version by pressing 
edit (but copy and paste your work or it will be lost).

We'd love to hear about your experiences, if only to know that there are other people out 
there as crazy as we are.  And remember, free 555 and beer. And glory, lots of glory.

