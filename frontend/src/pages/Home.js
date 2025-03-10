import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"cabinets"} heading={"Top's Cabinets"}/>
      <HorizontalCardProduct category={"motherboard"} heading={"MotherBoard"}/>

      <VerticalCardProduct category={"processor"} heading={"Processor"}/>
      <VerticalCardProduct category={"Graphics Card"} heading={"Graphics Card"}/>
      <VerticalCardProduct category={"led"} heading={"LED"}/>
      <VerticalCardProduct category={"printers"} heading={"Printer"}/>
      <VerticalCardProduct category={"ram"} heading={"Ram"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"televisions"} heading={"Television"}/>
      <VerticalCardProduct category={"ssd"} heading={"SSD"}/>
    </div>
  )
}

export default Home