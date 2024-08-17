import { Flex } from "@chakra-ui/react";
import React from "react";
import ToolCard from "./ToolCard";
import gold_ingot from "../assests/pngs/gold_ingot.png";
import infinity from "../assests/pngs/infinity.png";
import spatial from "../assests/pngs/spatial.png";
import statistics from "../assests/pngs/statistics.png";
import measurementTape from "../assests/pngs/tape_measurement.png";
import calendar from "../assests/pngs/calendar.png";
const TOOLS_LIST = [
  {
    id: "1",
    name: "LandAreaConverter",
    title: "Manipuri Land Area Converter",
    icon: spatial,
    navigation: "/landConversion",
    description: `Easily convert land area units from traditional Manipuri units 
                  like pari, sangam, etc., to square feet, points, and other 
                  standard units. This tool simplifies land transactions and 
                  planning by bridging the gap between traditional and modern 
                  measurements.`,
  },
  {
    id: "2",
    name: "GoldWeightConverter",
    title: "Manipuri Gold Weight Converter",
    icon: gold_ingot,
    navigation: "/goldConvert",
    description: `Convert traditional Manipuri gold weight units such as 
                  san, channing, phoumaru, and more into grams, tolas, and other 
                  modern units. This tool ensures accuracy in gold trade and 
                  personal calculations.`,
  },
  {
    id: "3",
    name: "YekSalaiFinder",
    title: "Meitei Yek Salai Finder",
    icon: infinity,
    navigation: "/salai/finder",
    description: `Discover your Yek Salai and its corresponding color by 
                  entering your Yumnak (clan name). This tool provides cultural 
                  insights and fosters awareness of Manipuri heritage.`,
  },
  // {
  //   id: "4",
  //   name: "MarupCalculator",
  //   title: "Marup Interest Calculator",
  //   icon: "💰", // Example icon (you can replace it with an appropriate one)
  //   navigation: "/marupCalculator",
  //   description: `Calculate interest and payouts for Marup, a traditional
  //                 Manipuri cooperative saving and lending system. This tool
  //                 helps you manage and understand your Marup contributions and
  //                 benefits.`,
  // },
  {
    id: "5",
    name: "VolumeConverter",
    title: "Manipuri Volume Converter",
    icon: statistics,
    navigation: "/volumeConversion",
    description: `Convert traditional Manipuri volume units, used for measuring 
                  liquids and grains, into liters, milliliters, and other modern 
                  units. This tool is especially useful for farmers, traders, and 
                  households.`,
  },
  {
    id: "6",
    name: "LengthDistanceConverter",
    title: "Length and Distance Converter",
    icon: measurementTape,
    navigation: "/lengthDistanceConversion",
    description: `Convert traditional Manipuri length and distance units, 
                  such as Hauj and Kang, into meters, kilometers, and other 
                  standard units. This tool assists in construction, textiles, 
                  and daily life.`,
  },
  {
    id: "7",
    name: "CalendarConverter",
    title: "Meitei Calendar Converter",
    icon: calendar,
    navigation: "/calendarConversion",
    description: `Convert dates from the Meitei lunar calendar into the 
                  Gregorian calendar. This tool is invaluable for planning 
                  cultural events, religious observances, and aligning with 
                  modern schedules.`,
  },
];
const Tools = () => {
  return (
    <Flex gap={5} justifyContent={"center"} wrap={"wrap"}>
      {TOOLS_LIST.map((toolItem) => {
        return (
          <ToolCard
            key={toolItem.id}
            title={toolItem.title}
            description={toolItem.description}
            icon={toolItem.icon}
            navigation={toolItem.navigation}
          />
        );
      })}
    </Flex>
  );
};

export default Tools;
