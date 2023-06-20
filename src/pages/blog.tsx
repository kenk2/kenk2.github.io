import { Box, Divider, Typography } from "@mui/material";
import Head from "next/head";
import type { BlogEntryMetaData } from "@kenk2/types";
import { BlogEntry } from "@kenk2/components";
import { getAllBlogData } from "@kenk2/utils";

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
          I make posts about my learning and projects. Come back often for
          updates!
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
  const postData = await getAllBlogData();

  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)),
    },
  };
}
