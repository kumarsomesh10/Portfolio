import React from "react";
import {
  Box,
  Button,
  Avatar,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth",
    });
    onClose();
  };

  return (
    <>
      <Box
        id="head"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="20px"
        position="sticky"
        top="0"
        zIndex="1"
        backgroundColor="black"
        shadow="xl"
      >
        <Button
          ref={btnRef}
          colorScheme="gray"
          variant="ghost"
          textColor="white"
          sx={{
            "&:hover": {
              color: "black",
              backgroundColor: "white",
            },
          }}
          onClick={onOpen}
        >
          Menu
        </Button>
        <Avatar name="Dan Abrahmov" src="https://i.imgur.com/P1Ns2Y9.png" />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        textColor="white"
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"grey"}>
          <DrawerCloseButton color={"white"} marginTop={"6px"} />
          <DrawerHeader bgColor="#333" color="white" borderRadius={"10px"}>
            Menu
          </DrawerHeader>
          <DrawerBody bgColor="gray">
            <Box marginLeft={["20px", "0px", "0px"]}>
              <Button
                colorScheme="gray"
                variant="ghost"
                textColor="white"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
                onClick={() => scrollToSection("#header")}
              >
                Home
              </Button>
            </Box>
            <Box marginLeft={["20px", "0px"]}>
              <Button
                colorScheme="gray"
                variant="ghost"
                textColor="white"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
                onClick={() => scrollToSection("#about")}
              >
                About
              </Button>
            </Box>
            <Box marginLeft={["20px", "0px"]}>
              <Button
                colorScheme="gray"
                variant="ghost"
                textColor="white"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
                onClick={() => scrollToSection("#works")}
              >
                Projects
              </Button>
            </Box>
            <Box marginLeft={["20px", "0px"]}>
              <Button
                colorScheme="gray"
                variant="ghost"
                textColor="white"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
