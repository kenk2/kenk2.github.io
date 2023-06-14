import { Box, Typography } from "@mui/material";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Kenny Kim - Blog</title>
      </Head>
      <Box>
        <Typography variant="h4">Blog</Typography>
        <Typography paragraph sx={{ marginTop: 1 }}>
          I plan to make posts about my learning and projects. Come back for
          updates!
        </Typography>
      </Box>
    </>
  );
}
