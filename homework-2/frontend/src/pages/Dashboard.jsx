import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import * as axiosModule from "../modules/axios"
import Books from "../components/Books"

export default function Dashboard() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        async function fetchBook() {
            const res = await axiosModule.getAllBooks();
            console.log(res.books);
            setBooks(res.books);
        }

        fetchBook();
    }, []);
    return (
        <SimpleGrid p="10px" spacing={10} minChildWidth={250}>
            {
                books.map((item) => (
                    <Books key={item.id} {...item} />
                ))
            }
        </SimpleGrid>
    )
}