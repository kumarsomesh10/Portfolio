import React from "react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiSolidPhoneCall, BiLogoGmail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Icon,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <div id="contact">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textColor="white"
        marginTop={["30px", "40px"]}
      >
        <Heading size="3xl" fontWeight={"bold"}>
          Contact Me
        </Heading>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={["140vh", "155vh", "100vh"]}
        textColor="white"
      >
        <Stack spacing={[4, 8, 8]}>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction={["column", "column", "row"]}
            spacing={[3, 8, 8]}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width={["100vw", "100vw", "65vw"]}
              height={["80vh", "90vh", "90vh"]}
            >
              <form action="https://formspree.io/f/xbjvgoyr" method="POST">
                <FormControl width={["85vw", "85vw", "60vw"]}>
                  <FormLabel>Your name :</FormLabel>
                  <Input
                    marginTop="5px"
                    marginBottom="15px"
                    type="name"
                    name="name"
                    required
                  />
                </FormControl>
                <FormControl width={["85vw", "85vw", "60vw"]}>
                  <FormLabel>Your email :</FormLabel>
                  <Input
                    marginTop="5px"
                    marginBottom="15px"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
                <FormControl width={["85vw", "85vw", "60vw"]}>
                  <FormLabel>Your message :</FormLabel>
                  <Textarea
                    marginTop="5px"
                    marginBottom="15px"
                    name="message"
                    resize="none"
                    size="lg"
                    width={["85vw", "85vw", "60vw"]}
                    height="200px"
                    required
                  />
                </FormControl>
                <Button
                  type="submit"
                  width="10vw"
                  marginTop="30px"
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
                  Send
                </Button>
              </form>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width={["100vw", "100vw", "25vw"]}
              height={["50vh", "50vh", "90vh"]}
            >
              <Box alignItems="left">
                <Text marginBottom="20px">
                  <Icon
                    as={BiLogoGmail}
                    boxSize={8}
                    color="white"
                    style={{ marginRight: "10px" }}
                  />
                  Email : kumarsomesh002@gmail.com
                </Text>
                <Text>
                  <Icon
                    as={BiSolidPhoneCall}
                    boxSize={8}
                    color="white"
                    style={{ marginRight: "10px" }}
                  />
                  Contact No. : +91 8009728254
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                padding="10px"
                marginTop="50px"
              >
                <a
                  href="https://www.linkedin.com/in/somesh-kumar-404779218/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaLinkedin} boxSize={8} color="white" />
                </a>
                <a
                  href="https://github.com/kumarsomesh10"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "20px" }}
                >
                  <Icon as={FaGithub} boxSize={8} color="white" />
                </a>
                <a
                  href="https://www.instagram.com/_kumar_somesh_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "20px" }}
                >
                  <Icon as={FaInstagram} boxSize={8} color="white" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100058823026874&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "20px" }}
                >
                  <Icon as={FaFacebook} boxSize={8} color="white" />
                </a>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box textAlign="center" padding="2" bgColor="white">
        <Flex
          as="footer"
          justifyContent="center"
          alignItems="center"
          padding="2"
        >
          <Text>
            Doing work with love{" "}
            <Icon as={AiFillHeart} boxSize={4} color="red" /> and efforts...
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Contact;
