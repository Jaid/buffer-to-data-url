import fsp from "@absolunet/fsp"
import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: bufferToDataUrl} = indexModule

it("should run", async () => {
  const file = path.join(__dirname, "pikachu_8x8.png")
  const mimeType = "image/png"
  const imageBuffer = await fsp.readFile(file)
  const dataUrl = bufferToDataUrl(mimeType, imageBuffer)
  expect(dataUrl).toBe("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARklEQVQoU2P8/Z/hPwMewEiUAhaG/wyMjIwMv6FmIfPBJrAyQuyAKUDmo1iBrhCkifG/oBrY4D/vbqE4lUVIDcwnrICQLwAWoihJ/lJMVwAAAABJRU5ErkJgggAA")
})