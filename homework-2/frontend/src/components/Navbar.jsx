import { Box, Button, Flex, HStack, Heading, Spacer, Text, Avatar } from "@chakra-ui/react";
import TabNav from "./TabNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenValid } from "../modules/tokenValidation";

export default function Navbar() {
	const [ isLogedIn, setIsLogedIn ]= useState(false)
	const [ email, setEmail ]= useState(null);
	const navigate = useNavigate()

	useEffect(()=>{
		if(isTokenValid()) setIsLogedIn(true);
		else setIsLogedIn(false);

		const email = localStorage.getItem("userEmail");
		setEmail(email);

	}, [])

	function onLoginClicked(){
		navigate("/login");
	}

	function onLogoutClicked(){
		console.log("here");
		localStorage.removeItem("token");
		localStorage.removeItem("userEmail");
		setIsLogedIn(false);
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
						<Text>{email}</Text>
					</>
				}
				<Button colorScheme="yellow" onClick={isLogedIn?onLogoutClicked:onLoginClicked}>{isLogedIn? "Logout" : "Login"}</Button>
			</HStack>
		</Flex>
	)
}