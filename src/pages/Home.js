import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './Home.scss'

function Home() {
  const [active, setActive] = useState(false);
  const [playSwiper, setPlaySwiper] = useState(null);
  const [sw, setSw] = useState(0);

  const onClick = () => {
    if(sw === 0) {
      playSwiper.autoplay.stop();
      setSw(1);
    } else {
      playSwiper.autoplay.start();
      setSw(0);
    }
  }
  
  return (
    <div className="Home">
      <div className="main_head_swiper">
        <Swiper 
          className="swiper_style"
          onSwiper={setPlaySwiper}
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          effect={"fade"}
          speed={800}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {/* 💡 틀 맞출려고 일단 해둠 -> 추후 JSON 데이터 따로 넣고 map으로 돌리기 */}
          <SwiperSlide className="slide_style">
            <img src="https://image.tving.com/upload/fe/highlight/2022/1208/20221208080332banner_image_url_u.jpg/dims/resize/F_webp,1920" alt="최강야구" />
            <div className="article_cnt"><p>야구 강팀이 펼치는 양보 없는 대결!</p></div>
            <div className="article_btn"><span>자세히보기</span></div>
          </SwiperSlide>
          <SwiperSlide className="slide_style">
            <img src="https://image.tving.com/upload/fe/highlight/2022/1220/20221220112154banner_image_url_u.jpg/dims/resize/F_webp,1920" alt="미씽" />
            <div className="article_cnt"><p>'영혼 보는 콤비' 의 판타지 추적극</p></div>
            <div className="article_btn"><span>자세히보기</span></div>
          </SwiperSlide>
          <SwiperSlide className="slide_style">
            <img src="https://image.tving.com/upload/fe/highlight/2023/0107/20230107214858banner_image_url_u.jpg/dims/resize/F_webp,1920" alt="대행사"/>
            <div className="article_cnt"><p>우아하게 처절한 광고대행사 오피스 드라마</p></div>
            <div className="article_btn"><span>자세히보기</span></div>
          </SwiperSlide>
          
          <div className="btn">
            <span 
              className={active ? 'btn_play' : 'btn_pause'} 
              onClick={() => {
                onClick();
                setActive(!active);
              }}
            ></span>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Home;