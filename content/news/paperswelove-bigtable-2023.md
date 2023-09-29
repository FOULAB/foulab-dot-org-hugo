+++
headline = "ARTICLE"
title = "Foulab x PapersWeLove present: BigTable"
date = "2023-09-29 13:05:23-0400"
author_name = "kryma"
+++

{{< centered-image src="bigtable.jpeg" width="384" height="240">}}
<br/>
<br/>
__[Wednesday October 4th 2023 @ 18:00]({{< ref "calendar.md" >}})__  

Hey all.

We're officially back with our first event in a while, a fresh new collaboration with PapersWeLove.

In this event, Catalin Patulea will be presenting the famous 2006 paper **BigTable: A Distributed Storage System for Structured Data** by F. Chang et al.

A brief abstract from the [announcement on Meetup](https://www.meetup.com/papers-we-love-montreal/events/296166418/):


> Bigtable was developed by Google from 2004 to 2006 for storing large amounts of semi-structured data in a wide range of applications, including web indexing, Google Earth, Google Finance, Google Analytics and others. Its design lies somewhere between traditional relational databases (RDBMS) and pure key-value stores, which later inspired a family of storage systems such as Apache Cassandra and Amazon DynamoDB. Modern storage systems such as Google Spanner and CockroachDB also contain design elements similar to Bigtable. Therefore Bigtable is of both historical and current interest.

> In this talk, we will start with the basic data structures used by
Bigtable: SSTables and log-structured merge (LSM) trees. We will show a
highly simplified LSM-tree implemented in Python and demonstrate its
functions. This is the basic unit of scaling in Bigtable.

> Then, we will roughly follow the 2006 paper:
	1) data model and client API,
	2) the underlying infrastructure on which Bigtable is built,
	3) how the database distributes work across many machines and achieves scaling.

> We will briefly cover more advanced topics such as tuning Bigtable for specific use cases or to improve resource efficiency.

_Light refreshments will be served._
