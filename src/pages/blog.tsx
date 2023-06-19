import { Box, Divider, Typography } from "@mui/material";
import Head from "next/head";
import path from "path";
import fs from "fs/promises";
import { cwd } from "process";
import matter from "gray-matter";
import type { BlogEntryMetaData } from "@kenk2/types";
import { BlogEntry } from "@kenk2/components";

type BlogData = {
  props: {
    postData: BlogEntryMetaData[];
  };
};

export default function Blog(props: BlogData) {
  const {
    props: { postData },
  } = props;

  return (
    <>
      <Head>
        <title>Kenny Kim - Blog</title>
      </Head>
      <Box>
        <Typography variant="h4">Blog</Typography>
        <Typography paragraph sx={{ marginTop: 1 }}>
          I make posts about my learning and projects. Come back for updates!
        </Typography>
        <Divider />
        <Box sx={{ marginTop: 3 }}>
          {postData.map((entry) => (
            <BlogEntry metaData={entry} key={entry.data.date} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const dir = path.join(cwd(), "src", "posts");

  const files = (await fs.readdir(dir)).map((fileName) =>
    path.join(dir, fileName)
  );

  const postData = await Promise.all(
    files.map((file) => fs.readFile(file, "utf8").then((data) => matter(data)))
  );

  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)),
    },
  };
}
