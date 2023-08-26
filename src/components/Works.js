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
} from "@chakra-ui/react";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    title: "ChatHub",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    description:
      "Facilitates real-time communication through both one-on-one and      group messaging. Ensures security through a streamlined      signup/sign-in process. Utilizes socket.io for instantaneous      message exchange. Designed with an intuitive user interface for      initiating chats and group conversations.",
    imageSrc: "https://i.imgur.com/SGxcFc2.jpg",
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
    title: "Portfolio Website",
    tech: "React, Chakra UI",
    description:
      "Dynamic portfolio website showcasing my skills, projects, and      accomplishments. With Clean design and intuitive navigation,      visitors gain insights into my expertise, and creativity.      Connect effortlessly through this platform.",
    imageSrc: "https://i.imgur.com/svrWCV3.jpg",
    githubLink: "https://github.com/kumarsomesh10",
  },
  // ... add more cards
];

const Works = () => {
  return (
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
      <Carousel
        width={"100vw"}
        infiniteLoop
        autoPlay
        showArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                // zIndex: 2,
                top: "calc(50% - 20px)",
                left: "20px",
                color: "teal", // Customize the arrow color
                fontSize: "24px", // Customize the arrow size
              }}
            >
              <FaArrowLeft />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                // zIndex: 2,
                top: "calc(50% - 20px)",
                right: "20px",
                color: "teal", // Customize the arrow color
                fontSize: "24px", // Customize the arrow size
              }}
            >
              <FaArrowRight />
            </button>
          )
        }
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            height={"auto"}
            width={"auto"}
            display="grid"
            gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "2fr 3fr"]} // Adjust column widths as needed
            p={["15px", "15px", "50px"]}
            m={["8vw", "8vw", "5vh 30vh 1vh 30vh"]}
            bgColor="none"
            textColor="#292f36"
            borderColor="#292f36"
            // borderWidth="3px"
            shadow={
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            }
          >
            <Box>
              <CardHeader>
                <Flex spacing="4">
                  <Flex
                    flex="1"
                    gap="4"
                    alignItems="flex-start"
                    flexWrap="wrap"
                  >
                    <Box>
                      <Heading size="md" textAlign="left">
                        {card.title}
                      </Heading>
                      <Text textAlign="left">{card.tech}</Text>
                    </Box>
                  </Flex>
                  <a
                    href={card.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      colorScheme="#292f36"
                      variant="outline"
                      textColor="#292f36"
                      sx={{
                        "&:hover": {
                          color: "black",
                          backgroundColor: "#008080",
                        },
                      }}
                      icon={<BiLinkExternal />}
                    />
                  </a>
                </Flex>
              </CardHeader>
              <CardBody marginTop={"-30px"}>
                <Text textAlign="left">{card.description}</Text>
              </CardBody>
            </Box>
            <Image
              objectFit="cover"
              src={card.imageSrc}
              alt={card.title}
              borderRadius="6"
            />
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default Works;
