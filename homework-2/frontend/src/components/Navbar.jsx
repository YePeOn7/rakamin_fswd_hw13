import { Box, Button, Flex, HStack, Heading, Spacer, Text, Avatar } from "@chakra-ui/react";
import TabNav from "./TabNav";

export default function Navbar(){
    return(
      <Flex as="nav" p="30px" alignItems="center" bg="yellow">
        <Heading as="h1" pr="20px">My Books Site</Heading>
        <TabNav/>
        <Spacer/>
        <HStack spacing="20px">
          <Avatar bg="yellow.500" />
          <Text>yohan@gmail.com</Text>
          <Button colorScheme="yellow">Logout</Button>
        </HStack>
      </Flex>
    )
}