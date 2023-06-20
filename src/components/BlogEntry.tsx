import { BlogEntryMetaData } from "@kenk2/types";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import CustomLink from "./CustomLink";
import Link from "next/link";

type BlogEntryProps = {
  metaData: BlogEntryMetaData;
};

export default function BlogEntry(props: BlogEntryProps) {
  const { metaData } = props;
  const date = format(new Date(metaData.data.date), "MMMM do, yyyy");
  const url = `/blog/${metaData.data.slug}`;

  return (
    <>
      <Grid container sx={{ display: "flex", alignItems: "baseline" }}>
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1">{date}</Typography>
        </Grid>
        <Grid item sm={9}>
          <Typography variant="h6">
            <Link href={url}>{metaData.data.title}</Link>
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Typography variant="subtitle2" sx={{marginRight: 1 }}>Tags:</Typography>
            {metaData.data.tags.map((tag) => (
              <Typography variant="button" key={tag} sx={{ marginRight: 1 }}>
                <CustomLink url={`/tags/${tag}`} name={tag} />
              </Typography>
            ))}
          </Box>
          <Typography paragraph sx={{ marginTop: 3 }}>
            {metaData.data.summary}
          </Typography>

          <Typography sx={{ marginTop: 3 }}>
            <CustomLink url={url} name="Read more..." />
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 3 }} />
    </>
  );
}
