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
registrationIds.push('APA91bFPMm7-M_BHeC2fz3rfj0wv1CPc6285OWVdnPNKra9nM4mZecaRI563qOidkJ6YNEFaHK8zb0rwdRE6_bzeAZ_64Aom6K2ioWGy-gZEmQUrcHCWsOmxMJqUG6sOfdPI6sOgccHQFIEu5Xxs6ReDawEVrQsd-A');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});