import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Image,
  Flex,
  Heading,
  IconButton,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Works = () => {
  return (
    <Box id="works">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textColor="white"
        marginTop={["30px", "40px"]}
      >
        <Heading size="3xl" fontWeight={"bold"}>
          My Works
        </Heading>
      </Box>
      <Box
        id="works"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={["auto", "auto", "110vh"]}
      >
        <Stack direction={["column", "column", "row"]} spacing={[4, 8, 8]}>
          <Card
            maxW={["auto", "auto", "auto"]}
            height="auto"
            p={["15px", "15px", "5px"]}
            m={["6vw", "6vw", "0.1vh 1vw 0.1vh 1vw"]}
            bgColor="none"
            textColor="white"
            borderColor="white"
            borderWidth="1px"
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">PortFolio Website</Heading>
                    <Text>React, Chakra UI</Text>
                  </Box>
                </Flex>
                <a
                  href="https://github.com/kumarsomesh10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    colorScheme="gray"
                    variant="outline"
                    textColor="white"
                    sx={{
                      "&:hover": {
                        color: "black", // Text color when hovering
                        backgroundColor: "white", // Background color when hovering
                      },
                    }}
                    icon={<BiLinkExternal />}
                  />
                </a>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Dynamic portfolio website showcasing my skills, projects, and
                accomplishments. With Clean design and intuitive navigation,
                visitors gain insights into my expertise, and creativity.
                Connect effortlessly through this platform.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://i.imgur.com/8BJSD78.jpg"
              alt="Chakra UI"
              borderRadius="6"
            />
          </Card>
          <Card
            maxW={["auto", "auto", "auto"]}
            height="auto"
            p={["15px", "15px", "5px"]}
            m={["6vw", "6vw", "0.1vh 1vw 0.1vh 1vw"]}
            bgColor="none"
            textColor="white"
            borderColor="white"
            borderWidth="1px"
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">PortFolio Website</Heading>
                    <Text>React, Chakra UI</Text>
                  </Box>
                </Flex>
                <a
                  href="https://github.com/kumarsomesh10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    colorScheme="gray"
                    variant="outline"
                    textColor="white"
                    sx={{
                      "&:hover": {
                        color: "black", // Text color when hovering
                        backgroundColor: "white", // Background color when hovering
                      },
                    }}
                    icon={<BiLinkExternal />}
                  />
                </a>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>Developed a website with React, Chakra UI and</Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://i.imgur.com/eczDk1c.jpg"
              alt="Chakra UI"
              borderRadius="6"
            />
          </Card>
          <Card
            maxW={["auto", "auto", "auto"]}
            height="auto"
            p={["15px", "15px", "5px"]}
            m={["6vw", "6vw", "0.1vh 1vw 0.1vh 1vw"]}
            bgColor="none"
            textColor="white"
            borderColor="white"
            borderWidth="1px"
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">PortFolio Website</Heading>
                    <Text>React, Chakra UI</Text>
                  </Box>
                </Flex>
                <a
                  href="https://github.com/kumarsomesh10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    colorScheme="gray"
                    variant="outline"
                    textColor="white"
                    sx={{
                      "&:hover": {
                        color: "black", // Text color when hovering
                        backgroundColor: "white", // Background color when hovering
                      },
                    }}
                    icon={<BiLinkExternal />}
                  />
                </a>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with
                the speed of design. I wanted the developer to be just as
                excited as the designer to create a screen.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://i.imgur.com/AvyWu7a.jpg"
              alt="Chakra UI"
              borderRadius="6"
            />
          </Card>
        </Stack>
      </Box>
    </Box>
  );
};

export default Works;
