--- 
wordpress_id: 281
title: "Git Up! 10 Reasons to Upgrade Your Old Git Installation"
wordpress_url: http://jasonrudolph.com/blog/?p=281
layout: post
tags:
- git
---
Git has seen a huge influx of newcomers over the past year.  Many folks installed Git as they read through their first tutorial, got it working, and are still using that same trusty installation today.  But rest assured, Git has not been standing still. 

If you installed Git a year ago (perhaps when Rails made the move in April of last year), you would've grabbed v1.5.5. The Git team has cranked out [five](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.5.6.txt "Git 1.5.6 Release Notes") [feature](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.0.txt "Git 1.6.0 Release Notes") [releases](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.1.txt "Git 1.6.1 Release Notes") [since](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.2.txt "Git 1.6.2 Release Notes") [then](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.3.txt "Git 1.6.3 Release Notes"), full of usability improvements, a few new tricks, and, of course, numerous bug fixes.  So it's time for some spring cleaning of your dusty old Git installation.  

If you're not yet sportin' the 1.6.3 hotness, here are ten reasons to Git up!

[![Git Up!](http://jasonrudolph.com/resources/20090527-git-up.png "Image courtesy of Midnight Digital (flickr.com/midnight-digital)")](http://flickr.com/photos/midnight-digital/1878360316 "Image courtesy of Midnight Digital (flickr.com/midnight-digital)")

1. Everyone's crazy-fast VCS is even faster: `git clone` and `git merge` have been rewritten in C. [[1.5.6](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.5.6.txt "Git 1.5.6 Release Notes")] [[1.6.0](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.0.txt "Git 1.6.0 Release Notes")]
1. Viewing your staged changes no longer requires a cheatsheet in order to remember the command: `git diff --staged` serves as a substantially-more-obvious synonym to `git diff --cached`.  [[1.6.1](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.1.txt "Git 1.6.1 Release Notes")]
1. Stashes always remember where they came from and make it easy to get back there: `git stash branch <branchname> [<stash>]` creates a new branch starting at the commit at which the stash was created, checks out the branch, and applies the stash. The stash is guaranteed to apply cleanly, no matter how much the rest of your fast-movin' repo has changed. [[1.6.0](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.0.txt "Git 1.6.0 Release Notes")]
1. If you mistype a command, Git offers a helping hand: Clippy says, "It looks like you're trying to use SVN." [[1.6.1](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.1.txt "Git 1.6.1 Release Notes")]

        $ git stat
        git: 'stat' is not a git-command. See 'git --help'.

        Did you mean this?
        	status

1. Branch navigation adopts basic filesystem navigation idioms: Use `git checkout -` to return to the last branch you were on. [[1.6.2](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.2.txt "Git 1.6.2 Release Notes")]
1. A visualization of the ancestry tree is available without having to leave your terminal: `git log --graph` outputs hot ASCII graph pr0n in full technicolor. [[1.5.6](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.5.6.txt "Git 1.5.6 Release Notes")] [[1.6.3](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.3.txt "Git 1.6.3 Release Notes")]

    [![Full color visualization of the ancestry tree using 'get log --graph'](http://jasonrudolph.com/resources/20090527_git_log_graph_output_thumb.png)](http://jasonrudolph.com/resources/20090527_git_log_graph_output.png "Full color visualization of the ancestry tree using 'get log --graph'")

1. Getting a quick, lean log from the command line now requires less typing (and no forced compliments). `git log --oneline` replaces the need to use its older, more verbose cousin, `git log --pretty=oneline --abbrev-commit`. [[1.6.3](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.3.txt "Git 1.6.3 Release Notes")]
1. <del cite="http://jasonrudolph.com/blog/2009/05/27/git-up-10-reasons-to-upgrade-your-old-git-installation/#comment-11129831" datetime="2009-06-20T15:00:00EDT">Speaking of things that are easier to type, reaching all the way over to hold down that cockamamie Shift key is hard work. Give yourself a break: If you're on OS X, you no longer need to type "HEAD"; "head" works just the same. [[1.5.6](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.5.6.txt "Git 1.5.6 Release Notes")]</del> **UPDATE** - As much as I enjoy that vacation from the Shift key, [apparently it is unintended behavior and "may even be considered a bug."](http://jasonrudolph.com/blog/2009/05/27/git-up-10-reasons-to-upgrade-your-old-git-installation/#comment-11129831 "Git Up! 10 Reasons to Upgrade Your Old Git Installation - Comment from Junio Hamano (gitster)")  (Thanks to Junio Hamano for providing the inside scoop.) Allow me to present an alternate: Tidying up your list of remote branches is now possible with a single command: `git remote update --prune $remote` fetches updates for the named `$remote` repository (e.g., "origin") and prunes any stale tracking branches that you have lying around for that `$remote` repo. [[1.6.3](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.3.txt "Git 1.6.3 Release Notes")]
1. Searching for content no longer means scanning line after line to locate the matching text: `git grep` now highlights the matches in color. [[1.6.3](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.6.3.txt "Git 1.6.3 Release Notes")]

    [![Colorized output of 'git grep'](http://jasonrudolph.com/resources/20090527_git_grep_output_thumb.png)](http://jasonrudolph.com/resources/20090527_git_grep_output.png "Colorized output of 'git grep'")

1. The science of Branchology added a few handy new instruments: Use `git branch --no-merged` to list the branches that have not yet been merged into the current branch. Use `git branch --merged` to see just the opposite. [[1.5.6](http://www.kernel.org/pub/software/scm/git/docs/RelNotes-1.5.6.txt "Git 1.5.6 Release Notes")]

And this is by no means an exhaustive list.  An upgrade from v1.5.5 to v1.6.3 includes well over 100 improvements.  While no one of these improvements is revolutionary, they each make this awesome VCS just a tad nicer.  And collectively, they make it well worth the upgrade.

So what are you waiting for?  Invest five minutes right now to [upgrade](http://git-scm.com/download "Git - Fast Version Control System").  C'mon.  You're sittin' around reading blogs.  What *else* have you got to do?  Git up!

--

**Notes**

If you're on OS X, I recommend using MacPorts for quick and easy upgrades.  Let [Rob Sanheim show you the way](http://robsanheim.com/2009/01/14/upgrading-git-via-macports/ "Panasonic Youth &#8211; Upgrading git via MacPorts").

Image courtesy of [Midnight Digital (flickr.com/midnight-digital)](http://flickr.com/photos/midnight-digital "Flickr: midnight-digital's Photostream"). [[Creative Commons License](http://creativecommons.org/licenses/by-nc-sa/2.0/ "Creative Commons &mdash; Attribution-Noncommercial-Share Alike 2.0 Generic")]
