import { cwd } from "process";
import fs from "fs/promises";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";

async function getAllBlogData(): Promise<GrayMatterFile<string>[]> {
  const dir = path.join(cwd(), "src", "posts");

  const files = (await fs.readdir(dir)).map((fileName) =>
    path.join(dir, fileName)
  );

  const postData = await Promise.all(
    files.map((file) => fs.readFile(file, "utf8").then((data) => matter(data)))
  );

  return postData;
}

export { getAllBlogData };
