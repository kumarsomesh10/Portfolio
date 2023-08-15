import React from "react";
import { Box, Heading, Progress, Text, VStack } from "@chakra-ui/react";

const Experience = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={["40vh", "60vh"]}
        textColor="white"
        // borderColor="red"
        // borderWidth="5px"
      >
        <VStack spacing={5}>
          <Heading size="3xl">Experiece</Heading>
          <Box>
            <Text padding="5px">Data Structure and Algorithm</Text>
            <Progress value={80} width="80vw" height="5px" />
          </Box>
          <Box>
            <Text padding="5px">Web Development</Text>
            <Progress value={60} width="80vw" height="5px" />
          </Box>
          <Box>
            <Text padding="5px">Machine Learning </Text>
            <Progress value={20} width="80vw" height="5px" />
          </Box>
        </VStack>
      </Box>
    </div>
  );
};

export default Experience;
