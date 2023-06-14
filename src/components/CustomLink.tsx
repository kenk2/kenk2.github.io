import { Link } from "@mui/material";

type HomePageLinkProps = {
  name: string;
  url: string;
};

export default function CustomLink(props: HomePageLinkProps) {
  const { name, url } = props;

  return (
    <Link
      target="_blank"
      rel="noopener"
      underline="none"
      href={url}
      sx={{ fontWeight: "bold" }}
    >
      {name}
    </Link>
  );
}
