import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Navbar from "./comps/Navbar.tsx"
import Slider from "./comps/Slider.tsx"
import Footerbar from "./comps/Footerbar.tsx"
import Cardcontainer from "./comps/Cardcontainer.tsx"
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

function App() {
  const theme = extendTheme({colors})

  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Slider/>
      {/* Cards */}
      <Cardcontainer/>
      <Footerbar/>
    </ChakraProvider>
  )
}

export default App
