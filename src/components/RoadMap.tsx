import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ChildBackgroundImage from "components/ChildBackgroundImage";
import RawImage from "components/RawImage";
import { spawn } from "child_process";
import Image from "next/image";
import NextImage from "./NextImage";

export default function RoadMap() {
  return (
    <Box className="py-14 bg-white">
      <Box className="flex items-center justify-center pb-8">
        <Typography
          variant="h2"
          className="sub-title"
          style={{ fontWeight: 500, color: "#575757" }}
        >
          Road
        </Typography>
        <Typography
          variant="h2"
          className="sub-title"
          style={{ fontWeight: 500, color: "#F16522" }}
        >
          map
        </Typography>
        <RawImage
          src="/img/17.jpg"
          className="mx-0.5 md:mx-2 mb-2 p-2 w-16 hidden md:block"
        />
      </Box>
      <Box
        className="py-3 md:py-6 px-8 my-6 mx-auto w-11/12 md:w-3/5 rounded-xl"
        style={{
          background: "#fafafa",
          boxShadow: "0px 4px 10px 1px rgba(87, 85, 85, 0.25)",
        }}
      >
        <Typography variant="h6" className="my-1" style={{ color: "#F16522" }}>
          Stage 1
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "black" }}>
          0%
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "#575757" }}>
          Early adopter rewards. Discounted presale for early members (.26 Sol)
          <br />
          Discord invite contest, free lemurs to top 10 most invites.
        </Typography>
      </Box>
      <Box
        className="py-3 md:py-6 px-8 my-6 mx-auto w-11/12 md:w-3/5 rounded-xl"
        style={{
          background: "#fafafa",
          boxShadow: "0px 4px 10px 1px rgba(87, 85, 85, 0.25)",
        }}
      >
        <Typography variant="h6" className="my-1" style={{ color: "#F16522" }}>
          Stage 2
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "black" }}>
          10%
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "#575757" }}>
          Lemur Lair, Private Discord Channel open for all Lemur holders.
        </Typography>
      </Box>
      <Box
        className="py-3 md:py-6 px-8 my-6 mx-auto w-11/12 md:w-3/5 rounded-xl"
        style={{
          background: "#fafafa",
          boxShadow: "0px 4px 10px 1px rgba(87, 85, 85, 0.25)",
        }}
      >
        <Typography variant="h6" className="my-1" style={{ color: "#F16522" }}>
          Stage 3
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "black" }}>
          50%
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "#575757" }}>
          7 Lemurs Airdropped to 7 lucky minters.
        </Typography>
      </Box>
      <Box
        className="py-3 md:py-6 px-8 my-6 mx-auto w-11/12 md:w-3/5 rounded-xl"
        style={{
          background: "#fafafa",
          boxShadow: "0px 4px 10px 1px rgba(87, 85, 85, 0.25)",
        }}
      >
        <Typography variant="h6" className="my-1" style={{ color: "#F16522" }}>
          Stage 4
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "black" }}>
          75%
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "#575757" }}>
          Private Merch store opened exclusively for owners. 100% of proceeds go
          to the charity voted on by lemur owners
        </Typography>
      </Box>
      <Box
        className="py-3 md:py-6 px-8 my-6 mx-auto w-11/12 md:w-3/5 rounded-xl"
        style={{
          background: "#fafafa",
          boxShadow: "0px 4px 10px 1px rgba(87, 85, 85, 0.25)",
        }}
      >
        <Typography variant="h6" className="my-1" style={{ color: "#F16522" }}>
          Stage 5
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "black" }}>
          100%
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "#575757" }}>
          77 Sol Donation to Madagascar / Lemur conservation charity
          voted on by Lemur owners.
        </Typography>
      </Box>
      <Box
        className="py-3 md:py-6 px-8 my-6 mx-auto w-11/12 md:w-3/5 rounded-xl"
        style={{
          background: "#fafafa",
          boxShadow: "0px 4px 10px 1px rgba(87, 85, 85, 0.25)",
        }}
      >
        <Typography variant="h6" className="my-1" style={{ color: "#F16522" }}>
          Stage 6
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "black" }}>
          Weekly
        </Typography>
        <Typography variant="h6" className="my-1" style={{ color: "#575757" }}>
          7 Lucky Lemurs will each win .5% of every weeks total secondary sales
          volume. There will be one winner for every rarity background with odds
          to win determined by the number of that background in circulation. The
          more rare the background the better the odds of winning.
        </Typography>
      </Box>
    </Box>
  );
}
