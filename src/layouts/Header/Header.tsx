import React, { memo } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import RawImage from "components/RawImage";
import DiscordIcon from "components/Icons/DiscordIcon";
import TwitterIcon from "components/Icons/TwitterIcon";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";

const useStyles = makeStyles((theme) => ({
  socialIcon: {
    marginRight: theme.spacing(2),
    width: "3rem",
    height: "3rem",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box className="w-full p-1 bg-white">
      <Grid container className="h-full">
        <Grid item xs={5} md={5} className="flex items-center">
          <RawImage src="/img/logo.jpg" alt="Icon" className="pl-2 pt-2" />
        </Grid>
        <Grid
          item
          xs={2}
          md={2}
          className="flex"
        >
          <RawImage
            src="/img/icons/Base.png"
            alt="Logo"
            className="w-20 h-20 mx-auto mt-auto hidden md:block"
          />
        </Grid>
        <Grid item xs={5} md={5} className="flex justify-end items-center">
          <div>
            <TwitterIcon className={classes.socialIcon} />
            <DiscordIcon className={classes.socialIcon} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(Header);
