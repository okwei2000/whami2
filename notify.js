var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyD38JpZFG88WCGKHuFw1kgtgO5c-y6quUw');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bHFxqURp5jTZiaqi5lFQaZffewyIfIP0IoY2olA7HAff0kgXxeiGk_VWWisf5vY28pUYn7o4yOSh_zgY0cRUTLes9vJsnLLfJXY6FBuX79Kpw7SBk--sVqxyZH4ngzvlH5-qsqZ0_23MtoT0129RXA0kPqM0A');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});