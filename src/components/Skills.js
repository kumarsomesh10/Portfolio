import React from "react";
import { Box, Heading, Stack, Tag, TagLabel } from "@chakra-ui/react";

const Skills = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textColor="#292f36"
        marginTop={["30px", "40px"]}
      >
        <Heading size="3xl" fontWeight={"bold"}>
          Skills
        </Heading>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="55vh"
        textColor="#292f36"
      >
        <Stack direction={["column", "column", "column"]} spacing={[4, 8, 8]}>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction={"row"}
            spacing={5}
          >
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>C</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>C++</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>Python</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>Java</TagLabel>
            </Tag>
          </Stack>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction={"row"}
            spacing={5}
          >
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>HTML</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>CSS</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>JavaScript</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>Bootstrap</TagLabel>
            </Tag>
          </Stack>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction={"row"}
            spacing={5}
          >
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>React</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>Chakra UI</TagLabel>
            </Tag>
          </Stack>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction={"row"}
            spacing={5}
          >
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>Nodejs</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>MongoDB</TagLabel>
            </Tag>
          </Stack>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction={"row"}
            spacing={5}
          >
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>Scikit-learn</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>Numpy</TagLabel>
            </Tag>
            <Tag
              size="lg"
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              boxShadow="rgba(0, 0, 0, 0.70) 0px 3px 8px"
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "rgba(0, 0, 0, 0.99) 0px 5px 15px", // Adjust the box shadow on hover
              }}
            >
              <TagLabel>PyTorch</TagLabel>
            </Tag>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Skills;
