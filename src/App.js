import React from 'react'
import NavBar from './Navbar'
import MasterHead from './MasterHead'
import PortfolioSection from './PortfolioSection'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'


const App = () => {
    return(
        <div>
        <NavBar/>
        <MasterHead/>
        <PortfolioSection/>
        <About/>
        <Contact/>
        <Footer/>
        </div>
    );
}

export default App;