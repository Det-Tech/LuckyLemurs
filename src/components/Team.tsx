import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import RawImage from "components/RawImage";
import NextImage from "components/NextImage";

export default function Team() {
  return (
    <Box className="px-4">
      <Box className="flex items-center justify-center py-8 md:py-14">
        <Typography
          variant="h2"
          className="sub-title"
          style={{ fontWeight: 500, color: "#575757" }}
        >
          Team
        </Typography>
        <RawImage
          src="/img/icons/6.png"
          className="mx-0.5 md:mx-2 mb-2 p-2 w-16 hidden md:block"
        />
      </Box>
      <Grid container className="p-4" style={{ margin: 0 }}>
        <Grid item xs={4} md={4} className="p-4 md:p-10">
          <NextImage src="/img/team/6972.png" width={375} height={427} />
          <Box className="text-center">
            <Typography
              variant="h4"
              className="py-1"
              style={{ color: "#7F40CB" }}
            >
              Jake
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} md={4} className="p-4 md:p-10">
          <NextImage src="/img/team/7380.png" width={375} height={427} />
          <Box className="text-center">
            <Typography
              variant="h4"
              className="py-1"
              style={{ color: "black" }}
            >
              Chris
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} md={4} className="p-4 md:p-10">
          <NextImage src="/img/team/361.png" width={375} height={427} />
          <Box className="text-center">
            <Typography
              variant="h4"
              className="py-1"
              style={{ color: "#7F40CB" }}
            >
              Vincent
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container className="p-4 justify-center" style={{ margin: 0 }}>
        <Grid item xs={4} md={4} className="p-4 md:p-10">
          <NextImage src="/img/team/7704.png" width={375} height={427} />
          <Box className="text-center">
            <Typography
              variant="h4"
              className="py-1"
              style={{ color: "black" }}
            >
              Vlad
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} md={4} className="p-4 md:p-10">
          <NextImage src="/img/team/6520.png" width={375} height={427} />
          <Box className="text-center">
            <Typography
              variant="h4"
              className="py-1"
              style={{ color: "#7F40CB" }}
            >
              Don
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
