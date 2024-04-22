import { SimpleGrid, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";



export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <Container minWidth="100wh" maxW="100wh" p="0px">
      <SimpleGrid p="10px" spacing={10} minChildWidth={200}>
        {books?.books?.map((book) => (
          <Books key={`${book.id} ${book.title}`} {...book} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
