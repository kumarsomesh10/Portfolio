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
    tech: "ReactJS, Express, Node.js, and MongoDB Passport.js Google-OAuth",
    description:
      "MERN Stack web application that empowers users to efficiently manage their unique ideas with comprehensive CRUD functionality. Prioritizing data security, our platform offers robust user authentication, including Google Sign-In. We enhance the user experience by enabling seamless access to stored ideas through sessions and cookies, eliminating repeated logins.",
    imageSrc: "/images/ideabox.jpg",
    githubLink: "https://github.com/kumarsomesh10/IdeaBox-client",
    deployLink: "https://ideabox-kumarsomesh.netlify.app/",
  },
  {
    title: "BlogVerse",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    description:
      "Seamlessly engages users through efficient user registration and    login functions. Authenticated users access personalized    dashboards, enhancing (CRUD) operations. Leveraging the MERN    stack, prioritizes security by granting only authors the ability    to modify their own posts.",
    imageSrc: "https://i.imgur.com/uXg823V.jpg",
    githubLink: "https://github.com/kumarsomesh10/BlogVerse",
    deployLink: "",
  },
  {
    title: "LawBot",
    tech: "ReactJS, Open AI, ChromaDB",
    description: `LawBot, with its intuitive interface, seamlessly harnesses the OpenAI API for precise query analysis. It effectively stores and retrieves an extensive legal database through ChromaDB, enhancing its knowledge base. This system excels in delivering highly accurate legal answers, providing users with valuable insights and information firmly grounded in the Indian Constitution.`,
    imageSrc: "/images/lawbot.jpg",
    githubLink: "https://github.com/kumarsomesh10/LawBot",
    deployLink: "https://lawbot.netlify.app/",
  },
  {
    title: "Portfolio Website",
    tech: "React, Chakra UI, Formspree",
    description:
      "Dynamic portfolio website showcasing my skills, projects, and      accomplishments. With Clean design and intuitive navigation,      visitors gain insights into my expertise, and creativity.      Connect effortlessly through this platform.",
    imageSrc: "https://i.imgur.com/svrWCV3.jpg",
    githubLink: "https://github.com/kumarsomesh10/Portfolio",
    deployLink: "https://someshkumarportfolio.netlify.app/",
  },
  {
    title: "ChatHub",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    description:
      "Facilitates real-time communication through both one-on-one and group messaging. Ensures security through a streamlined      signup/sign-in process. Utilizes socket.io for instantaneous      message exchange. Designed with an intuitive user interface for      initiating chats and group conversations.",
    imageSrc: "https://i.imgur.com/SGxcFc2.jpg",
    githubLink: "https://github.com/kumarsomesh10",
    deployLink: "",
  },
  {
    title: "Intrusion Detection System",
    tech: "PyTorch, Python, Scikit-learn, and GANs",
    description: `Delved into a variety of machine learning models aimed
      at bolstering network security by effectively detecting anomalies. The process involved fine-tuning through techniques
      such as hyperparameter tuning, feature extraction, and engineering to optimize overall model performance.
      Notably, the application of Random Forest in conjunction with PCA yielded remarkable results, achieving an
      impressive accuracy rate of 99.8%`,
    imageSrc: "",
    githubLink: "https://github.com/kumarsomesh10/Intrusion-Detection-System",
    deployLink: "",
  },
  {
    title: "Airline Management and Navigation System",
    tech: "Java, JavaSwing, Object oriented Programming, Netbeans",
    description: `
    Employed Java Swing and OOPs principles to create an intuitive flight booking software for user. The application
    integrated ticket filtering mechanisms based on price, distance, time, and layover. Users enjoyed the ease of
    booking, rescheduling, and canceling flights, underpinned by a robust latitude and longitude database for pinpoint
    accuracy. The incorporation of OOPs reinforced a transparent admin-user hierarchy, enhancing the overall system’s
    usability.`,
    imageSrc: "",
    githubLink:
      "https://github.com/kumarsomesh10/Airline-Management-and-Navigation-System",
    deployLink: "",
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
                {card.imageSrc !== "" ? (
                  <Image
                    src={card.imageSrc}
                    alt="Image"
                    borderRadius="lg"
                    border="2px"
                    borderColor="#292f36"
                  />
                ) : null}
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
                  {card.deployLink !== "" ? (
                    <Link href={card.deployLink} isExternal>
                      <Button variant="ghost" colorScheme="blue">
                        Deploy Link
                      </Button>
                    </Link>
                  ) : null}
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
