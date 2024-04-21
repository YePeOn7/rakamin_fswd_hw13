import { Box, Button, Flex, HStack, Heading, Spacer, Text, Avatar } from "@chakra-ui/react";
import TabNav from "./TabNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const [ isLogedIn, setIsLogedIn ]= useState(false)
	const navigate = useNavigate()

	useEffect(()=>{
		if(localStorage.getItem("token")) setIsLogedIn(true);
		else setIsLogedIn(false);
	}, [])

	function onLoginClicked(){
		navigate("/login");
	}

	function onLogoutClicked(){
		window.alert("Logout Cuy");
	}

	return (
		<Flex as="nav" p="30px" alignItems="center" bg="yellow">
			<Heading as="h1" pr="20px">My Books Site</Heading>
			{isLogedIn && <TabNav />}
			
			<Spacer />
			<HStack spacing="20px">
				{
					isLogedIn && 
					<>
						<Avatar bg="yellow.500" />
						<Text>yohan@gmail.com</Text>
					</>
				}
				<Button colorScheme="yellow" onClick={isLogedIn?onLogoutClicked:onLoginClicked}>{isLogedIn? "Logout" : "Login"}</Button>
			</HStack>
		</Flex>
	)
}