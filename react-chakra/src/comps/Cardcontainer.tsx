import { Grid } from "@chakra-ui/react"
import Card from "./Card"

const Cardcontainer = () => {
  return (
    <Grid templateColumns={{sm:"1fr", md:"repeat(3,1fr)"}} gap={2} m="1rem">
        <Card title="Monopoly" des="Monopoly is a board game where players buy and sell properties 
                to become the wealthiest player. It's a classic game that's 
                been around for over 100 years." imgsrc="https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
        <Card title="Risk" des="Risk is a strategy board game where players try to conquer the world by attacking and capturing their opponents' territories. It is a classic game that has been around for over 50 years." imgsrc="https://images.unsplash.com/photo-1606503153255-59d8b8b82176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
        <Card title="Chess" des="Chess is a strategy board game where two players try to checkmate each other's king. It's a classic game that's been around for over 1500 years." imgsrc="https://images.unsplash.com/photo-1560174038-da43ac74f01b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1457&q=80"/>
    </Grid>
  )
}

export default Cardcontainer