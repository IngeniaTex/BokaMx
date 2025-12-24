"use client";
import { useState } from "react";
import "@/node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Link from "next/link";

export default function Section1({ background }: { background: string }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/*================= Nuestro Equipo=================*/}
            <section className={`${background} fix pt-100 pb-70`}>
                <div className="container">
                    <div className="row">
                      

                        {/* section title */}
                        <div className="vl-section-title">
                                    <div className="vl-thumb-larg mb-32">
                                        <img className="br-8 w-100" src="assets/img/about/boka_team.jpg" alt="" />
                                    </div>
                                    {/* content one */}
                                    <div className="vl-sidebar-conten1t mb-32">
                                        <h3 className="title">Nuestro equipo</h3>
                                        <p className="para pt-16">En Boka Clínica Dental contamos con un equipo multidisciplinario de especialistas comprometidos con la salud y estética dental de nuestros pacientes.
                                            Nuestros doctores son expertos en áreas como ortodoncia, implantología, odontopediatría, endodoncia, estética dental y rehabilitación oral, lo que nos permite ofrecer una atención integral bajo un mismo espacio.
                                        </p>
                                        <p className="para pt-16">La combinación de experiencia, actualización constante y tecnología de vanguardia garantiza resultados funcionales, estéticos y duraderos.</p>
                                    </div>
                                    {/* btn */}
                                    <div className="vl-progress-btn mt-12">
                                        <Link href="/contact" className="vl-btn-primary">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                    </div>
                </div>
            </section>
            {/*================= Choose us section start =================*/}
            <ModalVideo channel="youtube" videoId="UCHobATgOHOQNPAmkak-W1CA" isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
}
