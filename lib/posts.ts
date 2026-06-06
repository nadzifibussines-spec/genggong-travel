import fs from "fs"
import path from "path"

const blogDir = path.join(process.cwd(), "content/blog")

export function getPosts() {
  return fs.readdirSync(blogDir).map((file) => ({
    slug: file.replace(".mdx", ""),
  }))
}
