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
  const [popular, setPopular] = useState([]);
  const [paramount, setParamount] = useState([]);
  const [monopoly, setMonopoly] = useState([]);
  const [reversal, setReversal] = useState([]);
  const [crime, setCrime] = useState([]);
  const [coming, setComing] = useState([]);


  const path = process.env.PUBLIC_URL;
  useEffect(() => {
    axios.get(`https://SeonahNoh.github.io/data/data.json`)
    .then(res => {
      setPost(res.data.poster);
      setRecomm(res.data.recomm);
      setPopular(res.data.popular);
      setParamount(res.data.paramount);
      setMonopoly(res.data.monopoly);
      setReversal(res.data.reversal);
      setCrime(res.data.crime);
      setComing(res.data.coming);
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
              speed={700}
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
          <div className="tt_flex"><h2>실시간 인기 프로그램</h2></div>
          
          <div className="lists_wrap">
            <Swiper
              className="recomm_swiper"
              onSwiper={setSwRef}
              modules={[Navigation, Pagination]}
              slidesPerView={7}
              slidesPerGroup={8}
              spaceBetween={10}
              navigation={true}
              speed={700}
            >
              {
                popular.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>
                      </div>

                      <div className="info_item item_info_rank">
                        <span className="item_rank_no">{data.rank}</span>
                        <p className="info_item_title">
                          {
                            data.title.length > 11 ? `${data.title.substring(0, 11)}···` : data.title
                          }  
                        </p>
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
          <div className="tt_flex"><h2>파라마운트+의 따끈한 신작</h2></div>
          
          <div className="lists_wrap">
            <Swiper
              className="recomm_swiper"
              onSwiper={setSwRef}
              modules={[Navigation, Pagination]}
              slidesPerView={7}
              slidesPerGroup={8}
              spaceBetween={10}
              navigation={true}
              speed={700}
            >
              {
                paramount.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
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
          <div className="tt_flex"><h2>오직 티빙에만 있어요</h2></div>
          
          <div className="lists_wrap">
            <Swiper
              className="recomm_swiper"
              onSwiper={setSwRef}
              modules={[Navigation, Pagination]}
              slidesPerView={6}
              slidesPerGroup={6}
              spaceBetween={11}
              navigation={true}
              speed={700}
            >
              {
                monopoly.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide monopoly_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>
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
          <div className="tt_flex"><h2>&lt;몸값&gt; 같은 반전이 거듭되는 이야기</h2></div>
          
          <div className="lists_wrap">
            <Swiper
              className="recomm_swiper"
              onSwiper={setSwRef}
              modules={[Navigation, Pagination]}
              slidesPerView={7}
              slidesPerGroup={8}
              spaceBetween={10}
              navigation={true}
              speed={700}
            >
              {
                reversal.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>
                      </div>

                      <div className="info_item">
                        <p className="info_item_title">
                          {
                            data.title.length > 11 ? `${data.title.substring(0, 11)}···` : data.title
                          }  
                        </p>
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
          <div className="tt_flex"><h2>모든 범죄는 증거를 남긴다</h2></div>
          
          <div className="lists_wrap">
            <Swiper
              className="recomm_swiper"
              onSwiper={setSwRef}
              modules={[Navigation, Pagination]}
              slidesPerView={7}
              slidesPerGroup={8}
              spaceBetween={10}
              navigation={true}
              speed={700}
            >
              {
                crime.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>
                      </div>

                      <div className="info_item">
                        <p className="info_item_title">
                          {
                            data.title.length > 16 ? `${data.title.substring(0, 16)}···` : data.title
                          }  
                        </p>
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
          <div className="tt_flex"><h2>TIVING SOON</h2></div>
          
          <div className="lists_wrap">
            <Swiper
              className="recomm_swiper"
              onSwiper={setSwRef}
              modules={[Navigation, Pagination]}
              slidesPerView={7}
              slidesPerGroup={8}
              spaceBetween={10}
              navigation={true}
              speed={700}
            >
              {
                coming.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>
                      </div>

                      <div className="info_item">
                        <p className="info_item_title">
                          {
                            data.title.length > 16 ? `${data.title.substring(0, 16)}···` : data.title
                          }  
                        </p>
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