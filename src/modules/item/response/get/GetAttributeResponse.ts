
export enum AttributeType {
  INT_TYPE= 'INT_TYPE',
  STRING_TYPE= 'STRING_TYPE',
  ENUM_TYPE= 'ENUM_TYPE',
  FLOAT_TYPE= 'FLOAT_TYPE',
  DATE_TYPE= 'DATE_TYPE',
  TIMESTAMP_TYPE= 'TIMESTAMP_TYPE',
}
export enum AttributeInputType {
  DROP_DOWN = 'DROP_DOWN',
  TEXT_FILED = 'TEXT_FILED',
  COMBO_BOX = 'COMBO_BOX',
}

export interface AttributeItem {
  /**
   * The Identify of each category
   */
  attribute_id: Number,
  /**
   * The name of each attribute
   */
  attribute_name: String,
  /**
   * This is to indicate whether this attribute is mandantory
   * sample: STRING_TYPE
   */
  is_mandatory: Boolean,
  /**
   * Enumerated type that defines the type of the attribute. Applicable values: See Data Definition- AttributeType.
   */
  attribute_type: AttributeType,
  /**
   * Enumerated type that defines the input type of the attribute. Applicable values: See Data Definition- AttributeInputType.
   * sample: COMBO_BOX
   */
  input_type: AttributeInputType,
  /**
   * All options that attribute contains
   * "SPF 10", "SPF 15", "SPF 30", "SPF 50", "SPF 75", "SPF 80"
   */
  options: string[],
  values: Value[],


}
export interface Value {
  /**
   * Value in original language. It's MANDATORY to use attributes in original_value to add items.
   */
  original_value: String,
  /**
   * Value in translated language. As referrence only, CANNOT be used to add item. If the selected language is not supported in certain shop location, this field will be empty.
   */
  translate_value: String

}

export default interface GetAttributeResponse {
  attributes: AttributeItem[],
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
}