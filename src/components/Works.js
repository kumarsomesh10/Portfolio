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
        textColor="#292f36"
        marginTop={["30px", "40px"]}
        marginBottom={"30px"}
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
        height={["auto", "auto", "auto", "110vh"]}
      >
        <Stack
          flex={3}
          direction={["column", "column", "column", "row"]}
          spacing={[4, 8, 8]}
        >
          <Card
            maxW={["auto", "auto", "auto", "30vw"]}
            height="auto"
            p={["15px", "15px", "5px"]}
            m={["6vw", "6vw", "0.1vh 1vw 0.1vh 1vw"]}
            bgColor="none"
            textColor="#292f36"
            borderColor="#292f36"
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
                    colorScheme="#292f36"
                    variant="outline"
                    textColor="#292f36"
                    sx={{
                      "&:hover": {
                        color: "black", // Text color when hovering
                        backgroundColor: "#008080", // Background color when hovering
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
              src="https://i.imgur.com/gYWSSiA.jpg"
              alt="Chakra UI"
              borderRadius="6"
            />
          </Card>
          <Card
            maxW={["auto", "auto", "auto", "30vw"]}
            height="auto"
            p={["15px", "15px", "5px"]}
            m={["6vw", "6vw", "0.1vh 1vw 0.1vh 1vw"]}
            bgColor="none"
            textColor="#292f36"
            borderColor="#292f36"
            borderWidth="1px"
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">ChatHub</Heading>
                    <Text>ReactJS, Express, Node.js, and MongoDB</Text>
                  </Box>
                </Flex>
                <a
                  href="https://github.com/kumarsomesh10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    colorScheme="#292f36"
                    variant="outline"
                    textColor="#292f36"
                    sx={{
                      "&:hover": {
                        color: "black", // Text color when hovering
                        backgroundColor: "#008080", // Background color when hovering
                      },
                    }}
                    icon={<BiLinkExternal />}
                  />
                </a>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Facilitates real-time communication through both one-on-one and
                group messaging. Ensures security through a streamlined
                signup/sign-in process. Utilizes socket.io for instantaneous
                message exchange. Designed with an intuitive user interface for
                initiating chats and group conversations.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://i.imgur.com/SGxcFc2.jpg"
              alt="Chakra UI"
              borderRadius="6"
            />
          </Card>
          <Card
            maxW={["auto", "auto", "auto", "30vw"]}
            height="auto"
            p={["15px", "15px", "5px"]}
            m={["6vw", "6vw", "0.1vh 1vw 0.1vh 1vw"]}
            bgColor="none"
            textColor="#292f36"
            borderColor="#292f36"
            borderWidth="1px"
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">BlogVerse</Heading>
                    <Text>ReactJS, Express, Node.js, and MongoDB</Text>
                  </Box>
                </Flex>
                <a
                  href="https://github.com/kumarsomesh10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    colorScheme="#292f36"
                    variant="outline"
                    textColor="#292f36"
                    sx={{
                      "&:hover": {
                        color: "black", // Text color when hovering
                        backgroundColor: "#008080", // Background color when hovering
                      },
                    }}
                    icon={<BiLinkExternal />}
                  />
                </a>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Seamlessly engages users through efficient user registration and
                login functions. Authenticated users access personalized
                dashboards, enhancing (CRUD) operations. Leveraging the MERN
                stack, prioritizes security by granting only authors the ability
                to modify their own posts.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://i.imgur.com/uXg823V.jpg"
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
