import React from "react";
import { Box, Stack, Image } from "@chakra-ui/react"; // Import Chakra UI components

import Welcometxt from "./Welcometxt";

const Portfolioheader = () => {
  return (
    <div>
      <div id="header">
        <Box
          height={["75vh", "auto", "auto", "110vh"]}
          width={["100vw", "100vw", "100vw"]}
          textColor="white"
          marginTop={["2vh", "5vh", "0vh"]}
          padding={"50px"}
          // borderWidth="1px"
          // borderColor="red"
        >
          <Stack
            direction={["column", "column", "column", "row"]}
            spacing={50}
            align="center"
          >
            <Box width={"auto"} marginTop={["20px", "", ""]}>
              <Welcometxt />
            </Box>
            <Box
              marginLeft={["", "", "20px"]}
              width={"auto"}
              marginTop={["50px", "", ""]}
            >
              <Image
                alignItems={"center"}
                padding={"1%"}
                height={"auto"}
                width={["", "60vw", ""]}
                mx={{ base: "auto", md: "auto", lg: "0" }}
                src="https://i.imgur.com/R5AJOzU.png"
                alt="Somesh Kumar"
                borderRadius="5%"
              />
            </Box>
          </Stack>
        </Box>
      </div>
      <body className="content"></body>
    </div>
  );
};

export default Portfolioheader;
