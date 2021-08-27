import React from 'react'
import klevv1 from '../images/klevv1.jpeg'
import klevv2 from '../images/klevv2.jpeg'
import klevv3 from '../images/klevv3.jpeg'
import klevv4 from '../images/klevv4.jpeg'
import {useState} from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import './ServicesSection.css'
import Slider from 'react-slick'

const images = [klevv1, klevv2, klevv3, klevv4]
function ServicesSection() {
    const NextArrow = ({onClick}) => {
        return (
          <div className = 'arrow next' onClick = {onClick}> 
          <FaArrowRight/>
          </div>
        )
      }

      const PrevArrow = ({onClick}) => {
        return (
          <div className = 'arrow prev' onClick = {onClick}> 
          <FaArrowLeft/>
          </div>
        )
      }
    
      const [imageIndex, setImageIndex] = useState(0)

      const settings = {
        autoplay:true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 300, 
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (crruent, next) => setImageIndex(next)
      };

    return (
        <div className='services-container'>
         <div className = 'App'>
          <Slider {...settings}>
            {images.map((img, idx) => (
             <div className = {idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt = {img}/>
            </div>
           ))}
         </Slider> 
       </div>
      </div>
    )
}

export default ServicesSection
