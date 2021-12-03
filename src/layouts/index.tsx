import React from "react";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({
  children,
  fullWidth = false,
}: {
  children: any;
  fullWidth: boolean;
}) {
  return (
    <Box className="min-h-screen text-white">
      <Header />
      <Box className="">
        {Boolean(fullWidth) ? (
          <Box id="page_container">{children}</Box>
        ) : (
          <Container>
            <Box id="page_container">{children}</Box>
          </Container>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
