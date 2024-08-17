import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CapitalizeText } from "../utils/string";

const UnitInput = ({ placeholder, value, units, onUnitChange, ...rest }) => {
  return (
    <VStack direction="column" align="start">
      <Menu>
        <MenuButton
          w={40}
          bgColor="#E2DAD6"
          borderRadius={6}
          as={Button}
          _hover={{ bgColor: "#F5EDED" }}
          rightIcon={<ChevronDownIcon />}
          {...rest}
          textAlign={"left"}
        >
          {CapitalizeText(value) ||
            CapitalizeText(placeholder) ||
            "Select Unit"}
        </MenuButton>
        <MenuList>
          {units?.map((unit) => (
            <MenuItem
              key={unit}
              onClick={() => onUnitChange(unit)}
              _hover={{ bgColor: "#F5EDED" }}
            >
              {CapitalizeText(unit)}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </VStack>
  );
};

export default UnitInput;
