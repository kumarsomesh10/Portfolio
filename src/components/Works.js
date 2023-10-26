import {
  Box,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  ChakraProvider,
  Stack,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Link,
} from "@chakra-ui/react";
import React from "react";

const cards = [
  {
    title: "IdeaBox",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    description:
      "MERN Stack web application that empowers users to efficiently manage their unique ideas with comprehensive CRUD functionality. Prioritizing data security, our platform offers robust user authentication, including Google Sign-In. We enhance the user experience by enabling seamless access to stored ideas through sessions and cookies, eliminating repeated logins.",
    imageSrc: "/images/ideabox.jpg",
    githubLink: "https://github.com/kumarsomesh10",
  },
  {
    title: "BlogVerse",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    description:
      "Seamlessly engages users through efficient user registration and    login functions. Authenticated users access personalized    dashboards, enhancing (CRUD) operations. Leveraging the MERN    stack, prioritizes security by granting only authors the ability    to modify their own posts.",
    imageSrc: "https://i.imgur.com/uXg823V.jpg",
    githubLink: "https://github.com/kumarsomesh10",
  },
  {
    title: "LawBot",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    description: `LawBot, with its intuitive interface, seamlessly harnesses the OpenAI API for precise query analysis. It effectively stores and retrieves an extensive legal database through ChromaDB, enhancing its knowledge base. This system excels in delivering highly accurate legal answers, providing users with valuable insights and information firmly grounded in the Indian Constitution.`,
    imageSrc: "/images/lawbot.jpg",
    githubLink: "https://github.com/kumarsomesh10",
  },
  {
    title: "Portfolio Website",
    tech: "React, Chakra UI",
    description:
      "Dynamic portfolio website showcasing my skills, projects, and      accomplishments. With Clean design and intuitive navigation,      visitors gain insights into my expertise, and creativity.      Connect effortlessly through this platform.",
    imageSrc: "https://i.imgur.com/svrWCV3.jpg",
    githubLink: "https://github.com/kumarsomesh10",
  },
  {
    title: "ChatHub",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    description:
      "Facilitates real-time communication through both one-on-one and group messaging. Ensures security through a streamlined      signup/sign-in process. Utilizes socket.io for instantaneous      message exchange. Designed with an intuitive user interface for      initiating chats and group conversations.",
    imageSrc: "https://i.imgur.com/SGxcFc2.jpg",
    githubLink: "https://github.com/kumarsomesh10",
  },
];

const Works = () => {
  return (
    <ChakraProvider>
      <Box
        id="works"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={"column"}
        height={"auto"}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textColor="#292f36"
          marginTop={["30px", "10px"]}
          marginBottom={"50px"}
        >
          <Heading size="3xl" fontWeight={"bold"}>
            My Works
          </Heading>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center" // Center align cards horizontally
          gap={4} // Adjust the gap between cards
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              maxW="sm"
              width={[
                "90%",
                "90%",
                "calc(33.33% - 2rem)",
                "calc(33.33% - 1rem)",
              ]} // Make the cards full-width on mobile and 1/3 width on desktop
              marginBottom={4}
            >
              <CardBody>
                <Image
                  src={card.imageSrc}
                  alt="Image"
                  borderRadius="lg"
                  border="2px"
                  borderColor="#292f36"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{card.title}</Heading>
                  <Text>{card.description}</Text>
                  <Text color="blue.600" fontSize="sm">
                    {card.tech}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Link href={card.githubLink} isExternal>
                    <Button variant="solid" colorScheme="blue">
                      Source Code
                    </Button>
                  </Link>
                  <Button variant="ghost" colorScheme="blue">
                    Deploy Link
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Works;
