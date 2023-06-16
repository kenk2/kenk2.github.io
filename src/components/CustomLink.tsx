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
      href={url}
      underline="none"
      sx={(theme) => ({
        fontWeight: "bold",
        color: theme.palette.info.light,
      })}
    >
      {name}
    </Link>
  );
}
