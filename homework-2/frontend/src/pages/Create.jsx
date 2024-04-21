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
import * as axiosModule from "../modules/axios"

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CMdAlternateEmail = chakra(MdAlternateEmail)
const CFaBookOpen = chakra(FaBookOpen)
const CFaPenFancy = chakra(FaPenFancy)
const CBsCalendar2Date = chakra(BsCalendar2Date)
const CGiBookPile = chakra(GiBookPile)


export default function Create() {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState(null);

    const handleShowClick = () => setShowPassword(!showPassword);
    
    function handleFileChange(e){
        console.log(e.target.files[0]);
        setFile(e.target.files[0])
    }

    async function handleSubmit(e){
        e.preventDefault();

        if(!file){
            window.alert("please select file");
        }

        console.log(e.target.title.value)
        const formData = new FormData();
        formData.append('title', e.target.title.value);
        formData.append('author', e.target.author.value);
        formData.append('publisher', e.target.publisher.value);
        formData.append('year', e.target.year.value);
        formData.append('pages', e.target.pages.value);
        formData.append('image', e.target.file.files[0]);
        const res = await axiosModule.createBook(formData);

        // console.log(res);
    }
    
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
                    <form onSubmit={handleSubmit}>
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
                                    <Input type="text" placeholder="Title" name="title"/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaPenFancy color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Author" name="author"/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaPenFancy color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Publisher" name="publisher"/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CBsCalendar2Date color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Year" name="year"/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CGiBookPile color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Page" name="pages"/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CGiBookPile color="gray.300" />}
                                    />
                                    <Input type="file" placeholder="Page" onChange={handleFileChange} name="file"/>
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