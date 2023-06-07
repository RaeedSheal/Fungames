import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Navbar from "./comps/Navbar.tsx"
import Footerbar from "./comps/Footerbar.tsx"
import Bgdetailscta from "./comps/Bgdetailscta.tsx"

const colors={
  brand:'#8AAA94',
  
  brand500: '#45554a'
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

function Login() {
  const theme = extendTheme({colors})

  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Bgdetailscta/>
      <Footerbar/>
    </ChakraProvider>
  )
}

export default Login
