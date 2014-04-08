/*-
 * Echo Plugin for Android
 */

var exec = require("cordova/exec");

var Echo = {
    play: function(url) {
        exec(null, null, "Echo", "echo", [url]);
    }
};

module.exports = Echo;