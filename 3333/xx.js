
// Usage:

// -------------------------------------------------
// Count down to a date
// -------------------------------------------------
var test1 = new Countdown({
                              year	: 2013, 
                              month	: 1, 
                              day	: 1, 
                              hour	: 0,
                              ampm	: "am",
                              minute	: 0, 
                              second	: 0	// < - no comma on last item!!
                         });
// -------------------------------------------------
// Count down number of seconds
// -------------------------------------------------
var test2 = new Countdown( { style: "flip", time: 3600 } );
// -------------------------------------------------
// Advanced Options
// -------------------------------------------------
function countdownComplete(){
  	alert("yo");
}
var myCD2 = new Countdown({
                         // Using "number of seconds"
                         time  	: 15, // Total number of seconds to count down.
                         //
                         // --- OR ---
                         //
                         // Using a "dead line" date (NOTE: If "time" set this deadline date will NOT be used ("time" over-rides date))
                         year  	: 2013,  // (optional) The target date's year
                         month 	: 1,     // (optional) The target date's month
                         day   	: 1,     // (optional) The target date's day
                         hour  	: 0,     // (optional) The target date's hour 
                         ampm  	: "am",	 // (optional) Is the hour refering to AM (early/day) or PM (late/night)?
                         minute	: 0,          // (optional) The target date's minutes
                         second	: 0,          // (optional) The target date's seconds
                         offset	: 0,          // (optional) Number of hours to offset. Can be positive or negative.	
                         
                         // ---------------------------------
                         // Optional settings
                         // ---------------------------------	
                         hideLabels	: false,  // Set to true to hide the text labels
                         hideLine	: false,    // When true, hides the black line in the middle of the numbers. (Doesn't affect the "flip" stlye)	
                         width	  	: 200,      // Defaults to 200 x 30 pixels, you can specify a custom size here
                         height	 	: 30,       //
                         inline	 	: true,     // If inline, text will wrap around object, otherwise this countdown object will consume the entire "line"
                         target	 	: "foo",	 	 // A reference to an html DIV id (e.g. DIV id="foo")
                         style   	: "boring", // flip boring whatever (only "flip" uses image/animation)
                         rangeHi  : "year",	 	// The highest unit of time to display. Values can be: ms, second, minute, hour, day, month, year
                         rangeLo  : "second",	// The lowest unit of time to display. Values same as above. 
                         padding  : 0.4,             // Padding between the digits and the background box. Value reflects a percentage of overall height.
                         onComplete	: countdownComplete, // Specify a function to call when done. The function is pinged with 1 argument,
                                                                                                                          which is a generic object containing the deadline {year, month, day, hour, minute, second, ms}e. 
                         numberMarginTop : 5.5, // The space on top of the numbers. Used for padding
                         interval : 82,     	 	// Number of milliseconds between display updates. 1000 = 1 second
                         truncate : true,      // Prevents culmination of hidden values into rangeHi. (So you can just chop off at rangeHi) 
                         
                         labelText	: {
                                       ms    	: "MS",
                                       second : "SECONDS",
                                       minute : "MINUTES",
                                       hour  	: "HOURS",
                                       day   	: "DAYS",
                                       month  : "MONTHS",
                                       year  	: "YEARS"	// <- no comma on last item!
                                    },	

                         numbers	: {
                             font : "Arial",
                             color	: "#FFFFFF",
                             bkgd	: "#365D8B",
                             rounded	: 0.15,	// percentage of size 
                             shadow	: {
                                           x : 0,	// x offset (in pixels)
                                           y : 3,	// y offset (in pixels)
                                           s : 4,	// spread
                                           c : "#000000",	// color
                                           a : 0.4	// alpha
                                     }
                             },
                         labels	:	{
                             font  	: "Arial",
                             color 	: "#000000",
                             offset : 0, // Number of pixels to push the labels down away from numbers. 
                             textScale 	: 0.7, // Percentage of size
                             weight	: "normal"	// < - no comma on last item!
                         }	// < - no comma on last item!
                    });
