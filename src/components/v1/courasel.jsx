import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomDot from "../../components/v1/courasel/courasel_dots"
import styles from "../../styles/themes/logos.module.css"

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };



  function  Courasel() {
    return (
      <div className='container mt-5 p-5'>
      <div className={styles.company_logos}>
        <div>
          <h5 className='text-center'> Trusted by the worlds greatest platforms.
        </h5>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          arrows={false}
          customDot={<CustomDot />}
        >
          <div className="px-4  m-4">
            <img src='../src/assets/images/logos/paypal.png'></img>
          </div>
          <div className=" px-4  m-4">
          <img src='../src/assets/images/logos/spoty.png'></img>
          </div>
          <div className=" px-4  m-4">
          <img src='../src/assets/images/logos/slack.png'></img>
          </div>
          <div className="px-4 m-4">
          <img src='../src/assets/images/logos/shopboat.png'></img>
          </div>
         
          {/* Add more images as needed */}
        </Carousel>
      </div>
      </div>
    );
  }
  
  export default Courasel;