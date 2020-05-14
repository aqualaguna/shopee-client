const crypto = require("crypto");


export default function hmac256(secret: string, message: string) {
    return crypto
      .createHmac("sha256", secret)
      .update(message)
      .digest("hex");
}