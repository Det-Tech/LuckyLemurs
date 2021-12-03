import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import RawImage from "components/RawImage";
import NextImage from "./NextImage";

export default function Gallery() {
  return (
    <Box>
      <Box className="flex items-center justify-center py-8 md:py-14">
        <Typography
          variant="h2"
          className="sub-title"
          style={{ fontWeight: 500, color: "#575757" }}
        >
          Gallery
        </Typography>
        <RawImage src="/img/24.png" className="mx-0.5 md:mx-2 mb-2 p-2 w-16 hidden md:block" />
      </Box>
      <Grid container className="px-14">
        <Grid item xs={3} md={3} className="p-2 md:p-4">
          <NextImage src="/img/gallery/369.png" width={290} height={331} />
        </Grid>
        <Grid item xs={3} md={3} className="p-2 md:p-4">
          <NextImage src="/img/gallery/2805.png" width={290} height={331} />
        </Grid>
        <Grid item xs={3} md={3} className="p-2 md:p-4">
          <NextImage src="/img/gallery/7402.png" width={290} height={331} />
        </Grid>
        <Grid item xs={3} md={3} className="p-2 md:p-4">
          <NextImage src="/img/gallery/45.png" width={290} height={331} />
        </Grid>
        <Grid item xs={3} md={3} className="p-2 md:p-4">
          <NextImage src="/img/gallery/3876.png" width={290} height={331} />
        </Grid>
        <Grid item xs={3} md={3} className="p-2 md:p-4">
          <NextImage src="/img/gallery/2237.png" width={290} height={331} />
        </Grid>
        <Grid item xs={3} md={3} className="p-2 md:p-4">
          <NextImage src="/img/gallery/7328.png" width={290} height={331} />
        </Grid>
        <Grid item xs={3} md={3} className="p-2 md:p-4">
          <NextImage src="/img/gallery/1137.png" width={290} height={331} />
        </Grid>
      </Grid>
      <Box className="flex justify-center py-6 md:py-10">
        <Button color="primary" variant="contained">
          LOAD MORE
        </Button>
      </Box>
    </Box>
  );
}
