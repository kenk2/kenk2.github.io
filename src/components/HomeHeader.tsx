import { Grid, Avatar, Typography } from "@mui/material";

type HomeHeaderProps = {
  img: string;
};

export default function HomeHeader(props: HomeHeaderProps) {
  const { img } = props;
  return (
    <Grid
      container
      sx={{
        marginBottom: 3,
      }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Avatar alt="Me" src={img} sx={{ width: 150, height: 150 }} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          [theme.breakpoints.up("sm")]: {
            alignItems: "center",
            justifyContent: "left",
          },
        })}
      >
        <Typography
          variant="h4"
          paragraph
          sx={(theme) => ({
            marginBottom: 0,
            [theme.breakpoints.up("sm")]: {
              marginLeft: 2,
            },
          })}
        >
          👋 Hi, I&apos;m Kenny Kim!
        </Typography>
      </Grid>
    </Grid>
  );
}
