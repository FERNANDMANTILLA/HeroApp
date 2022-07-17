


import { useLayoutEffect } from "react"
import { responsiveScript } from "./common/ReponsiveScript"
import Routes from "./router/Routes"
import { Navbar } from "./ui/components/NavBar"



const HeroApp = () => {

  useLayoutEffect(() => {
    
    responsiveScript();

  }, [])

  window.addEventListener('resize', responsiveScript);

  return (
   <>
    <Routes/>
   </>
  )
}

export default HeroApp
