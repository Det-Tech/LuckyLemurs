import React from "react";
import { Box } from "@material-ui/core";

// @ts-ignore
export default function ChildBackgroundImage({ src, children }) {
  return (
    <Box
      className="flex justify-center items-center w-full rounded-xl bg-cover bg-center"
      style={{ backgroundImage: `url(${src})` }}
    >
      <Box className="text-center py-10 px-4">{children}</Box>
    </Box>
  );
}
