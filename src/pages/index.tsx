import Head from "next/head";
import { Box, Typography, Divider } from "@mui/material";
import { AssetFile, createClient } from "contentful";
import { CustomLink, HomeHeader } from "@kenk2/components";
import { companies, socials } from "@kenk2/constants";
import React from "react";

type HomeProps = {
  props: {
    items: AssetFile[];
  };
};

export default function Home(props: HomeProps) {
  const {
    props: { items },
  } = props;
  return (
    <>
      <Head>
        <title>Kenny Kim</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <HomeHeader
          img={`https:${items.find((x) => x.fileName === "me.jpg")?.url}`}
        />
        <Typography paragraph>Thanks for visiting my website!</Typography>
        <Typography paragraph>
          I&apos;m a Full-Stack Software Engineer with an eye for good UI and
          building better user experiences. Previously at:{" "}
          {companies.map((company, i) => (
            <React.Fragment key={company.url}>
              {i > 0 && ", "}
              {i === companies.length - 1 && "and "}
              <CustomLink url={company.url} name={company.name} />
            </React.Fragment>
          ))}
          .
        </Typography>
        <Typography paragraph>
          Occasionally I&apos;ll post updates about my work and learning here.
          Come back often for updates!
        </Typography>
        <Typography paragraph>
          Let&apos;s work together to build great apps and make the world a
          better place to be!
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Typography variant="h5">Links & Contact</Typography>
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
        {socials.map((social) => (
          <Typography key={social.url}>
            <CustomLink url={social.url} name={social.name} />
          </Typography>
        ))}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const result = (await client.getAssets("images")).items.map(
    (x) => x.fields.file
  );

  return {
    props: {
      items: result,
    },
  };
}
