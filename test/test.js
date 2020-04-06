import path from "path"

import fss from "@absolunet/fss"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: bufferToDataUrl} = indexModule

it("should run", () => {
  const id = `${_PKG_NAME}-test`
  const folder = bufferToDataUrl("Jaid", id)
  expect(folder).toMatch(id)
  expect(fss.pathExists(folder)).toBeTruthy()
})