export default interface PaginationRequest {
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0. if data is more than one page, the offset can be some entry to start next call.
   */
  pagination_offset: number,
  /**
   * If many items are available to retrieve, you may need to call GetItemsList multiple times to retrieve all the data. Each result set is returned as a page of entries. Use the Pagination filters to control the maximum number of entries (<= 100) to retrieve per page (i.e., per call), the offset number to start next call. This integer value is usUed to specify the maximum number of entries to return in a single ""page"" of data.
   */
  pagination_entries_per_page: number
}