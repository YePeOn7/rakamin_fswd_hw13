import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

export default function TabNav() {
    const navigate = useNavigate()

    function handleClick(path) {
        navigate(path)
    }

    return (
        <Tabs variant='solid-rounded' colorScheme='yellow'>
            <TabList>
                <Tab onClick={() => { handleClick("/") }}>Dashboard</Tab>
                <Tab onClick={() => { handleClick("/create") }}>Add Book</Tab>
            </TabList>
        </Tabs>
    )
}