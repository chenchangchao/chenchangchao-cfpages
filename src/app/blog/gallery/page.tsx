import fs from "fs"
import path from "path"
import { Camera, Calendar, Compass, Film, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type MediaType = "image" | "video"

type GalleryMedia = {
  id: string
  src: string
  title: string
  type: MediaType
  date?: string
}

type GalleryAlbum = {
  id: string
  title: string
  description: string
  location: string
  date?: string
  items: GalleryMedia[]
}

const imagesDir = path.join(process.cwd(), "public/static/images")
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"])
const videoExtensions = new Set([".mp4", ".webm", ".mov", ".m4v"])

const albumCopy: Record<string, { title: string; description: string; location: string }> = {
  "nanjing-damodong 2": {
    title: "南京达摩洞",
    description: "一苇渡江的传说、山路与江风，留下一段安静的出走。",
    location: "江苏 · 南京 · 达摩洞",
  },
  "nanjing-yanziji 2": {
    title: "南京燕子矶",
    description: "沿江而行，水面、岩壁和城市边缘共同铺开一段开阔的午后。",
    location: "江苏 · 南京 · 燕子矶",
  },
  "qiandeng 2": {
    title: "千灯古镇",
    description: "桥、河道、石板路和古镇日光，适合慢慢走，也适合慢慢看。",
    location: "江苏 · 苏州 · 千灯古镇",
  },
}

function isMediaFile(filePath: string) {
  const extension = path.extname(filePath).toLowerCase()
  return imageExtensions.has(extension) || videoExtensions.has(extension)
}

function getMediaType(filePath: string): MediaType {
  return videoExtensions.has(path.extname(filePath).toLowerCase()) ? "video" : "image"
}

function formatTitle(value: string) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function formatAlbumTitle(folderName: string) {
  return formatTitle(folderName.replace(/\s+\d+$/, ""))
}

function extractDate(value: string) {
  const match = value.match(/(?:IMG_|VID_)?(20\d{2})(\d{2})(\d{2})/)
  return match ? `${match[1]}-${match[2]}-${match[3]}` : undefined
}

function toPublicSrc(relativePath: string) {
  return `/static/images/${relativePath.split(path.sep).map(encodeURIComponent).join("/")}`
}

function collectMediaFiles(directory: string, baseDirectory = imagesDir): GalleryMedia[] {
  if (!fs.existsSync(directory)) return []

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name)

      if (entry.name.startsWith(".")) return []
      if (entry.isDirectory()) return collectMediaFiles(entryPath, baseDirectory)
      if (!entry.isFile() || !isMediaFile(entryPath)) return []

      const relativePath = path.relative(baseDirectory, entryPath)
      const id = relativePath.replaceAll(path.sep, "-")

      return [
        {
          id,
          src: toPublicSrc(relativePath),
          title: formatTitle(entry.name),
          type: getMediaType(entryPath),
          date: extractDate(entry.name),
        },
      ]
    })
    .sort((a, b) => (a.src > b.src ? 1 : -1))
}

function getGalleryAlbums(): GalleryAlbum[] {
  if (!fs.existsSync(imagesDir)) return []

  const entries = fs.readdirSync(imagesDir, { withFileTypes: true })
  const folderAlbums = entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => {
      const albumPath = path.join(imagesDir, entry.name)
      const items = collectMediaFiles(albumPath)
      const latestDate = items
        .map((item) => item.date)
        .filter(Boolean)
        .sort()
        .at(-1)
      const copy = albumCopy[entry.name]

      return {
        id: entry.name,
        title: copy?.title || formatAlbumTitle(entry.name),
        description: copy?.description || "把路上的片刻收进这里。",
        location: copy?.location || "时间画廊",
        date: latestDate,
        items,
      }
    })
    .filter((album) => album.items.length > 0)

  return folderAlbums.sort((a, b) => {
    if (!a.date && !b.date) return a.title.localeCompare(b.title)
    if (!a.date) return 1
    if (!b.date) return -1
    return b.date.localeCompare(a.date)
  })
}

export default function GalleryPage() {
  const albums = getGalleryAlbums()

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 border-b border-border/40 pb-6">
        <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
          <Compass className="h-8 w-8 text-primary" />
          时间画廊
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          光落在路上，也落在那些被我按下快门的瞬间。
        </p>
      </div>

      {albums.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">
          暂无影像记录。
        </p>
      ) : (
        <div className="space-y-14">
          {albums.map((album) => (
            <section key={album.id} className="space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Camera className="h-3.5 w-3.5" />
                      {album.items.length} 个瞬间
                    </Badge>
                    {album.date && (
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {album.date}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">{album.title}</h2>
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                    {album.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary/70" />
                  {album.location}
                </div>
              </div>

              <Carousel>
                <Card className="overflow-hidden rounded-lg border-border/60 bg-card/40 p-0">
                  <CarouselContent>
                    {album.items.map((item, index) => (
                      <CarouselItem key={item.id}>
                        <figure className="relative">
                          <div className="flex h-[min(72vh,760px)] min-h-[360px] items-center justify-center bg-muted/50 sm:min-h-[520px]">
                            {item.type === "video" ? (
                              <video
                                src={item.src}
                                controls
                                playsInline
                                preload="metadata"
                                className="h-full w-full object-contain"
                              />
                            ) : (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={item.src}
                                alt={`${album.title} 第 ${index + 1} 张`}
                                loading={index === 0 ? "eager" : "lazy"}
                                className="h-full w-full object-contain"
                              />
                            )}
                          </div>
                          <figcaption className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
                            {item.type === "video" && <Film className="h-3.5 w-3.5" />}
                            {index + 1} / {album.items.length}
                          </figcaption>
                        </figure>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {album.items.length > 1 && (
                    <>
                      <CarouselPrevious />
                      <CarouselNext />
                    </>
                  )}
                </Card>
              </Carousel>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
