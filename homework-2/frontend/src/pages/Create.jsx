import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt, FaLock, FaBookOpen, FaPenFancy } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { GiBookPile } from "react-icons/gi"; 

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CMdAlternateEmail = chakra(MdAlternateEmail)
const CFaBookOpen = chakra(FaBookOpen)
const CFaPenFancy = chakra(FaPenFancy)
const CBsCalendar2Date = chakra(BsCalendar2Date)
const CGiBookPile = chakra(GiBookPile)


export default function Create() {

    const handleShowClick = () => setShowPassword(!showPassword);
    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.100"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="yellow.500" />
                <Heading>Create a New Book</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                            borderRadius="10px"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaBookOpen color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Title" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaPenFancy color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Author" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CBsCalendar2Date color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Year" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CGiBookPile color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Page" />
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius="7px"
                                type="submit"
                                variant="solid"
                                colorScheme="yellow"
                                width="full"
                            >
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    )

}