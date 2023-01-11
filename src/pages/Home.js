import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './Home.scss'

function Home() { 
  // ======= 상단 슬라이드 =======
  const [playSwiper, setPlaySwiper] = useState(null);
  const [sw, setSw] = useState(0);
  const [active, setActive] = useState(false);
  
  const onClick = () => {
    if(sw === 0) {
      playSwiper.autoplay.stop();
      setSw(1);
    } else {
      playSwiper.autoplay.start();
      setSw(0);
    }
  }

  
  // ======= 콘텐츠 영역 슬라이드 =======
  const [swRef, setSwRef] = useState(null);



  // ======= JSON 데이터 요청 =======
  const [post, setPost] = useState([]);
  const [recomm, setRecomm] = useState([]);


  const path = process.env.PUBLIC_URL;
  useEffect(() => {
    axios.get(`${path}/data.json`)
    .then(res => {
      console.log('통신결과: ', res.data.recomm_1);
      setPost(res.data.poster);
      setRecomm(res.data.recomm_1);
    })
    .catch(err => {
      console.error('통신 에러');
    });
  }, []);

  
  return (
    <div className="Home">
      <section className="main_head_wrap">
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
          {
            post.map((data, index) => {
              return (
                <SwiperSlide className="slide_style" key={data.title}>
                  <img src={data.img} alt={data.title} />
                  <div className="article_cnt"><p>{data.content}</p></div>
                  <div className="article_btn"><span>자세히보기</span></div>
                </SwiperSlide>
              );
            })
          }
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
      </section> {/* main_head_wrap */}

      <section className="content_wrap">
        {/* ======================== 반복되는 영역 ======================== */}
        <section className="recomm_list">
          <div className="tt_flex"><h2>티빙에서 꼭 봐야하는 콘텐츠</h2></div>
          
          <div className="lists_wrap">
            <Swiper
              className="recomm_swiper"
              onSwiper={setSwRef}
              modules={[Navigation, Pagination]}
              slidesPerView={7}
              slidesPerGroup={8}
              spaceBetween={10}
              navigation={true}
              speed={800}
            >
              {
                recomm.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_tag">
                          <div className="tag_left"></div>
                          <div className="tag_right"></div>
                          <div className="down">
                            <div className="origin"></div>
                          </div>
                        </div>

                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>
                      </div>

                      <div className="info_item">
                        <p className="info_item_title">{data.title}</p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))
              }
            </Swiper> {/* recomm_swiper */}
          </div> {/* lists_wrap */}
        </section> {/* recomm_list */}
        {/* ======================== 반복 end ======================== */}

        {/* ======================== 반복되는 영역 ======================== */}
        <section className="recomm_list">
          <div className="tt_flex"><h2>티빙에서 꼭 봐야하는 콘텐츠</h2></div>
          
          <div className="lists_wrap">
            <Swiper
              className="recomm_swiper"
              onSwiper={setSwRef}
              modules={[Navigation, Pagination]}
              slidesPerView={7}
              slidesPerGroup={8}
              spaceBetween={10}
              navigation={true}
              speed={800}
            >
              {
                recomm.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_tag">
                          <div className="tag_left"></div>
                          <div className="tag_right"></div>
                          <div className="down">
                            <div className="origin"></div>
                          </div>
                        </div>

                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>
                      </div>

                      <div className="info_item">
                        <p className="info_item_title">{data.title}</p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))
              }
            </Swiper> {/* recomm_swiper */}
          </div> {/* lists_wrap */}
        </section> {/* recomm_list */}
        {/* ======================== 반복 end ======================== */}

      </section> {/* content_wrap */}
    </div>
  )
}

export default Home;