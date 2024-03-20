/**
 *
 *
 * @param {HTMLElement} element
 * @param {Blob} blob
 * @param {import('media-type')} mediaType
 * @param {Object} option
 * @return {boolean}
 * @public
 */
export const BindingApplication = async (element, blob, mediaType, option) => {
  // let text = await blob.text()
  switch (mediaType.subtype) {
    case 'json':
    default:
      throw new Error(`Unsupported media-type.subtype: ${mediaType.subtype}`)
  }
  // return true
}
