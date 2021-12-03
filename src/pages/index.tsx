import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Toaster } from "react-hot-toast";
import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "hooks/use-candy-machine";
import Countdown from "react-countdown";
import Layout from "layouts";
import BackgroundImage from "components/BackgroundImage";
import RawImage from "components/RawImage";
import RoadMap from "components/RoadMap";
import Gallery from "components/Gallery";
import Rarity from "components/Rarity";
import Team from "components/Team";
import NextImage from "../components/NextImage";
import { GetServerSideProps } from "next";
import clientPromise from "libs/mongodb";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";

const Home = () => {
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const wallet = useWallet();
  const [mintCount, setMintCount] = useState(1);

  const isPreSale = false;
  const MAX_MINT_PER_TRANSACTION = 10;
  const MINT_PRICE_SOL = 0.33;
  const PRESALE_PRICE_SOL = 0.26;
  const [mintPrice, setMintPrice] = useState(PRESALE_PRICE_SOL);

  const {
    isSoldOut,
    mintStartDate,
    isMinting,
    startMint,
    startMintMultiple,
    nftsData,
  } = useCandyMachine();

  const BorderLinearProgress = withStyles(() => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#10B981",
    },
  }))(LinearProgress);

  const handleInputCount = (count: number) => {
    if (count > MAX_MINT_PER_TRANSACTION) count = MAX_MINT_PER_TRANSACTION;
    if (count < 1) count = 1;
    setMintCount(count);
  };

  useEffect(() => {
    if (isPreSale) setMintPrice(PRESALE_PRICE_SOL);
    else setMintPrice(MINT_PRICE_SOL);
  }, [isPreSale]);

  return (
    <Layout fullWidth>
      <Toaster />
      <BackgroundImage src="/img/background.jpg">
        <Box>
          <Typography
            variant="h1"
            className="text-white"
            style={{ cursor: "pointer", fontWeight: 600 }}
          >
            LUCKY LEMURS
          </Typography>
        </Box>
        <Box>
          {!isActive && (
            <Typography variant="h3" className="pb-2">
              <Countdown
                date={mintStartDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            </Typography>
          )}
          <WalletMultiButton />
        </Box>
        {wallet.connected && (
          <Box className="block flex w-full pt-4">
            <Box className="flex bg-white m-auto bg-opacity-60 rounded-3xl w-full">
              <Grid
                container
                spacing={3}
                className="p-5 md:p-10 justify-center items-center"
              >
                <Grid item xs={6} md={6}>
                  <NextImage
                    src="/img/main.gif"
                    alt="icon"
                    className="p-2 mx-auto rounded-xl"
                  />
                </Grid>
                <Grid item xs={6} md={6} style={{ margin: "auto" }}>
                  <Box className="flex my-3">
                    <Typography variant="h5" className="text-black">
                      TOTAL:
                    </Typography>
                    <Typography variant="h5" className="text-black">
                      &nbsp; {nftsData.itemsAvailable}
                    </Typography>
                  </Box>
                  <Box className="flex my-3">
                    <Typography variant="h5" className="text-black">
                      MINTED:
                    </Typography>
                    <Typography variant="h5" className="text-black">
                      &nbsp; {nftsData.itemsRedeemed}
                    </Typography>
                  </Box>
                  <BorderLinearProgress
                    className="my-3"
                    variant="determinate"
                    value={
                      (nftsData.itemsRedeemed / nftsData.itemsAvailable) * 100
                    }
                  />
                  <Box className="flex my-3">
                    <Typography variant="h5" className="text-black">
                      PRICE:
                    </Typography>
                    <Typography variant="h5" className="text-black">
                      &nbsp; {mintPrice} SOL
                    </Typography>
                  </Box>
                  <Box className="flex my-3">
                    <Typography
                      variant="h5"
                      className="text-black flex items-center"
                    >
                      AMOUNT:
                    </Typography>
                    <input
                      disabled={isMinting}
                      type="number"
                      min="1"
                      max={MAX_MINT_PER_TRANSACTION}
                      className="text-2xl w-1/4 inline bg-grey-lighter py-2 px-2 mx-2 rounded text-black font-bold text-center"
                      value={mintCount}
                      onChange={(e) =>
                        handleInputCount(parseInt(e.target.value))
                      }
                    />
                  </Box>
                  <Button
                    color="primary"
                    variant="contained"
                    className="w-auto md:w-36 h-14"
                    disabled={isSoldOut || isMinting || !isActive}
                    onClick={() =>
                      mintCount == 1
                        ? startMint()
                        : startMintMultiple(mintCount, mintPrice)
                    }
                  >
                    {isSoldOut ? (
                      "SOLD OUT"
                    ) : isMinting ? (
                      <CircularProgress thickness={8} />
                    ) : (
                      <span>
                        {isPreSale ? "PRESALE" : "MINT"}
                        {` ${mintCount}`}
                      </span>
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </BackgroundImage>
      <Box className="bg-white flex">
        <Box className="content mx-auto" style={{ width: "1440px" }}>
          <Grid
            container
            className="sub-content p-4 md:p-10"
            style={{ paddingLeft: 0 }}
          >
            <Grid item xs={2} md={1} className="flex items-center p-2">
              <RawImage src="/img/effect1.png" />
            </Grid>
            <Grid
              item
              xs={10}
              md={6}
              className="p-2"
              style={{ paddingRight: "2rem", margin: "auto" }}
            >
              <Box className="flex items-center">
                <Typography
                  variant="h2"
                  className="sub-title px-1"
                  style={{ fontWeight: 500, color: "#575757" }}
                >
                  Lucky
                </Typography>
                <Typography
                  variant="h2"
                  className="sub-title px-1"
                  style={{ fontWeight: 500, color: "#F16522" }}
                >
                  Lemurs
                </Typography>
                <RawImage
                  src="/img/icons/Base.png"
                  className="mx-0.5 md:mx-2 mb-2 p-2 w-20 hidden md:block"
                />
              </Box>
              <Typography
                variant="h6"
                className="pt-3 md:pt-5"
                style={{
                  color: "#575757",
                  letterSpacing: "0.04rem",
                  lineHeight: "165%",
                  fontWeight: 400,
                }}
              >
                Lucky Lemurs are a collection of 7777 algorithmically generated
                Ring-tailed Lemurs who have migrated from the jungles of
                Madagascar to find solace on the Solana Blockchain. With over
                220 possible traits, each Lemur is unique and grants access to
                the Lemur Lair, an exclusive community of like-minded Lemur
                owners. With 103 of 107 surviving lemur species classified as
                endangered, part of Lucky Lemur&apos;s mission is to provide
                funding and support for the protection of lemurs and their
                habitats.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} className="p-2">
              <Grid container spacing={2} className="p-4">
                <Grid item xs={6}>
                  <NextImage
                    src="/img/lucky/0.png"
                    width={300}
                    height={275}
                    className="border border-solid border-black box-border rounded-xl drop-shadow-md"
                  />
                </Grid>
                <Grid item xs={6}>
                  <NextImage
                    src="/img/lucky/7765.png"
                    width={300}
                    height={275}
                    className="border border-solid border-black box-border rounded-xl drop-shadow-md"
                  />
                </Grid>
                <Grid item xs={6}>
                  <NextImage
                    src="/img/lucky/7734.png"
                    width={300}
                    height={275}
                    className="border border-solid border-black box-border rounded-xl drop-shadow-md"
                  />
                </Grid>
                <Grid item xs={6}>
                  <NextImage
                    src="/img/lucky/7739.png"
                    width={300}
                    height={275}
                    className="border border-solid border-black box-border rounded-xl drop-shadow-md"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="content mx-auto" style={{ width: "1440px" }}>
        <Grid
          container
          className="sub-content p-4 md:p-10"
          style={{ paddingRight: 0 }}
        >
          <Grid item xs={12} md={5} className="p-2">
            <Grid container spacing={2} className="p-4">
              <Grid item xs={6}>
                <NextImage
                  src="/img/mint/7710.png"
                  width={300}
                  height={275}
                  className="border border-solid border-black box-border rounded-xl drop-shadow-md"
                />
              </Grid>
              <Grid item xs={6}>
                <NextImage
                  src="/img/mint/7714.png"
                  width={300}
                  height={275}
                  className="border border-solid border-black box-border rounded-xl drop-shadow-md"
                />
              </Grid>
              <Grid item xs={6}>
                <NextImage
                  src="/img/mint/7727.png"
                  width={300}
                  height={275}
                  className="border border-solid border-black box-border rounded-xl drop-shadow-md"
                />
              </Grid>
              <Grid item xs={6}>
                <NextImage
                  src="/img/mint/7724.png"
                  width={300}
                  height={275}
                  className="border border-solid border-black box-border rounded-xl drop-shadow-md"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={10}
            md={6}
            className="p-2"
            style={{ paddingLeft: "2rem", margin: "auto" }}
          >
            <Box className="flex items-center">
              <Typography
                variant="h2"
                className="sub-title px-1"
                style={{ fontWeight: 500, color: "black" }}
              >
                Mint
              </Typography>
              <RawImage
                src="/img/16.png"
                className="mx-0.5 md:mx-2 mb-2 p-2 w-16 hidden md:block"
              />
            </Box>
            <Typography
              variant="h6"
              className="pt-3 md:pt-5"
              style={{
                color: "#575757",
                letterSpacing: "0.04rem",
                lineHeight: "165%",
                fontWeight: 400,
              }}
            >
              The Mint will take place on the Lucky Lemurs website with a
              maximum of 5 Lemurs per transaction. Phantom, Sollet, and Solflare
              will all be supported. <br />
              <br />
              Price 0.33 Sol
              <br />
              <br />
              Mint Date: October 17th
              <br />
              <br />
              Join Discord for information and access to discounted presale.
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} className="flex items-center p-2">
            <RawImage src="/img/effect2.png" />
          </Grid>
        </Grid>
      </Box>
      <RoadMap />
      <Box
        className="p-4"
        style={{
          background:
            "linear-gradient(96.53deg, rgba(35, 166, 248, 0.33) 0.47%, rgba(127, 64, 203, 0.78) 99.97%)",
        }}
      >
        <Box className="flex items-center justify-center pt-4">
          <Typography
            variant="h2"
            className="sub-title"
            style={{ fontWeight: 500, color: "#F16522" }}
          >
            Post-
          </Typography>
          <Typography
            variant="h2"
            className="sub-title"
            style={{ fontWeight: 500, color: "black" }}
          >
            Mint
          </Typography>
          <RawImage
            src="/img/17.png"
            className="mx-0.5 md:mx-2 mb-2 p-2 w-16 hidden md:block"
          />
        </Box>
        <Box className="w-full md:w-3/5 py-6 px-2 flex items-center justify-center mx-auto">
          <Typography variant="h6" className="text-black text-center">
            Lucky Lemur ownership will grant all holders exclusive and early
            access to future Lucky Lemurs projects, airdrops, collaborations and
            events.
          </Typography>
        </Box>
      </Box>
      <Box className="content mx-auto" style={{ width: "1440px" }}>
        <Gallery />
      </Box>
      <Rarity />
      <Box className="content mx-auto" style={{ width: "1440px" }}>
        <Team />
      </Box>
    </Layout>
  );
};

const renderCounter = ({ days, hours, minutes, seconds }: any) => {
  const min = "0" + minutes;
  const sec = "0" + seconds;
  return (
    <span>
      {days} days {hours} : {min.substring(min.length - 2)} :{" "}
      {sec.substring(sec.length - 2)}
    </span>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const db = client.db();
  const presaleAccounts = await db.collection("presale");

  const isPreSaleActive = true;

  return {
    props: { isPreSaleActive },
  };
};

export default Home;
