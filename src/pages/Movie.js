import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './Movie.scss'


function Movie() {
  
  // ======= 콘텐츠 영역 슬라이드 =======
  const [swRef, setSwRef] = useState(null);


  // ======= JSON 데이터 요청 =======
  const [live, setLive] = useState([]);
  const [anime, setAnime] = useState([]);
  const [history, setHistory] = useState([]);
  const path = process.env.PUBLIC_URL;

  useEffect(() => {
    axios.get(`https://SeonahNoh.github.io/data/movie.json`)
    .then(res => {
      setLive(res.data.live);
      setAnime(res.data.anime);
      setHistory(res.data.history);
    })
    .catch(err => {
      console.error('통신 에러');
    });
  }, []);
  

  return (
    <div className="Movie">
      <section className="content_wrap">
        <section className="recomm_list">
          <div className="tt_flex"><h2>장르</h2></div>   
          <div className="lists_wrap">
            <Swiper
              className="recomm_swiper"
              onSwiper={setSwRef}
              modules={[Navigation, Pagination]}
              slidesPerView={'auto'}
              spaceBetween={10}
              navigation={true}
              speed={300}
            >
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>드라마</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>로맨스</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>코미디</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>애니메이션</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>스릴러</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>미스터리</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>모험</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>액션</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>판타지</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>SF</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>공포</span></a>
              </SwiperSlide>
              <SwiperSlide className="recomm_slide auto_width">
                <a href="#!" className="genre_item"><span>다큐멘터리</span></a>
              </SwiperSlide>
            </Swiper> {/* recomm_swiper */}
          </div> {/* lists_wrap */}
        </section> {/* recomm_list */}

        {/* ======================== 반복되는 영역 ======================== */}
        <section className="recomm_list">
          <div className="tt_flex"><h2>실시간 인기 영화</h2></div>
          
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
                live.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide trans_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>

                        <div className="summary_item">
                          <dl>
                            <dt>{data.title}</dt>
                            <dd>
                              <span>{data.genre}</span>
                              <p>
                                {
                                  data.des_contetn.length > 86? `${data.des_contetn.substring(0, 86)}···` : data.des_contetn
                                }
                              </p>
                            </dd>
                          </dl>
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
          <div className="tt_flex"><h2>당신이 좋아할 애니메이션 영화</h2></div>
          
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
                anime.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide trans_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>

                        <div className="summary_item">
                          <dl>
                            <dt>{data.title}</dt>
                            <dd>
                              <span>{data.genre}</span>
                              <p>
                                {
                                  data.des_contetn.length > 86? `${data.des_contetn.substring(0, 86)}···` : data.des_contetn
                                }
                              </p>
                            </dd>
                          </dl>
                        </div>
                      </div> {/* rcmm_item */}

                      <div className="info_item item_info_rank">
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
          <div className="tt_flex"><h2>당신이 좋아할 한국 사극 영화</h2></div>
          
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
                history.map((data, index) => (
                  <SwiperSlide 
                    key={data.title} 
                    virtualIndex={index} 
                    className="recomm_slide trans_slide"
                  >
                    <a href="#!">
                      <div className="rcmm_item">
                        <div className="item_img">
                          <img src={data.img} alt={data.title} />
                        </div>

                        <div className="summary_item">
                          <dl>
                            <dt>{data.title}</dt>
                            <dd>
                              <span>{data.genre}</span>
                              <p>
                                {
                                  data.des_contetn.length > 86? `${data.des_contetn.substring(0, 86)}···` : data.des_contetn
                                }
                              </p>
                            </dd>
                          </dl>
                        </div>
                      </div>

                      <div className="info_item item_info_rank">
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
      </section>
    </div>
  )
}

export default Movie;