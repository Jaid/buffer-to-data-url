/** @module buffer-to-data-url */

/**
 * @param {string} mimeType
 * @param {Buffer} buffer
 * @return {Promise<string>}
 */
export default (mimeType, buffer) => {
  return `data:${mimeType};base64,${buffer.toString("base64")}`
}