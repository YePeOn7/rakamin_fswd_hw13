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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as axiosModule from "../modules/axios"

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

export default function EditBookPage() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publisher: '',
        year: '',
        pages: ''
    });

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axiosModule.getBookDetail(id);
                setBook(response.book);
                
                const {title, author, publisher, year, pages} = response.book;

                setFormData({
                    title: title || '',
                    author: author || '',
                    publisher: publisher || '',
                    year: year || '',
                    pages: pages || ''
                })
                // console.log(response.book);
            } catch (e) {
                console.log(e);
            }
        };
        fetchBook();
        
    }, [id]);

    function handleSubmit(e) {
        async function edit(e){
            e.preventDefault();
    
            const title = formData.title.value;
            const author = formData.author.value;
            const publisher = formData.publisher.value;
            const year = formData.year.value;
            const pages = formData.pages.value;
            const res = await axiosModule.editBook(id, title, author, publisher, year, pages)
            console.log(res);

            if(res){
                window.alert("Success");
            }
        }

        edit(e);

    }

    function handleInputChange(e) {
        const {name, value} = e.target
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value //name need to use [], so it will modify the object property of which inside the name instead of use "name" as literal string
        })
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
                {/* <Avatar bg="yellow.500" /> */}
                <Heading>Edit Book</Heading>
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
                                    <Input type="text" placeholder="Title" name="title" value={formData.title} onChange={handleInputChange}/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaPenFancy color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Author" name="author" value={formData.author} onChange={handleInputChange}/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaPenFancy color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Publisher" name="publisher" value={formData.publisher} onChange={handleInputChange}/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CBsCalendar2Date color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Year" name="year" value={formData.year} onChange={handleInputChange}/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CGiBookPile color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="Page" name="pages" value={formData.pages} onChange={handleInputChange}/>
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
    );
}
