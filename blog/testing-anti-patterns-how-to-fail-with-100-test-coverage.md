--- 
title: "Testing Anti-Patterns: How to Fail With 100% Test Coverage"
layout: post
---
The **Testing Anti-Patterns series** explores numerous testing-related missteps, provides tips for identifying and extinguishing them in an existing codebase, and offers strategies for avoiding them altogether on new projects.  The series began as a conference presentation (titled **How to Fail With 100% Test Coverage**), and many of the anti-patterns are now available through the collection of essays below.

## Essays

* [Incidental Coverage](http://jasonrudolph.com/blog/2008/06/17/testing-anti-patterns-incidental-coverage/ "jasonrudolph.com/blog - Testing Anti-Patterns: Incidental Coverage")
* [Overspecification](http://jasonrudolph.com/blog/2008/07/01/testing-anti-patterns-overspecification/ "jasonrudolph.com/blog - Testing Anti-Patterns: Overspecification")
* [Underspecification](http://jasonrudolph.com/blog/2008/07/08/testing-anti-patterns-underspecification/ "jasonrudolph.com/blog - Testing Anti-Patterns: Underspecification")
* [The Ugly Mirror](http://jasonrudolph.com/blog/2008/07/30/testing-anti-patterns-the-ugly-mirror/ "jasonrudolph.com/blog - Testing Anti-Patterns: The Ugly Mirror")
* [Invisible Code](http://jasonrudolph.com/blog/2008/08/18/testing-anti-patterns-invisible-code/ "jasonrudolph.com/blog - Testing Anti-Patterns Potpourri - Quotes, Resources, and Collective Wisdom")

And while not specific to any one anti-pattern, [this post](http://jasonrudolph.com/blog/2008/10/07/testing-anti-patterns-potpourri-quotes-resources-and-collective-wisdom/ "jasonrudolph.com/blog - Testing Anti-Patterns: Invisible Code") offers a collection of related quotes and resources spanning the last ten years and then some.

## How to Fail With 100% Test Coverage

### Abstract

With an expressive language such as Ruby or Groovy and with modern test practices, 100% <a href="http://jasonrudolph.com/blog/2008/06/10/a-brief-discussion-of-code-coverage-types/">C0 test coverage</a> is readily achievable. But 100% coverage is meaningless without other supporting habits and practices. Over the last few years, we have taken dozens of projects to 100% coverage, and there are still plenty of things that can go wrong:

* Fragile Mocking
* [Incidental Coverage](http://jasonrudolph.com/blog/2008/06/17/testing-anti-patterns-incidental-coverage/ "jasonrudolph.com/blog - Testing Anti-Patterns: Incidental Coverage")
* [The Ugly Mirror](http://jasonrudolph.com/blog/2008/07/30/testing-anti-patterns-the-ugly-mirror/ "jasonrudolph.com/blog - Testing Anti-Patterns: The Ugly Mirror")
* [Overspecification](http://jasonrudolph.com/blog/2008/07/01/testing-anti-patterns-overspecification/ "jasonrudolph.com/blog - Testing Anti-Patterns: Overspecification")
* Slow Tests
* [Underspecification](http://jasonrudolph.com/blog/2008/07/08/testing-anti-patterns-underspecification/ "jasonrudolph.com/blog - Testing Anti-Patterns: Underspecification")
* Shallow Tests
* [Invisible Code](http://jasonrudolph.com/blog/2008/08/18/testing-anti-patterns-invisible-code/ "jasonrudolph.com/blog - Testing Anti-Patterns: Invisible Code")

We will look at examples of each of these problems, and show how to prevent them from infecting your project.

### Presentations

* [NFJS - Research Triangle Software Symposium](http://www.nofluffjuststuff.com/show_session_view.jsp?presentationId=10357&amp;showId=130 "How to Fail With 100% Test Coverage - Research Triangle Software Symposium - June 22, 2008") - 06/22/2008 [[JR](http://jasonrudolph.com/about.html "Jason Rudolph")]

* [Agile RTP ](http://agile.meetup.com/29/calendar/7707801/ "How to Fail With 100% Test Coverage -  Agile RTP (ARTp) (Raleigh, NC)") - 07/01/2008 [[JR](http://jasonrudolph.com/about.html "Jason Rudolph")]

* [NFJS - Central Ohio Software Symposium](http://www.nofluffjuststuff.com/show_session_view.jsp?showId=126&amp;presentationId=11528 "How to Fail With 100% Test Coverage - Central Ohio Software Symposium - July 26, 2008") - 07/26/2008 [[SH](https://twitter.com/stuarthalloway "Stuart Halloway")]

* [erubycon](http://erubycon.com/schedule.html "How to Fail With 100% Test Coverage - erubycon 2008") - 08/16/2008 [[SH](https://twitter.com/stuarthalloway "Stuart Halloway")]

* [raleigh.rb](http://ruby.meetup.com/3/calendar/7849526/ "How to Fail With 100% Test Coverage - The Raleigh-area Ruby Brigade (raleigh.rb) (Raleigh, NC)") ([mp3](http://feeds.feedburner.com/~r/raleighrb/~5/369954390/2008-08-19_how_to_fail.mp3 "MP3 Audio of 'How to Fail With 100% Test Coverage' presented at raleigh.rb on 08/19/2008")) ([iTunes](http://phobos.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?i=34717809&amp;id=273853776 "raleigh.rb Podcast on iTunes - 'How to Fail With 100% Test Coverage' presented at raleigh.rb on 08/19/2008")) ([video](http://jasonrudolph.com/blog/2008/09/09/audio-video-slides-how-to-fail-with-100-test-coverage-at-raleighrb/ "jasonrudolph/blog - Audio, Video, Slides: How to Fail With 100% Test Coverage at raleigh.rb")) - 08/19/2008 [[JR](http://jasonrudolph.com/about.html "Jason Rudolph")]

* [Software Test & Performance Conference](http://www.stpcon.com/conferenceday3pm.html#906 "How to Fail With 100% Test Coverage -  Software Test &amp; Performance") - 09/26/2008 [[JR](http://jasonrudolph.com/about.html "Jason Rudolph")]

* [NFJS - Twin Cities Software Symposium](http://www.nofluffjuststuff.com/show_session_view.jsp?presentationId=11948&showId=149 "How to Fail With 100% Test Coverage - Twin Cities Software Symposium - July 26, 2008") - 10/11/2008 [[SH](https://twitter.com/stuarthalloway "Stuart Halloway")]

* [NFJS - Gateway Software Symposium](http://www.nofluffjuststuff.com/show_session_view.jsp?presentationId=13026&showId=183 "How to Fail With 100% Test Coverage - Gateway Software Symposium - March 7, 2009") - 03/07/2009 [[SH](https://twitter.com/stuarthalloway "Stuart Halloway")]

--

To schedule an event at your user group, conference, or company, check us out at [thinkrelevance.com](http://thinkrelevance.com "Relevance: Agile Development, Consulting and Training").