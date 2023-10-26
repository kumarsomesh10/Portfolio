import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  ChakraProvider,
  Divider,
  Heading,
  Image,
  Link,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const cards = [
  {
    title: "Groweasy Landing Page",
    tech: "HTML, CSS, ReactJS",
    description:
      "In my Groweasy landing page project, I translated a Figma design into a fully functional webpage from scratch. Using vanilla CSS, I meticulously styled and made the page responsive. I also integrated a user-friendly email submission form for visitors to receive future notifications from the company, creating an engaging landing page that boosts the company's online presence and user interaction.",
    imageSrc: "/images/groweasyLandingpage.jpg",
    githubLink: "",
    deployLink: "https://groweasy.ai/",
  },
  {
    title: "Poster Designing App",
    tech: "HTML, CSS, ReactJS, Canvas",
    description:
      "In my Poster Designing App project, I created an easy-to-use application for designing attractive posters. Users can choose from three frame options: landscape, portrait, and square, and are able to download their creations as JPG images. This project enhances design capabilities and offers a user-friendly poster creation experience.",
    imageSrc: "/images/posterDesigningapp.jpg",
    githubLink: "",
    deployLink: "https://bannerdesigning-app.netlify.app/",
  },
];

const Experience = () => {
  return (
    <ChakraProvider>
      <Box
        id="internship"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={["auto", "auto"]}
        textColor="#292f36"
        fontSize={"xl"}
        flexDirection={"column"}
        // borderColor="red"
        // borderWidth="5px"
      >
        <VStack spacing={6}>
          <Heading size="3xl">Internship </Heading>
          <Card
            direction={["column"]}
            overflow="hidden"
            variant="outline"
            height={"auto"}
            marginTop={["", "30px", ""]}
            padding={"10px"}
            width={"80vw"}
            bg={"none"}
            textColor={"#292f36"}
            border="none"
            borderRadius={"5px"}
            shadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          >
            <Stack>
              <CardBody>
                <Heading size={["xl", "xl", "xl"]}>
                  BannerBot Internship
                </Heading>
                <br />
                <Text py="2" fontSize="lg" textAlign="justify">
                  <b>Role :</b> Javascript Developer Intern <br />
                  <b>Loction :</b> Work From Home
                  <br />
                  <b>Tech Stack Used:</b> HTML, CSS, ChakraUI, Javascript,
                  TypeScript, ReactJS, NextJS <br />
                  During my internship as a JavaScript Developer at BannerBot, I
                  had the opportunity to work remotely and contribute
                  significantly to the team's efforts. My primary role was
                  collaborating with the internal admin panel team to enhance
                  functionality, streamline workflows, and ultimately improve
                  the user experience. This involved not only backend
                  development but also front-end web development, where I
                  focused on creating a seamless user interface and introducing
                  engaging features. As part of my contributions, I developed a
                  <b> captivating landing page for the company's website</b>.
                  Moreover, I had the privilege of creating a
                  <b>
                    web application designed to empower users to craft stunning
                    posters with ease.
                  </b>
                  <br />
                  These experiences allowed me to strengthen my development
                  skills and contribute to the company's vision of enhancing
                  design and user interaction.
                </Text>
              </CardBody>
            </Stack>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center" // Center align cards horizontally
              gap={4} // Adjust the gap between cards
            >
              {cards.map((card, index) => (
                <Card key={index} maxW="lg" marginBottom={4}>
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
          </Card>
        </VStack>

        <VStack spacing={6}>
          <Heading size="3xl">Experiece</Heading>
          <Box>
            <Text padding="5px">Data Structure and Algorithm</Text>
            <Progress
              padding={"3px"}
              bg={"#292f36"}
              value={70}
              width="80vw"
              height="10px"
            />
          </Box>
          <Box>
            <Text padding="5px">Web Development</Text>
            <Progress
              padding={"3px"}
              bg={"#292f36"}
              value={80}
              width="80vw"
              height="10px"
            />
          </Box>
          <Box>
            <Text padding="5px">Machine Learning </Text>
            <Progress
              padding={"3px"}
              bg={"#292f36"}
              value={30}
              width="80vw"
              height="10px"
            />
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Experience;
