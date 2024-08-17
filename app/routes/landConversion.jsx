import React, { useEffect, useState } from "react";

import {
  Flex,
  Heading,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Th,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Tools from "../components/Tools";
import UnitInput from "../components/UnitInput";

const landConversionData = {
  point: 1.0,
  pari: 0.004,
  lourak: 0.008,
  sangam: 0.016,
  loukhai: 0.032,
  loushal: 0.064,
  tong: 0.128,
  square_feet: 435.6191,
  acre: 0.01,
  hectare: 0.004,
  square_meter: 40.47,
  square_kilometer: 0.0,
};

const LandConversion = () => {
  const [inputUnit, setInputUnit] = useState("point");
  const [outputUnit, setOutputUnit] = useState("point");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (value, iu, ou) => {
    const numericValue = parseFloat(value) || 0;
    const inputFactor = landConversionData[iu];
    const outputFactor = landConversionData[ou];

    const result = (numericValue * outputFactor) / inputFactor;

    return result.toFixed(4);
  };

  useEffect(() => {
    setOutputValue(handleInputChange(inputValue, inputUnit, outputUnit));
  }, [outputUnit, inputUnit]);

  return (
    <VStack p={10} spacing={8} bgColor="#F5EDED">
      <Heading color="#6482AD">
        Manipuri Land Area Converter & Rate Calculator
      </Heading>
      <VStack alignItems={"flex-start"} spacing={6}>
        <Text fontSize="lg" fontWeight="semibold" color="#7FA1C3">
          Total Area & Input Unit
        </Text>
        <Flex
          borderWidth={1}
          borderColor="#7FA1C3"
          borderRadius={8}
          bgColor="#E2DAD6"
          p={2}
          gap={2}
        >
          <Input
            outline={"none"}
            borderWidth={0}
            w={400}
            placeholder="0"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setOutputValue(
                handleInputChange(e.target.value, inputUnit, outputUnit)
              );
            }}
            bgColor="#F5EDED"
          />
          <UnitInput
            units={Object.keys(landConversionData)}
            value={inputUnit}
            onUnitChange={setInputUnit}
            placeholder="Select Unit"
          />
        </Flex>
        <Text color="#7FA1C3">Result Unit</Text>
        <UnitInput
          units={Object.keys(landConversionData)}
          value={outputUnit}
          onUnitChange={setOutputUnit}
          placeholder="Select Unit"
          w={590}
        />

        {inputValue > 0 && (
          <VStack
            bgColor="#7FA1C3"
            borderRadius={8}
            px={4}
            py={2}
            color="white"
          >
            <Text>
              {inputValue} {inputUnit} is equal to {outputValue} {outputUnit}
            </Text>
          </VStack>
        )}
        <VStack alignItems={"flex-start"}>
          <Text> All converted units and values at a glance.</Text>
          <TableContainer borderWidth={2} borderRadius={8}>
            <Table variant="simple" bgColor="#E2DAD6">
              <Thead>
                <Tr>
                  <Th color="#6482AD">Unit</Th>
                  <Th color="#6482AD">Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.keys(landConversionData).map((unit) => (
                  <Tr key={unit}>
                    <Td>{unit}</Td>
                    <Td isNumeric>
                      {handleInputChange(inputValue, inputUnit, unit)}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </VStack>
      <Tools />
    </VStack>
  );
};

export default LandConversion;
