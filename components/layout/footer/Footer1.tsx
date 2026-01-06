import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/*================= Footer section start =================*/}
            <section className="vl-footer vl-footer-margin-top-minus vl-off-white-bg pt-240">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-1">
                                <div className="vl-footer-logo">
                                    <Link href="/">
                                        <img src="assets/img/logo/Boka_Logotipo_RGB-01.png" alt="Boka clinica" />
                                    </Link>
                                </div>
                                <div className="vl-footer-content">
                                    <p className="pt-24 pb-24">
                                    Nos dedicamos a brindar <br /> atención dental de alta calidad, <br />
                                    con un enfoque humano y <br /> compasivo para pacientes de <br />
                                    todas las edades, desde la prevención hasta el cuidado integral.
                                    </p>
                                </div>
                                <div className="vl-footer-social">
                                    <ul>
                                        <li>
                                            <Link href="https://tr.ee/UpvdG2cb1ohttps://www.facebook.com/BokaMX/">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#https://www.instagram.com/boka.mx/">
                                                <i className="fa-brands fa-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.youtube.com/@bokaclinicadental4367">
                                                <i className="fa-brands fa-youtube" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-2">
                                <h3 className="vl-footer-widget-title mb-24">Acceso Rápido</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/">Página de inicio</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">Nosotros</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Tratamientos</Link>
                                        </li>
                                        <li>
                                            <Link href="/instalaciones">Instalaciones</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contacto</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-footer-widget-3 ml-40">
                                <h3 className="vl-footer-widget-title mb-24">Tratamientos</h3>
                                <div className="vl-footer-menu">
                                    <ul>
                                        <li>
                                            <Link href="/service">Odontología</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Limpieza y Periodoncia</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Odontopediatría</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Estética Dental</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-footer-widget-4">
                                <h3 className="vl-footer-widget-title mb-24">Contácto</h3>
                                {/* icon list */}
                                <div className="vl-footer-icon-list">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="" />
                                                </span>
                                                +52 747 161 9921
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="" />
                                                </span>
                                                Moisés Guevara 9, Cuauhtemoc Nte, 39030 Chilpancingo de los Bravo, Gro.
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="" />
                                                </span>
                                                bokamx@gmail.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <span>
                                                    <img src="assets/img/icons/vl-footer-icon-1.4.svg" alt="" />
                                                </span>
                                                bokamx.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="vl-footer-copyright-text">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p className="para">© 2025 Boka Clínica Dental. Todos los derechos reservados.</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copy-right-menu">
                                    {/* <ul>
                                        <li>
                                            <Link href="#">Privacy Policy </Link>
                                        </li>
                                        <li>
                                            <Link href="#">Terms &amp; Conditions</Link>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Footer section End =================*/}
        </>
    );
}
