import CardItem from "./CardItem.jsx";
import React from "react";
import Img1 from '../assets/image.svg'
import {itemsData} from '../js/data.js'

function Proyects(){

    return (
   <>
      {itemsData.map((item)=>(
          <CardItem itemData={item} />
      ))}
   </>

    )
}
export default Proyects