import React from 'react'
import NavBar from '../layouts/NavBar'
import Banner from '../layouts/Banner'
import Menus from '../layouts/Menus'
import Content from '../layouts/Content'
import Delivery from '../layouts/Delivery'
import Services from '../layouts/Services'
import Review from '../layouts/Review'
import Articles from '../layouts/Articles'
import Footer from '../layouts/Footer'


const Home = () => {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Menus/>
    <Content/>
    <Services/>
    <Delivery/>
    <Review/>
    <Articles/>
    <Footer/>
    </>
  )
}

export default Home