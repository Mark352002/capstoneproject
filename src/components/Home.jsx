import React from 'react'
import Item from './Item'
import Carousel from './Carousel'
import Adds from './Adds'
import Blogs from './Blogs'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <>
    <div>Home</div>
    <Carousel/>
    <Item/>
    <Adds/>
    <Blogs/>
    {/* <Footer/> */}
    </>
  )
}

export default Home