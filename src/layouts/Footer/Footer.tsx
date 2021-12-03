import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import DiscordIcon from "components/Icons/DiscordIcon";
import TwitterIcon from "components/Icons/TwitterIcon";
import NextImage from "../../components/NextImage";

const useStyles = makeStyles((theme) => ({
  socialIcon: {
    width: "3.5rem",
    height: "3.5rem",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className="w-full p-1 bg-white">
      <Grid container className="h-full">
        <Grid item xs={3} md={4} className="flex items-center">
          <TwitterIcon className={classes.socialIcon} />
        </Grid>
        <Grid item container xs={6} md={4} className="justify-center">
          <Grid item xs={3} md={3}>
            <NextImage src="/img/icons/Base.png" width={100} height={100} />
          </Grid>
          <Grid item xs={3} md={3}>
            <NextImage src="/img/icons/6.png" width={100} height={100} />
          </Grid>
          <Grid item xs={3} md={3}>
            <NextImage src="/img/icons/10.png" width={100} height={100} />
          </Grid>
          <Grid item xs={3} md={3}>
            <NextImage src="/img/icons/11.png" width={100} height={100} />
          </Grid>
        </Grid>
        <Grid item xs={3} md={4} className="flex justify-end items-center">
          <DiscordIcon className={classes.socialIcon} />
        </Grid>
      </Grid>
    </Box>
  );
}
