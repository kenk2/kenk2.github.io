import { Box } from "@mui/material";
import { cwd } from "process";
import path from "path";
import fs from "fs/promises";

export async function getStaticPaths() {
  const dir = path.join(cwd(), "src", "posts");

  const files = await fs.readdir(dir);

  return {
    paths: files.map((file) => ({
      params: {
        slug: file.replace(".md", "").split("/"),
      },
    })),
    fallback: false,
  };
}

export default function Slug() {
  return <Box>Hello World</Box>;
}

export function getStaticProps() {
  return {
    props: {},
  };
}
