import React from "react"
import HeroSection from "./landing"
import Card from "./card"
import Information from "./info"
import TicketBanner from "./ticket"
import Testimonials from "./testimonials"
import Footer from "./footer"
import Banner from "./banner"
import Header from "./header"

function App() {
  return(
<>
<Header/>
<HeroSection/>
<Banner/>
<Card/>
<Information/>
<TicketBanner/>
<Testimonials/>
<Footer/>
</>
  )
}

export default App
