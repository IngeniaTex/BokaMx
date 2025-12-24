"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
import Link from "next/link";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
};

export default function Section3() {
  return (
    <>
      {/*================= Service section start =================*/}
      <SwiperPadding />

      <section id="service" className="vl-service-bg-1 fix pt-100 pb-100">
          <div className="container swipper-root">
            <div className="row">
              <div className="col-lg-5">
                <div className="vl-service-section-title">
                  <div className="vl-section-title mb-60">
                    <h5
                      className="subtitle"
                      data-aos="fade-up"
                      data-aos-duration={800}
                      data-aos-delay={300}
                    >
                      Tratamientos
                    </h5>
                    <h2 className="title pt-16 text-anime-style-3">
                      Cuidamos tu sonrisa con atención integral
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row" id="service-slide-1">
            <div className="box-swiper-padding">
              <Swiper
                {...swiperOptions}
                className="owl-carousel owl-theme"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={300}
              >
                {/* single slider box */}
                <SwiperSlide
                  className="vl-single-service-box"
                  data-background="./assets/img/service/vl-service-thumb1.1.png"
                >
                  <div className="vl-service-icon-box">
                    <div className="content">
                      <h4 className="title pt-24">
                        <Link href="/service-single">Odontología</Link>
                      </h4>
                      <p className="para pt-16 pb-24">
                        Recupera la función y estética de tus dientes con resinas,
                        coronas o incrustaciones de alta calidad. En Boka, devolvemos la
                        salud a tu sonrisa.
                      </p>
                      <Link href="/service-single" className="learnmore">
                        Más información
                        <span className="right-arow">
                          <i className="fa-regular fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                {/* single slider box */}
                <SwiperSlide
                  className="vl-single-service-box"
                  data-background="./assets/img/service/vl-service-thumb1.2.png"
                >
                  <div className="vl-service-icon-box">
                    <div className="content">
                      <h4 className="title pt-24">
                        <Link href="/service-single">Limpieza y Periodoncia</Link>
                      </h4>
                      <p className="para pt-16 pb-24">
                        Cuidamos tus encías y eliminamos placa y sarro para prevenir
                        enfermedades periodontales. Tu salud bucal comienza con una
                        limpieza profesional.
                      </p>
                      <Link href="/service-single" className="learnmore">
                        Más información
                        <span className="right-arow">
                          <i className="fa-regular fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                {/* single slider box */}
                <SwiperSlide
                  className="vl-single-service-box"
                  data-background="./assets/img/service/vl-service-thumb1.3.png"
                >
                  <div className="vl-service-icon-box">
                    <div className="content">
                      <h4 className="title pt-24">
                        <Link href="/service-single">Odontopediatría</Link>
                      </h4>
                      <p className="para pt-16 pb-24">
                        Atención dental divertida y sin miedo para los más pequeños.
                        Enseñamos buenos hábitos y cuidamos su sonrisa desde temprana
                        edad.
                      </p>
                      <Link href="/service-single" className="learnmore">
                        Más información
                        <span className="right-arow">
                          <i className="fa-regular fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                {/* single slider box */}
                <SwiperSlide
                  className="vl-single-service-box"
                  data-background="./assets/img/service/vl-service-thumb1.1.png"
                >
                  <div className="vl-service-icon-box">
                    <div className="content">
                      <h4 className="title pt-24">
                        <Link href="/service-single">Estética Dental</Link>
                      </h4>
                      <p className="para pt-16 pb-24">
                        Blanqueamientos, carillas y diseño de sonrisa personalizados.
                        En Boka Chilpancingo te ayudamos a lucir una sonrisa más blanca
                        y segura.
                      </p>
                      <Link href="/service-single" className="learnmore">
                        Más información
                        <span className="right-arow">
                          <i className="fa-regular fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="owl-nav">
                <button className="owl-prev">
                  <i className="fa-solid fa-arrow-left" />
                </button>
                <button className="owl-next">
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </section>

      {/*================= Service section End =================*/}
    </>
  );
}
