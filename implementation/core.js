const crypto = require("crypto");

exports.configuration = {
    get sessionSecret() {
        // TODO provide custom secret for express-session if required
        return crypto.randomBytes(512)
    }
}

exports.userIdForName = function(userName) {
    // TODO provide use ID for name
    return undefined
}
