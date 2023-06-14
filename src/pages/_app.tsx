import { NavigationBar } from "@kenk2/components";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";
import "@kenk2/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box sx={{ margin: 0 }}>
      <NavigationBar />
      <Box
        sx={{
          margin: "0 auto",
          padding: 2,
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <Component props={pageProps} />
      </Box>
    </Box>
  );
}
