import filenamify from "filenamify"

export default name => {
  return filenamify(name, {
    replacement: "",
  })
}