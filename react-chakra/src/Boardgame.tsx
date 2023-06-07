import { ChakraProvider, Grid, extendTheme } from "@chakra-ui/react"
import Navbar from "./comps/Navbar.tsx"
import Footerbar from "./comps/Footerbar.tsx"
import Widecard from "./comps/Widecard.tsx"
// import './App.css'
const colors={
  brand:'#8AAA94'
  
  ,
  brandlight:{
    500: '#E8EFEA'
  },
  branddark:{
    500: '#363F4D'
  },
  brandColors:{
    100:'#79AE22',
    900:'#5F921F'
  },
  gray:{
    50: '#ffffff',
    100: '#d7d9db',
    200: '#afb2b8',
    300: '#868c94',
    400: '#5e6571',
    500: '#363f4d',
    600: '#2b323e',
    700: '#20262e',
    800: '#16191f',
    900: '#0b0d0f',
  }
}

function Boardgame() {
  const theme = extendTheme({colors})

  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      {/* Cards */}
      <Grid gap={4} m={5}>
        <Widecard title="Monopoly" des="Monopoly is a board game where players buy and sell properties 
                to become the wealthiest player. It's a classic game that's 
                been around for over 100 years." imgsrc="https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
        <Widecard title="Risk" des="Risk is a strategy board game where players try to conquer the world by attacking and capturing their opponents' territories. It is a classic game that has been around for over 50 years." imgsrc="https://images.unsplash.com/photo-1606503153255-59d8b8b82176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
        <Widecard title="Chess" des="Chess is a strategy board game where two players try to checkmate each other's king. It's a classic game that's been around for over 1500 years." imgsrc="https://images.unsplash.com/photo-1560174038-da43ac74f01b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1457&q=80"/>
      </Grid>
      <Footerbar/>
    </ChakraProvider>
  )
}

export default Boardgame
