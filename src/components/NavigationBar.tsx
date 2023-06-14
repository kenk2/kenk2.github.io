import { AppBar, Box, Typography } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import BoltIcon from "@mui/icons-material/Bolt";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <AppBar
      position="static"
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[900],
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      })}
    >
      <Box
        sx={{
          maxWidth: "700px",
          padding: 2,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          color: "#f1c40f",
        }}
      >
        <Box>
          <Link href="/">
            <Typography sx={{ display: "flex" }}>
              <BoltIcon sx={{ marginRight: 1 }} />
              Kenny Kim
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Link href="/blog">
            <Typography sx={{ display: "flex", marginRight: 2 }}>
              <ArticleIcon sx={{ marginRight: 1 }} />
              Blog
            </Typography>
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
}
