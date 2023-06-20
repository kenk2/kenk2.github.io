import { Box, Divider, Typography } from "@mui/material";
import { cwd } from "process";
import path from "path";
import fs from "fs/promises";
import { getAllBlogData } from "@kenk2/utils";
import { BlogEntryMetaData } from "@kenk2/types";
import { format } from "date-fns";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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

export async function getStaticProps(context: { params: { slug: string[] } }) {
  const postSlug = context.params.slug[0];
  const allBlogData = await getAllBlogData();

  const postData = allBlogData.find(
    (blogData) => blogData.data.slug === postSlug
  );

  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)),
    },
  };
}

type BlogSlugProps = {
  props: {
    postData: BlogEntryMetaData;
  };
};

export default function Slug(props: BlogSlugProps) {
  const {
    props: { postData },
  } = props;

  const date = format(new Date(postData.data.date), "MMMM do, yyyy");

  return (
    <Box>
      <Typography variant="h4">{postData.data.title}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </Box>
  );
}
