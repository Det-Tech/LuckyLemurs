import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import RawImage from "components/RawImage";
import NextImage from "components/NextImage";

export default function Rarity() {
  return (
    <Box className="bg-white flex">
      <Box className="content mx-auto" style={{ width: "1440px" }}>
        <Box className="flex items-center justify-center space-x-4  py-8 md:py-14">
          <Typography
            variant="h2"
            className="sub-title"
            style={{ fontWeight: 500, color: "#F16522" }}
          >
            Rarity
          </Typography>
          <Typography
            variant="h2"
            className="sub-title"
            style={{ fontWeight: 500, color: "black" }}
          >
            Backgrounds
          </Typography>
        </Box>
        <Grid container className="p-4" style={{ margin: 0 }}>
          <Grid item xs={3} md={3} className="p-4 md:p-10">
            <NextImage src="/img/rarity/elite.png" />
            <Box className="text-center">
              <Typography
                variant="h4"
                className="py-1 rarity-title"
                style={{ color: "#7F40CB" }}
              >
                Elite
              </Typography>
              <Typography
                variant="h6"
                className="py-0.5"
                style={{ color: "#575757" }}
              >
                Rank 1-7
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3} className="p-4 md:p-10">
            <NextImage src="/img/rarity/legendary.png" />
            <Box className="text-center">
              <Typography
                variant="h4"
                className="py-1 rarity-title"
                style={{ color: "#7F40CB" }}
              >
                Legendary
              </Typography>
              <Typography
                variant="h6"
                className="py-0.5"
                style={{ color: "#575757" }}
              >
                Rank 8-35
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3} className="p-4 md:p-10">
            <NextImage src="/img/rarity/mythical.png" />
            <Box className="text-center">
              <Typography
                variant="h4"
                className="py-1 rarity-title"
                style={{ color: "#7F40CB" }}
              >
                Mythical
              </Typography>
              <Typography
                variant="h6"
                className="py-0.5"
                style={{ color: "#575757" }}
              >
                Rank 36-77
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3} className="p-4 md:p-10">
            <NextImage src="/img/rarity/special.png" />
            <Box className="text-center">
              <Typography
                variant="h4"
                className="py-1 rarity-title"
                style={{ color: "#7F40CB" }}
              >
                Special
              </Typography>
              <Typography
                variant="h6"
                className="py-0.5"
                style={{ color: "#575757" }}
              >
                Rank 78-350
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3} className="p-4 md:p-10">
            <NextImage src="/img/rarity/lucky.png" />
            <Box className="text-center">
              <Typography
                variant="h4"
                className="py-1 rarity-title"
                style={{ color: "#7F40CB" }}
              >
                Lucky
              </Typography>
              <Typography
                variant="h6"
                className="py-0.5"
                style={{ color: "#575757" }}
              >
                Rank 351-777
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3} className="p-4 md:p-10">
            <NextImage src="/img/rarity/uncommon.png" />
            <Box className="text-center">
              <Typography
                variant="h4"
                className="py-1 rarity-title"
                style={{ color: "#7F40CB" }}
              >
                Uncommon
              </Typography>
              <Typography
                variant="h6"
                className="py-0.5"
                style={{ color: "#575757" }}
              >
                Rank 778-3000
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3} className="p-4 md:p-10">
            <NextImage src="/img/rarity/common.png" />
            <Box className="text-center">
              <Typography
                variant="h4"
                className="py-1 rarity-title"
                style={{ color: "#7F40CB" }}
              >
                Common
              </Typography>
              <Typography
                variant="h6"
                className="py-0.5"
                style={{ color: "#575757" }}
              >
                Rank 3001-5500
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3} className="p-4 md:p-10">
            <NextImage src="/img/rarity/average.png" />
            <Box className="text-center">
              <Typography
                variant="h4"
                className="py-1 rarity-title"
                style={{ color: "#7F40CB" }}
              >
                Average
              </Typography>
              <Typography
                variant="h6"
                className="py-0.5"
                style={{ color: "#575757" }}
              >
                Rank 5501-7777
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className="flex justify-center py-6 md:py-10">
          <Button color="primary" variant="contained">
            TRAITS
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
