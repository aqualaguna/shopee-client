export default class BaseError extends Error {
  constructor(public request_id: string, public code: string, public msg: string) {
      super(`${request_id}-${code}:  ${msg}`);
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, BaseError.prototype);
  }
}