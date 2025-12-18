"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Section1() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/*================= Banner section start =================*/}
      <Swiper {...swiperOptions} id="banner-slid1e" className="swiper owl-carousel owl-theme position-relative">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            {/* single slider */}
            <div className="vl-banner-area" data-background="./assets/img/banner/banner_boka.jpg">
              <div className="shape shape-1">
                <img src="assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 fix">
                    <div className="vl-banner-area-content fix p-relative">
                      <h5 className="subtitle">Tu sonrisa, nuestra prioridad</h5>
                      <h1 className="title text-anime-style-3 pt-16 pb-16">Crea una sonrisa hermosa con un toque personalizado</h1>
                      <p className="para pb-32">
                      En Boka nuestro equipo de especialistas está comprometido con ofrecer atención dental personalizada, de alta calidad y en un entorno cómodo y confiable.
                      </p>
                      {/* btn */}
                      <div className="vl-hero-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                        <Link href="/contact" className="vl-btn-primary">
                          Agenda tu cita!                                                                              
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-relative">
                    <div className="video-shape">
                      <img src="assets/img/banner/clinic-boka.jpg" alt="" />
                      <div className="play-button-container">
                        <div className="play-button" onClick={() => setOpen(true)}>
                          <div className="play-icon popup-video">
                            <i className="fa-duotone fa-solid fa-play" />
                          </div>
                          {/* Play icon */}
                        </div>
                        <div className="wave wave-1" />
                        <div className="wave wave-2" />
                        <div className="wave wave-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            {/* single slider */}
            <div className="vl-banner-area" data-background="./assets/img/banner/banner_boka.jpg">
              <div className="shape shape-1">
                <img src="assets/img/shape/vl-hero-shape-1.1.svg" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 fix">
                    <div className="vl-banner-area-content fix p-relative">
                      <h5 className="subtitle">Excelencia en odontología </h5>
                      <h1 className="title text-anime-style-3 pt-16 pb-16">Tecnología avanzada y especialistas certificados</h1>
                      <p className="para pb-32">
                      La tranquilidad de nuestros pacientes es importante; contamos con un grupo de especialistas y tecnología logrando resultados estéticos y funcionales.
                      </p>
                      {/* btn */}
                      <div className="vl-hero-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                        <Link href="/contact" className="vl-btn-primary">
                          Agenda tu cita!
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-relative">
                    <div className="video-shape">
                      <img src="assets/img/banner/clinic-boka.jpg" alt="" />
                      <div className="play-button-container">
                        <div className="play-button" onClick={() => setOpen(true)}>
                          <div className="play-icon popup-video">
                            <i className="fa-duotone fa-solid fa-play" />
                          </div>
                          {/* Play icon */}
                        </div>
                        <div className="wave wave-1" />
                        <div className="wave wave-2" />
                        <div className="wave wave-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
      {/*================= Banner section End =================*/}
      <ModalVideo channel="youtube" isOpen={isOpen} videoId="yD3ZjVg0RWk" onClose={() => setOpen(false)} />
    </>
  );
}
