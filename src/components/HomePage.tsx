import { Box, Divider, Typography } from "@mui/material";
import CustomLink from "./CustomLink";
import HomeHeader from "./HomeHeader";

export default function HomePage() {
  return (
    <Box>
      <HomeHeader />
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
      <Typography paragraph>
        You can catch me on other platforms! I&apos;m on the following:
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
  );
}
