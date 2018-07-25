+++
title = "Circular Calendar"
topic = "strawdog"
headline = "Circular Calendar"
+++

**UPDATE:** Calendars for 2015 and 2016 have been generated for your enjoyment!  Links are at the bottom of the page.

Calendars... we use em every day.  But I find that the square, month by month representation 
causes us to miss important relationships between events in time.  The circular calendar 
represents a complete year as a circle. Here's an example showing important computer scientists birthdays for the year 2012.

{{< centered-image src="calendar_overall_2012.png" height="626.717067583" width="626" >}}
<center>Circular Calendar</center>

{{< centered-image src="calendar_close.png" height="400.332589286" width="626" >}}
<center>Calendar (2011 version), close up<br />
(Did you know that Linux Torvalds and John von Neumann had the same birthday?)</center>

Download the calendar as a single page PDF 
{{< media-link href="maker_calendar_2012.pdf" text="maker_calendar_2012.pdf" >}} 
here, or spread onto two pages 
{{< media-link href="maker_calendar_2012_2page.pdf" text="maker_calendar_2012_2page.pdf," >}} 
four pages {{< media-link href="maker_calendar_2012_4page.pdf" text="maker_calendar_2012_4page.pdf," >}} 
or six pages {{< media-link href="maker_calendar_2012_6page.pdf" text="maker_calendar_2012_6page.pdf." >}}

I find the calendar useful for showing relationships between complex ranges of dates.  For 
example, here are the moose hunting seasons for Quebec, for 2011.  Complicated, but i found 
this easier to use than a table.

{{< centered-image src="calendar_moose.png" height="455.659863946" width="626" >}}
<center>Moose hunting seasons, Quebec</center>

Again - the calendar may be downloaded as a single page PDF 
{{< media-link src="moose_calendar.pdf" text="moose_calendar.pdf" >}} 
here, or spread onto two pages 
{{< media-link href="moose_calendar_2page.pdf" text="moose_calendar_2page.pdf," >}} four pages 
{{< media-link href="moose_calendar_4page.pdf" text="moose_calendar_4page.pdf," >}} or six pages
{{< media-link href="moose_calendar_6page.pdf" text="moose_calendar_6page.pdf." >}}

The script to create the Circular Calendar can be obtained here
```
svn co https://svn.assembla.com/svn/CircularCalendar/
```

Thanks to Silverbyte for pointing out that the script requires the following packages

* texlive-extra-utils (for epstopdf)
* epstool
* poster (Tool to convert 1PDF to Multiple File PDF's)
* remind (Main calendar engine. download from http://www.roaringpenguin.com/products/remind
* pyephem-3.7.4.1 :: http://pypi.python.org/pypi/pyephem/
* ghostscript version equal or better than 8.71

Its also worth noting you need to be using the GNU version of awk, rather than plain 
vanilla awk.  On Ubuntu, you can get this by installing the gawk package.

If you decide to use it, i'd love to hear about it at strawdog3 at gmail dot com.  In 
fact, since my documentation efforts have been minimalistic at best, i recommend that 
you contact me for a bit of advice about how to get going with the script.

Additional calendars, with the computer scientist birthdays theme.

* 2015, single page {{< media-link href="calendar_2015.pdf" text="calendar_2015.pdf" >}}
* 2015, two pages {{< media-link href="calendar_2015_2page.pdf" text="calendar_2015_2page.pdf" >}}
* 2015, four pages {{< media-link href="calendar_2015_4page.pdf" text="calendar_2015_4page.pdf" >}}
* 2015, six pages {{< media-link href="calendar_2015_6page.pdf" text="calendar_2015_6page.pdf" >}}
* 2016, single page {{< media-link href="calendar_2016.pdf" text="calendar_2016.pdf" >}}
* 2016, two pages {{< media-link href="calendar_2016_2page.pdf" text="calendar_2016_2page.pdf" >}}
* 2016, four pages {{< media-link href="calendar_2016_4page.pdf" text="calendar_2016_4page.pdf" >}}
* 2016, six pages {{< media-link href="calendar_2016_6page.pdf" text="calendar_2016_6page.pdf" >}}.

