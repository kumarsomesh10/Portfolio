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
  Text,
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
        backgroundColor="#292f36"
        shadow="xl"
      >
        <Button
          ref={btnRef}
          // colorScheme="#292f36"
          variant="ghost"
          textColor="white"
          sx={{
            "&:hover": {
              color: "black",
              backgroundColor: "#008080",
            },
          }}
          onClick={onOpen}
        >
          Menu
        </Button>
        <Text
          color="white"
          fontSize={["md", "xl", "2xl"]}
          fontWeight={["", "", "bold"]}
        >
          Hello 👋 Guest
        </Text>
        <Avatar
          name="Somesh Kumar"
          src="https://i.imgur.com/P1Ns2Y9.png"
          _hover={{
            transform: "scale(1.1)", // Scale up on hover
            boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
            borderRadius: "20px",
          }}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        textColor="white"
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#EEEEEE"}>
          <DrawerCloseButton
            sx={{
              "&:hover": {
                color: "black",
                backgroundColor: "#008080",
              },
            }}
            color={"#eeeeee"}
            marginTop={"6px"}
          />
          <DrawerHeader bgColor="#292f36" color="white" borderRadius={"10px"}>
            Menu
          </DrawerHeader>
          <DrawerBody bgColor="#EEEEEE ">
            <Box marginLeft={["20px", "0px", "0px"]}>
              <Button
                colorScheme="gray"
                variant="ghost"
                textColor="#292f36"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "#008080",
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
                textColor="#292f36"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "#008080",
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
                textColor="#292f36"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "#008080",
                  },
                }}
                onClick={() => scrollToSection("#internship")}
              >
                Internship
              </Button>
            </Box>
            <Box marginLeft={["20px", "0px"]}>
              <Button
                colorScheme="gray"
                variant="ghost"
                textColor="#292f36"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "#008080",
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
                textColor="#292f36"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "#008080",
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
