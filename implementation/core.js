const crypto = require("crypto");

exports.configuration = {
    get sessionSecret() {
        // TODO Provide a custom secret for express-session if required
        // In case sessions are preserved across restarts,
        // store and / or reuse this secret.
        // TODO (library) document / link how to retain sessions with express-session
        // It must be a string, hence the use of .toString('hex')
        return crypto.randomBytes(512).toString('hex')
    }
}

exports.userIdForName = function(userName) {
    // TODO implement
    if (userName === "example_user") {
        return 1
    }
}

exports.userForId = function(userId) {
    if (userId === 1) {
        return {

        }
    }
}
