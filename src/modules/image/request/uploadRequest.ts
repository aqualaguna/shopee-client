export default interface UploadRequest {
  /**
   * Image url. max 2.0 MB each.Image format accepted: JPG, JPEG, PNG.Suggested dimension: 1024 x 1024 px. Max number of image is 9.
   * @sample ["http://xxx.jpg"]
   */
  images: String[],

}