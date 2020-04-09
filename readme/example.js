import bufferToDataUrl from "buffer-to-data-url"

const imageBuffer = fs.readFileSync("pikachu_8x8.png")
const result = bufferToDataUrl("image/png", imageBuffer)