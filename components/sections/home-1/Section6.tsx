"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

export default function Section6() {
    return (
        <>
            {/*================= Testimonial section start =================*/}
            <section id="testimonial" className="vl-testimonial-area fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="vl-section-title text-center mb-60">
                        <h5
                            className="subtitle"
                            data-aos="fade-up"
                            data-aos-duration={800}
                            data-aos-delay={300}
                        >
                            Testimonios
                        </h5>
                        <h2 className="title pt-16 text-anime-style-3">
                            Descubre por qué nuestros pacientes confían en nosotros
                        </h2>
                        </div>
                    </div>
                    </div>
                    <div className="row position-relative">
                    <div className="col-lg-5 mb-30">
                        <div className="vl-testimonial-large-thumb reveal image-anime">
                        <img
                            className="w-100 br-8"
                            src="assets/img/testimonial/testimonial-boka-1.jpg"
                            alt="Paciente sonriente"
                        />
                        </div>
                    </div>
                    <div className="col-lg-7 mb-30" id="testimonal-active">
                        <Swiper
                        {...swiperOptions}
                        className="p-relative owl-carousel owl-theme"
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={300}
                        >
                        <div className="swiper-wrapper">
                            {/* Testimonio 1 */}
                            <SwiperSlide className="vl-testimonial-box">
                            <div className="vl-testimonial-icon">
                                <span>
                                <img
                                    src="assets/img/icons/vl-testimonial-quote3.1.svg"
                                    alt="Comillas"
                                />
                                </span>
                            </div>
                            <div className="vl-testimonial-content">
                                <p className="para">
                                “Mi experiencia en Boka fue excelente. El trato fue muy amable
                                y profesional, y me explicaron todo con detalle. ¡Ahora tengo
                                la sonrisa que siempre quise!”
                                </p>
                            </div>
                            <div className="vl-testimonal-auth-flex">
                                <div className="vl-auth-thumb">
                                <img
                                    src="assets/img/testimonial/vl-testimonal-sm-thumb-1.1.png"
                                    alt="Paciente Laura"
                                />
                                </div>
                                <div className="vl-auth-content">
                                <h4 className="title pb-16">
                                    <Link href="/testimonial">Laura Gómez</Link>
                                </h4>
                                <p className="deseg">Paciente de blanqueamiento dental</p>
                                </div>
                            </div>
                            </SwiperSlide>

                            {/* Testimonio 2 */}
                            <SwiperSlide className="vl-testimonial-box">
                            <div className="vl-testimonial-icon">
                                <span>
                                <img
                                    src="assets/img/icons/vl-testimonial-quote3.1.svg"
                                    alt="Comillas"
                                />
                                </span>
                            </div>
                            <div className="vl-testimonial-content">
                                <p className="para">
                                “Tenía miedo de ir al dentista, pero en Boka me hicieron sentir
                                muy cómodo. Su equipo es increíble y los resultados hablan por
                                sí solos.”
                                </p>
                            </div>
                            <div className="vl-testimonal-auth-flex">
                                <div className="vl-auth-thumb">
                                <img
                                    src="assets/img/testimonial/vl-testimonal-sm-thumb-1.1.png"
                                    alt="Paciente Carlos"
                                />
                                </div>
                                <div className="vl-auth-content">
                                <h4 className="title pb-16">
                                    <Link href="/testimonial">Carlos Méndez</Link>
                                </h4>
                                <p className="deseg">Tratamiento de ortodoncia</p>
                                </div>
                            </div>
                            </SwiperSlide>

                            {/* Testimonio 3 */}
                            <SwiperSlide className="vl-testimonial-box">
                            <div className="vl-testimonial-icon">
                                <span>
                                <img
                                    src="assets/img/icons/vl-testimonial-quote3.1.svg"
                                    alt="Comillas"
                                />
                                </span>
                            </div>
                            <div className="vl-testimonial-content">
                                <p className="para">
                                “Llevé a mi hijo a su primera consulta y fue una experiencia
                                muy positiva. La odontopediatra fue paciente y cariñosa, ¡mi
                                pequeño ya no teme al dentista!”
                                </p>
                            </div>
                            <div className="vl-testimonal-auth-flex">
                                <div className="vl-auth-thumb">
                                <img
                                    src="assets/img/testimonial/vl-testimonal-sm-thumb-1.1.png"
                                    alt="Paciente Mariana"
                                />
                                </div>
                                <div className="vl-auth-content">
                                <h4 className="title pb-16">
                                    <Link href="/testimonial">Mariana Ruiz</Link>
                                </h4>
                                <p className="deseg">Mamá de paciente infantil</p>
                                </div>
                            </div>
                            </SwiperSlide>
                        </div>
                        </Swiper>

                        <div className="owl-nav d-none d-lg-block">
                        <button className="swiper-button-next owl-next">
                            <i className="fa-regular fa-angle-right"></i>
                        </button>
                        <button className="swiper-button-prev owl-prev">
                            <i className="fa-regular fa-angle-left"></i>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            {/*================= Testimonial section End =================*/}
        </>
    );
}
