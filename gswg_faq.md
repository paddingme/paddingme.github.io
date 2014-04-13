---
permalink: gswg_faq.html
layout: default
title: FAQ for "Getting Started with Grails" - Jason Rudolph Dot Com
---
# Getting Started with Grails - Frequently Asked Questions

## Second Edition (February 2010)

![Getting Started With Grails, Second Edition](/images/getting-started-with-grails-v2-header.jpg)

For the Second Edition of the book, if any frequently asked questions arise, we'll cover them on the [wiki](http://wiki.github.com/scottdavis99/gswg-v2/ "FAQ for Getting Started With Grails, Second Edition").

----

## First Edition (January 2007)

![Getting Started With Grails, First Edition](/images/getting-started-with-grails-header.png)

**1. Page 7 (Chapter 3 - Hello, Grails!) -- Using Grails 0.4.2, why don't I see the *Welcome to Grails* page when I execute `grails run-app` for the first time?**

Grails 0.4.2 shipped with a bug in the default `index.jsp` page.  To fix the problem, open `racetrack/web-app/index.jsp` and replace line 2...

    <%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>

...with the following line...				     

    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

**2. Page 9 (Chapter 3 - Hello, Grails!) -- Using Grails 0.5 (or higher), I don't see the `index.jsp` file that's supposed to reside in `racetrack/web-app/WEB-INF`.  Did you mean to say `index.gsp` instead?**

Nope.  It's not a typo, but Grails 0.5 kindly changed the default index page from a JSP (JavaServer Page) to a GSP (Groovy Server Page).  So, as of Grails 0.5, expect to see `index.gsp` sitting in your `WEB-INF` directory.


**3. Page 13 (Chapter 3 - Hello, Grails!) --  When I run the application using Grails 0.5.x, I see deprecation warnings related to the `optionals` attribute defined in `Registration.groovy`.  What gives?**

Soon, young Jedi - on page 25, to be exact - you'll learn the power of constraint.  More precisely, you'll learn about Grails constraints.  And as of Grails 0.5, the `nullable` constraint replaced the `optionals` attribute discussed on page 13.  (It turns out that this is a nice improvement, as there was significant confusion about the difference between the `nullable` constraint and the `optionals` attribute.)  To bring your code up to speed, simply declare the constraint as follows:

    static constraints = {
        postalAddress(nullable:true)
    }

**4. Page 25 (Chapter 3 - Hello, Grails!) --  Using Grails 0.5 (or higher), why doesn't Grails enforce the `maxLength` constraints I defined for various properties in the domain classes?**

On the way to Grails 1.0, the Grails team made a conscious effort to eliminate any redundancy that we found along the way.  One such example of that effort was the removal of the `maxLength` constraint (and `minLength` and `length` constraints) in favor of using the `maxSize` constraint (and `minSize` and `size` constraints) instead.  Since Groovy consistently uses "size" for arrays, strings, collections, etc., Grails hitches a ride on this train to keep consistency at (or near) its full potential.  Wherever you see the `maxLength` constraint, just replace it with `maxSize`, and you'll be good to go.

**5. Page 41 (Chapter 4 - Improving the User Experience) --  Why do I have to restart the server each time I add or change error messages for my constraints?**

Excellent point!  And luckily, you no longer have to do so.  As of Grails 0.5, the developer experience improved greatly, and in development mode, Grails automatically picks up almost any changes you make to your application *without* requiring you to restart the app.  Woo hoo!! 

**6. Page 103 (Chapter 8 - The Finish Line) --  Using Grails 0.4 (or higher), I can't seem to find the `log4j.production.properties` that's supposed to be in `racetrack/web-app/WEB-INF`.  Where did it go?**

As of Grails 0.4, all logging-related configuration files reside in a more intuitive location: the  `racetrack/grails-app/conf` directory.  

**7. Page 103 (Chapter 8 - The Finish Line) --  Using Grails 0.5 (or higher), why isn't Grails  writing any messages to the log files when someone tries to hack their way into the application?**

As of Grails 0.5, the logging conventions saw some handy improvements.  For example, if you so desired, you could now set up the logging preferences for all of your controllers with a single line in `log4j.*.properties`.

Because of those new conventions, you no longer want to use the following lines mentioned on page 102:

    log4j.logger.UserController=warn,access 
    log4j.additivity.UserController=false

Instead, you want to replace those lines with the following declarations:

    log4j.logger.grails.app.controller.UserController=warn,access 
    log4j.additivity.grails.app.controller.UserController=false

And with that, you're ready to start tracking all those wily characters trying to sneak into your app.

**8. Page 104 (Chapter 8 - The Finish Line) --  Using Grails 0.5 (or higher), why does Grails name my WAR `racetrack-0.1.war` instead of `racetrack.war`?**

Grails 0.5 introduced a means for capturing and tracking various meta-data about your application.  You can find the default meta-data in `racetrack/application.properties`.  Inside, you'll see a property named `app.version`, and you'll notice that its value is `0.1`.  When we execute `grails war`, Grails now includes this version number in the name of the WAR file.  Pretty handy; wouldn't you say?

Of course, since the WAR file is named `racetrack-0.1.war` and we're deploying to JBoss, you won't access the application at `http://someproductionserver:8080/racetrack/`.  Instead, by default, you'll access it at `http://someproductionserver:8080/racetrack-0.1/`.
