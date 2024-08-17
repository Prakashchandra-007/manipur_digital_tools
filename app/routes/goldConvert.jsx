import React, { useEffect, useState } from "react";
import { PhoneIcon, AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Tools from "../components/Tools";
import UnitInput from "../components/UnitInput";

const goldConversionData = {
  gram: 1,
  "tola/mohor": 0.0858,
  san: 0.3431,
  channing: 8.2645,
  phoumaru: 33.0033,
};

const GoldConvert = () => {
  const [inputUnit, setInputUnit] = useState("gram");
  const [outputUnit, setOutputUnit] = useState("gram");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (value, iu, ou) => {
    const numericValue = parseFloat(value) || 0;
    const inputFactor = goldConversionData[iu];
    const outputFactor = goldConversionData[ou];

    const result = (numericValue * outputFactor) / inputFactor;

    return result.toFixed(4);
  };

  useEffect(() => {
    setOutputValue(handleInputChange(inputValue, inputUnit, outputUnit));
  }, [outputUnit, inputUnit]);

  return (
    <VStack p={10} bg="#F5EDED" spacing={6}>
      <Heading color="#6482AD">Manipuri Gold Weight Converter</Heading>
      <VStack alignItems="flex-start" spacing={6}>
        <Text color="#7FA1C3">Gold Weight & Unit</Text>
        <Flex
          borderColor="#7FA1C3"
          borderRadius={8}
          bgColor="#E2DAD6"
          p={2}
          gap={2}
        >
          <Input
            w={400}
            placeholder="Enter gold weight"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setOutputValue(
                handleInputChange(e.target.value, inputUnit, outputUnit)
              );
            }}
            bg="white"
            borderColor="#E2DAD6"
          />

          <UnitInput
            units={Object.keys(goldConversionData)}
            value={inputUnit}
            onUnitChange={setInputUnit}
            placeholder="Select Unit"
          />
        </Flex>

        <Text color="#7FA1C3">Result Unit</Text>
        <UnitInput
          units={Object.keys(goldConversionData)}
          value={outputUnit}
          onUnitChange={setOutputUnit}
          placeholder="Select Unit"
          w="100%"
        />
        {inputValue > 0 && (
          <VStack
            px={4}
            py={2}
            borderRadius={12}
            bgColor="#E2DAD6"
            borderColor="#7FA1C3"
          >
            <Text color="#6482AD">
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
                  <Th>Unit</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Gram</Td>
                  <Td isNumeric>
                    {handleInputChange(inputValue, inputUnit, "gram")}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Tola/mohor</Td>
                  <Td isNumeric>
                    {handleInputChange(inputValue, inputUnit, "tola/mohor")}
                  </Td>
                </Tr>
                <Tr>
                  <Td>San</Td>
                  <Td isNumeric>
                    {handleInputChange(inputValue, inputUnit, "san")}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Channing</Td>
                  <Td isNumeric>
                    {handleInputChange(inputValue, inputUnit, "channing")}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Phoumaru</Td>
                  <Td isNumeric>
                    {handleInputChange(inputValue, inputUnit, "phoumaru")}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </VStack>
      <Tools />
    </VStack>
  );
};

export default GoldConvert;
