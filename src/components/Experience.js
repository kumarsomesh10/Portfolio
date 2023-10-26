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
        textColor="#292f36"
        fontSize={"xl"}
        // borderColor="red"
        // borderWidth="5px"
      >
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
    </div>
  );
};

export default Experience;
