import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

// Sample data for Yumnak to Yek Salai mapping
const yumnakToYekSalai = {
  Ningthouja: { yekSalai: "Mangang", color: "red" },
  Luwang: { yekSalai: "Luwang", color: "green" },
  Khuman: { yekSalai: "Khuman", color: "blue" },
  Angom: { yekSalai: "Angom", color: "yellow" },
  Moirang: { yekSalai: "Moilang", color: "orange" },
  Chenglei: { yekSalai: "Khabanganba", color: "purple" },
  Leishangthem: { yekSalai: "Saranga Leishangthem", color: "pink" },
};

const YekSalaiFinder = () => {
  const [yumnak, setYumnak] = useState("");
  const [result, setResult] = useState(null);

  const findYekSalai = () => {
    const normalizedYumnak = yumnak.trim();
    const yekSalaiInfo = yumnakToYekSalai[normalizedYumnak];
    if (yekSalaiInfo) {
      setResult(yekSalaiInfo);
    } else {
      setResult({ yekSalai: "Unknown", color: "gray" });
    }
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="xl" fontWeight="bold">
        Find out what is your Yek Salai and color with this simple tool.
      </Text>
      <Input
        placeholder="Enter your Yumnak"
        value={yumnak}
        onChange={(e) => setYumnak(e.target.value)}
        w={300}
      />
      <Button colorScheme="teal" onClick={findYekSalai}>
        Find Yek Salai
      </Button>
      {result && (
        <Box p={4} bg={result.color} color="white" borderRadius="md">
          <Text fontSize="lg">Yek Salai: {result.yekSalai}</Text>
          <Text fontSize="lg">Color: {result.color}</Text>
        </Box>
      )}
    </VStack>
  );
};

export default YekSalaiFinder;
