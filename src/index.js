/** @module buffer-to-data-url */

import path from "path"

import fss from "@absolunet/fss"
import appdataPath from "appdata-path"
import {tail} from "lodash"

import filenamify from "./filenamify"

/**
 * Returns a directory based on specified app name and ensures its existence
 * @example
 * import bufferToDataUrl from "buffer-to-data-url"
 * const folder = bufferToDataUrl("My Company", "My App")
 * @param {...string} name Name of the name folder where multiple strings can be given for nested folders
 * @returns {string} Full path of app folder
 */

export default (...name) => {
  let folder
  if (name.length > 1) {
    folder = path.join(appdataPath(name[0] |> filenamify), ...tail(name).map(filenamify))
  } else {
    folder = appdataPath(name[0] |> filenamify)
  }
  fss.ensureDir(folder)
  return folder
}