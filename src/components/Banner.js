import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Banner() {
    return (
        <div className="relative" >

            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>

            {/* Just for Commit */}

            <Carousel
                 autoPlay
                 infiniteLoop
                 showThumbs={false}
                 showIndicators={false}
                 showStatus={false}
                 interval={5000}
            >

            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/JUNE/PC/2._CB667373073_.jpg" alt="" />
            </div>

            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg" alt="" />
            </div>

            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" alt="" />
            </div>

            </Carousel>
            
          

           

            <Carousel/>

        </div>
    )
}

export default Banner
