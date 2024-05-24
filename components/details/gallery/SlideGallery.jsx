import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function SlideGallery({ slides,videos }) {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
    <section className="slider">
      <div className="carsSlider mt-40">
        <div className="carsSlider-slides js-cars-slides">
          <div className="slider__thumbs">
            <Swiper
              onSwiper={setImagesNavSlider}
              direction="vertical"
              spaceBetween={10}
              slidesPerView={4}
              className="swiper-container1"
              breakpoints={{
                0: {
                  direction: "horizontal",
                },
                768: {
                  direction: "vertical",
                },
              }}
              modules={[Navigation, Thumbs]}
            >
              {slides?.map((item, id) => (
                <SwiperSlide key={id}>
                  <div className="slider__image">
                    <img src={item.original} alt="" />
                  </div>
                </SwiperSlide>
              ))}
              {videos && videos.length !==0 ? <SwiperSlide>
                <div className="slider__image">
                  <img src={slides ? slides[0]?.original : null} alt="" />
                </div>
              </SwiperSlide>
            :null  
            }
            </Swiper>
          </div>
        </div>

        <div className="carsSlider-slider">
          <Swiper
            thumbs={{ swiper: imagesNavSlider }}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
              0: {
                direction: "horizontal",
              },
              768: {
                direction: "horizontal",
              },
            }}
            className="swiper-container2"
            modules={[Navigation, Thumbs, Mousewheel]}
          >
            {slides?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="slider__image">
                    <img src={item.original} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}

            
            {videos && videos.length !==0 ? <SwiperSlide>
              <div className="slider__image w-100 h-100">
                <ReactPlayer
                  url={videos[0].url}
                  height="100%"
                  width="100%"
                />
              </div>
            </SwiperSlide>
            : null
            }
        
          </Swiper>
        </div>
      </div>
    </section>
  );
}
