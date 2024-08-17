import { ChakraProvider, Heading, Text, VStack } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import Tools from "~/components/Tools";
import YekSalaiFinder from "../components/YekSalaiFinder";

export const meta: MetaFunction = () => {
  return [
    { title: "Manipur Digi Tools" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <ChakraProvider>
      <VStack px={10} py={10} bg="#F5EDED" spacing={8} align="stretch">
        <Heading color="#6482AD">Manipur Digi Tools</Heading>
        <Text color="#7FA1C3">
          Discover the perfect blend of tradition and modernity with Mani[App
          Name]. Accurately convert between Manipuri and standard units, and
          perform essential calculations. Our app is your go-to tool for
          simplifying daily tasks and preserving cultural heritage.
        </Text>
        <VStack spacing={6} align="stretch">
          <Heading size="md" color="#E2DAD6">
            Tools
          </Heading>

          <Tools />
        </VStack>
      </VStack>
    </ChakraProvider>
  );
}
