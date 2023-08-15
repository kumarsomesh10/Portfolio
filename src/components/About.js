import React from "react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const About = () => {
  return (
    <Box id="about">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textColor="white"
        marginTop={["30px", "40px"]}
      >
        <Heading size="3xl" fontWeight={"bold"}>
          About Me
        </Heading>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH={"100vh"}
        height={["170vh", "150vh", "100vh"]}
      >
        <Card
          direction={{ base: "column", md: "column", lg: "row" }}
          overflow="hidden"
          variant="outline"
          height={["155vh", "155vh", "80vh"]}
          marginTop={["", "30px", ""]}
          width={"80vw"}
          bg={"none"}
          textColor={"white"}
          border="none"
        >
          <Image
            alignItems={"center"}
            padding={"1%"}
            height={"70vh"}
            width={["", "60vw", ""]}
            mx={{ base: "auto", md: "auto", lg: "0" }}
            src="https://i.imgur.com/P1Ns2Y9.png"
            alt="Somesh Kumar"
            borderRadius="5%"
          />

          <Stack>
            <CardBody>
              <Heading size={["xl", "xl", "xl"]}>
                Hay. What's Up? Hello! 🤝
              </Heading>
              <Text py="2" fontSize="lg" textAlign="justify">
                I'm Somesh Kumar, currently pursuing B.Tech in Computer Science
                and Engineering from the Indian Institute of Information
                Technology, Kalyani. My CGPA of 8.69 reflects my commitment.
                Proficient in languages like C++, Python, and Java, coupled with
                Bootstrap and React, I'm keen on web development and machine
                learning. My projects exemplify this—designing a Java-based
                flight booking software that excels in filtering and
                user-centric features, crafting ConnectHub for real-time Chat
                using MongoDB and React, and developing the feature-rich
                BlogVerse. My achievement highlights include researching and
                building a 99.8% accurate Intrusion Detection System with
                PyTorch and Scikit-learn. I'm an adept problem-solver, active
                contest participant, showcasing academic and technical
                excellence.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
      <Skills />
      <Experience />
      <Education />
    </Box>
  );
};

export default About;
