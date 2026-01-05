import Link from "next/link";
import ContactForm from "./contact-form"


export default function Section1() {
    return (
        <>
            {/*================= Contact section Start =================*/}
            <section className="vl-contact-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-contact-form-iner">
                                <h4 className="title">Escríbenos</h4>
                                <p className="para pt-16 pb-22">Nuestro tiempo de respuesta es de 30 min dentro del horario laboral.</p>
                                <ContactForm/>
                                {/* <form action="#">
                                    <div className="vl-conatct-iner-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input className="mb-20" type="text" placeholder="Nombre" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="mb-20" type="number" placeholder="Teléfono" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="mb-20" name="email" type="email" placeholder="Email" />
                                            </div>
                                            <div className="col-lg-6">
                                                <select className="mb-20 nice-select wide vl-service-select-iner">
                                                    <option data-display="Service Type">Odontología</option>
                                                    <option value={1}>Odontología</option>
                                                    <option value={2}>Limpieza y Periodoncia</option>
                                                    <option value={3}>Odontopediatría </option>
                                                    <option value={4}>Estética Dental</option>
                                                </select>
                                            </div>
                                          
                                            <div className="col-lg-12">
                                                <textarea name="msg" id="msg" placeholder="Message" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="vl-cmt-btn mt-24">
                                                    <button className="vl-btn-primary">Agenda una cita</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-con-thum-iner ml-30">
                                <img className="w-100 br-8" src="assets/img/contact/vl-contact-thum-1.1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-18 pb-10">
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.1.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Dirección</h5>
                                    <Link href="#">
                                    Moisés Guevara 9, Cuauhtemoc Nte, 39030 Chilpancingo de los Bravo, Gro.
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.2.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Teléfono</h5>
                                    <Link href="tel:1234567890">747 161 9921</Link>                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.3.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Email</h5>
                                    <Link href="mailto:bokamx@gmail.com">bokamx@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Contact section End =================*/}
            {/* map start */}
            <div className="vl-map-area pb-100">
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.961407640079!2d-99.505839!3d17.557024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cbec8b5c131655%3A0x9cbda716193dfa10!2sBoka%20Cl%C3%ADnica%20Dental!5e0!3m2!1ses!2smx!4v1766730607188!5m2!1ses!2smx" className="vl-maps" />
                </div>
            </div>
        </>
    );
}

