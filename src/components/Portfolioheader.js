import React, { useState } from "react";
import { Box, Button, Stack, Collapse, useMediaQuery } from "@chakra-ui/react"; // Import Chakra UI components

import Welcometxt from "./Welcometxt";

const Portfolioheader = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)"); // Set breakpoint as needed

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div id="header">
        <Box
          p={[3, 5]} // Adjust padding for different screen sizes
          height={["auto", "auto", "100vh"]} // Adjust height for different screen sizes
          width={["100vw", "100vw", "100vw"]}
          // backgroundImage="url('https://i.imgur.com/HDwyUo1.jpg')"
          bgSize="cover"
          bgPosition={["right", "center"]}
          bgRepeat="no-repeat"
          textColor="white"
        >
          <Stack
            direction={["column", "row"]}
            spacing={[5, 10]}
            align={["left", "center"]}
            justify={["center", "flex-start"]}
          >
            <Stack
              direction={["column", "row"]}
              spacing={[5, 10]}
              align={["left", "center"]}
              justify={["center", "flex-start"]}
            >
              {/* Show collapsed button for small and medium screens */}
              {isSmallerScreen && (
                <Box marginLeft={["20px", "0px"]}>
                  <Button
                    onClick={toggleCollapse}
                    colorScheme="gray"
                    variant="outline"
                    textColor="white"
                    sx={{
                      "&:hover": {
                        color: "black", // Text color when hovering
                        backgroundColor: "white", // Background color when hovering
                      },
                    }}
                  >
                    Menu
                  </Button>
                </Box>
              )}

              {/* Show individual buttons for large screens */}
              {!isSmallerScreen && (
                <>
                  <Box marginLeft={["20px", "0px"]}>
                    <a href="#header">
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        textColor="white"
                        sx={{
                          "&:hover": {
                            color: "black", // Text color when hovering
                            backgroundColor: "white", // Background color when hovering
                          },
                        }}
                      >
                        Home
                      </Button>
                    </a>
                  </Box>
                  <Box marginLeft={["20px", "0px"]}>
                    <a href="#about">
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        textColor="white"
                        sx={{
                          "&:hover": {
                            color: "black", // Text color when hovering
                            backgroundColor: "white", // Background color when hovering
                          },
                        }}
                      >
                        About
                      </Button>
                    </a>
                  </Box>
                  <Box marginLeft={["20px", "0px"]}>
                    <a href="#works">
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        textColor="white"
                        sx={{
                          "&:hover": {
                            color: "black", // Text color when hovering
                            backgroundColor: "white", // Background color when hovering
                          },
                        }}
                      >
                        My Works
                      </Button>
                    </a>
                  </Box>
                  <Box marginLeft={["20px", "0px"]}>
                    <a href="#contact">
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        textColor="white"
                        sx={{
                          "&:hover": {
                            color: "black", // Text color when hovering
                            backgroundColor: "white", // Background color when hovering
                          },
                        }}
                      >
                        Contact Me
                      </Button>
                    </a>
                  </Box>
                </>
              )}
            </Stack>

            {/* Collapsed buttons for small and medium screens */}
            {isSmallerScreen && (
              <Collapse in={!isCollapsed}>
                <Stack
                  direction={["column", "row"]}
                  spacing={[5, 10]}
                  align={["left", "center"]}
                  justify={["center", "flex-start"]}
                >
                  <Box marginLeft={["20px", "0px"]}>
                    <a href="#header">
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        textColor="white"
                        sx={{
                          "&:hover": {
                            color: "black", // Text color when hovering
                            backgroundColor: "white", // Background color when hovering
                          },
                        }}
                      >
                        Home
                      </Button>
                    </a>
                  </Box>
                  <Box marginLeft={["20px", "0px"]}>
                    <a href="#about">
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        textColor="white"
                        sx={{
                          "&:hover": {
                            color: "black", // Text color when hovering
                            backgroundColor: "white", // Background color when hovering
                          },
                        }}
                      >
                        About
                      </Button>
                    </a>
                  </Box>
                  <Box marginLeft={["20px", "0px"]}>
                    <a href="#works">
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        textColor="white"
                        sx={{
                          "&:hover": {
                            color: "black", // Text color when hovering
                            backgroundColor: "white", // Background color when hovering
                          },
                        }}
                      >
                        My Works
                      </Button>
                    </a>
                  </Box>
                  <Box marginLeft={["20px", "0px"]}>
                    <a href="#contact">
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        textColor="white"
                        sx={{
                          "&:hover": {
                            color: "black", // Text color when hovering
                            backgroundColor: "white", // Background color when hovering
                          },
                        }}
                      >
                        Contact Me
                      </Button>
                    </a>
                  </Box>
                </Stack>
              </Collapse>
            )}
          </Stack>
          <Box marginTop={["5vh", "5vh", "40vh"]} padding={"25px"}>
            <Stack direction="row" spacing={50} align="center">
              <Welcometxt />
            </Stack>
          </Box>
        </Box>
      </div>
      <body className="content"></body>
    </div>
  );
};

export default Portfolioheader;
