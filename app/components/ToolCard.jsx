import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import clockImg from "../assests/svgs/alarm-clock.svg";
import { useNavigate } from "@remix-run/react";

const ToolCard = ({
  title,
  description,
  icon,
  ctaText = "Try Now",
  navigation,
}) => {
  const navigate = useNavigate();

  const handleNavigation = (target) => {
    navigate(target);
  };

  return (
    <VStack
      w={350}
      p={5}
      borderRadius={12}
      bgColor="#E2DAD6"
      boxShadow="lg"
      spacing={4}
      align="center"
    >
      <Image w={10} h={10} src={icon} alt={title} />
      <Heading textAlign="center" fontSize={18} lineHeight={1} color="#6482AD">
        {title}
      </Heading>
      <Text textAlign="center" fontSize={14} noOfLines={6} color="#7FA1C3">
        {description}
      </Text>
      <Button
        px={4}
        py={2}
        bgColor="#6482AD"
        color="white"
        _hover={{ bgColor: "#7FA1C3" }}
        onClick={() => handleNavigation(navigation)}
      >
        {ctaText}
      </Button>
    </VStack>
  );
};

export default ToolCard;
