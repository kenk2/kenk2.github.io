import Head from "next/head";
import { createClient } from "contentful";
import { CustomLink, HomeHeader } from "@kenk2/components";
import { Box, Typography, Divider } from "@mui/material";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Kenny Kim</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <HomeHeader img={"https:" + props.props.pictures.url} />
        <Typography paragraph>Thanks for visiting my website!</Typography>
        <Typography paragraph>
          I&apos;m Full-Stack Software Engineer with an eye for good UI and
          building better user experiences. Previously at:{" "}
          <CustomLink url="https://klaviyo.com" name="Klaviyo" />,{" "}
          <CustomLink url="https://airvet.com" name="Airvet" />,{" "}
          <CustomLink url="https://macu.com" name="MACU" />, and{" "}
          <CustomLink
            url="https://hexagon.com/company/divisions/manufacturing-intelligence/msc-software"
            name="MSC Software"
          />
          .
        </Typography>
        <Typography paragraph>
          Occasionally I&apos;ll post updates about my work and learning here.
          Come back often for updates!
        </Typography>
        <Typography paragraph>
          LetI&apos;s work together to build great apps and make the world a
          better place to be!
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Typography variant="h4">Links & Contact</Typography>
        <Typography paragraph sx={{ marginTop: 2 }}>
          Want to work with me?{" "}
          <CustomLink
            url="mailto:kenk2@thedev.mozmail.com"
            name="Shoot me an Email!"
          />
        </Typography>
        <Typography paragraph>
          You can also catch me on other platforms! I&apos;m on the following:
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CustomLink
            url="https://linkedin.com/in/kenk-9cfn483"
            name="Linkedin"
          />
          <CustomLink url="https://github.com/kenk2" name="Github" />
          <CustomLink url="https://leetcode.com/kenk2" name="Leetcode" />
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const result = await client.getEntries({ content_type: "image" });
  const pictures = result.items.map((x) => x?.fields?.picture?.fields?.file)[0];

  return {
    props: {
      pictures,
    },
  };
}
