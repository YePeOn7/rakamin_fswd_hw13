import {Box, Container, Heading, SimpleGrid, Text} from "@chakra-ui/react"
import { useState } from "react"

export default function Dashboard(){
    return(
        <SimpleGrid p="10px" spacing={10} minChildWidth={250}>
            <Box bg="white" height="200px" border="1px solid">
                <Text>Hello</Text>
            </Box>
            <Box bg="white" height="200px" border="1px solid"></Box>
            <Box bg="white" height="200px" border="1px solid"></Box>
            <Box bg="white" height="200px" border="1px solid"></Box>

            <Box bg="white" height="200px" border="1px solid"></Box>
            <Box bg="white" height="200px" border="1px solid"></Box>
            <Box bg="white" height="200px" border="1px solid"></Box>
            <Box bg="white" height="200px" border="1px solid"></Box>

            <Box bg="white" height="200px" border="1px solid"></Box>
            <Box bg="white" height="200px" border="1px solid"></Box>
            <Box bg="white" height="200px" border="1px solid"></Box>
            <Box bg="white" height="200px" border="1px solid"></Box>
        </SimpleGrid>
    )
}