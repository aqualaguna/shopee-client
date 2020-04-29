const crypto = require("crypto");


export default function hmac256(secret: String, message: String) {
    return crypto
      .createHmac("sha256", secret)
      .update(message)
      .digest("hex");
}