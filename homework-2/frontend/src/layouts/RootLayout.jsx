import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container, Grid, GridItem } from "@chakra-ui/react";

export default function RoootLayout(){
    return(
       <Container minWidth="100wh" maxW="100wh" p="0px">
            <Navbar/>
            <Outlet/>
       </Container>

            
                
    )
}