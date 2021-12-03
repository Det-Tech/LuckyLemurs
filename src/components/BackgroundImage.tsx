import React from "react";
import { Box } from "@material-ui/core";

// @ts-ignore
export default function BackgroundImage({ src, children }) {
  return (
    <Box
      className="flex justify-center items-center w-full bg-cover bg-center main-content"
      style={{ backgroundImage: `url(${src})` }}
    >
      <Box className="text-center">{children}</Box>
    </Box>
  );
}
