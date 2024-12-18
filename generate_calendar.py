#!/usr/bin/python

# Usage: generate_calendar.py <PATH_TO_NEWS_ARTICLE>

from datetime import datetime, time, timezone
import sys
from zoneinfo import ZoneInfo
import uuid




filename = sys.argv[1]
def header_into_event(header: str) -> str:
	header, evtime = header.rsplit("@", 1)
	header, evdate = header.rsplit("-", 1)
	header = header.removeprefix("###").strip()
	now = datetime.now()
	evdate = evdate.strip().removesuffix("st").removesuffix("nd").removesuffix("rd").removesuffix("th")
	evdate += f" {now.year}"
	evdate = datetime.strptime(evdate, "%A %B %d %Y")
	start_time, end_time = [time.fromisoformat(i.strip()) for i in evtime.split("-")]
	start_dt = datetime.combine(evdate.date(), start_time, tzinfo=ZoneInfo("America/New_York"))
	end_dt = datetime.combine(evdate.date(), end_time, tzinfo=ZoneInfo("America/New_York"))
	return f"""BEGIN:VEVENT
DTSTAMP:{now.astimezone(timezone.utc).replace(tzinfo=None).isoformat().replace("-", "").replace(":", "").split(".")[0]}Z
UID:{uuid.uuid4()}
DTSTART;TZID="America/New_York":{start_dt.replace(tzinfo=None).isoformat().replace("-", "").replace(":", "")}
DTEND;TZID="America/New_York":{end_dt.replace(tzinfo=None).isoformat().replace("-", "").replace(":", "")}
SUMMARY:{header}
URL:https://foulab.org
DESCRIPTION:{header}
LOCATION:Foulab\, 999 Rue du Collège\, Montréal\, QC H4C 2S2\, Canada
END:VEVENT
"""

with open(filename) as file:
	for line in file:
		if line.startswith("###"):
			print(header_into_event(line))
