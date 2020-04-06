import bufferToDataUrl from "buffer-to-data-url"

const imageBuffer = fs.readFileSync("pikachu_8x8.png")
const dataUrl = bufferToDataUrl("image/png", imageBuffer)