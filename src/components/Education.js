import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const Education = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textColor="#292f36"
        marginTop={["30px", "40px"]}
        marginBottom={"20px"}
      >
        <Heading size="3xl" fontWeight={"bold"}>
          Education
        </Heading>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={["80vh", "100vh", "40vh"]}
        textColor="#292f36"
        fontSize={"xl"}
        // borderColor="red"
        // borderWidth="1px"
      >
        <Stack direction={["column", "column", "row"]} spacing={20}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text paddingBottom="20px">AISSE (Class X) : CGPA 9.2 </Text>
            <CircularProgress value={100} color="green.400">
              <CircularProgressLabel>100%</CircularProgressLabel>
            </CircularProgress>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text paddingBottom="20px">AISSCE (Class XII) : 88%</Text>
            <CircularProgress value={100} color="green.400">
              <CircularProgressLabel>100%</CircularProgressLabel>
            </CircularProgress>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text paddingBottom="20px">B-Tech : CGPA 8.69</Text>
            <CircularProgress value={75} color="green.400">
              <CircularProgressLabel>75%</CircularProgressLabel>
            </CircularProgress>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Education;
