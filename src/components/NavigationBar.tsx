import { AppBar, Box, IconButton, Typography } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import BoltIcon from "@mui/icons-material/Bolt";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const watchScheme = (evt: MediaQueryListEvent) => {
      document.documentElement.style.colorScheme = evt.matches
        ? "dark"
        : "light";
      setDark(evt.matches);
    };

    let match: MediaQueryList;

    if (typeof window !== "undefined") {
      match = window.matchMedia("(prefers-color-scheme: dark)");
      match?.addEventListener("change", watchScheme);
    }
    return () => match && match.removeEventListener("change", watchScheme);
  }, []);

  const handleToggle = () => {
    setDark(!dark);
    document.documentElement.style.colorScheme = dark ? "light" : "dark";
  };

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
          alignItems: "center",
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/blog">
            <Typography
              sx={{
                display: "flex",
                marginRight: 2,
              }}
            >
              <ArticleIcon sx={{ marginRight: 1 }} />
              Blog
            </Typography>
          </Link>
          <IconButton onClick={handleToggle} sx={{ color: "#f1c40f" }}>
            {dark ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
}
