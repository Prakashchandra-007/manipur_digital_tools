import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import React from "react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Flex
      w="100vw"
      h="8vh"
      bgColor="#1F2937"
      color="white"
      align="center"
      justify="space-between"
      boxShadow="md"
      px={6}
      py={2}
      position="fixed"
      top={0}
      left={0}
      zIndex={9999}
    >
      <Text
        cursor={"pointer"}
        onClick={() => navigate("/")}
        fontSize="lg"
        fontWeight="bold"
      >
        Manipuri Space
      </Text>
    </Flex>
  );
};

export default Navbar;
