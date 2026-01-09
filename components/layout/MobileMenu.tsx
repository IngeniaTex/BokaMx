"use client";

import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
    offcanvas_bg?: string;
    offcanvas_menu?: string;
    offcanvas_social?: string;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu, offcanvas_bg, offcanvas_menu, offcanvas_social }: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState(0);
    const handleAccordion = (key: any) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };
    return (
        <>
            {isMobileMenu && <div className="vl-offcanvas-overlay vl-offcanvas-overlay-open" onClick={handleMobileMenu} />}

            {/* offcanvas menu start */}
            <div className={`vl-offcanvas vl-offcanvas-bg-1 ${isMobileMenu ? "vl-offcanvas-open" : ""} ${offcanvas_bg}`}>
                <div className="vl-offcanvas-wrapper">
                    <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-40">
                        <div className="vl-offcanvas-logo">
                            <Link href="/">
                                <img src="assets/img/logo/Boka_Logotipo_RGB-02-mobile.png" alt="" />
                            </Link>
                        </div>
                        <div className="vl-offcanvas-close">
                            <button className="vl-offcanvas-close-toggle" onClick={handleMobileMenu}>
                                <i className="fal fa-times" />
                            </button>
                        </div>
                    </div>
                    <div className={`vl-offcanvas-menu ${offcanvas_menu} d-lg-none mb-40`}>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">Nosotors</Link>
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
                        </nav>
                    </div>
                    <div className="vl-offcanvas-info mb-40">
                        <h3 className="vl-offcanvas-sm-title">Llamanos!</h3>
                        <span>
                            <Link href="#">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="" />
                                </span>
                                +52 747 161 9921
                            </Link>
                        </span>
                        <br />
                        <span>
                            <Link href="#">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="" />
                                </span>
                                bokamx@gmail.com
                            </Link>
                        </span>
                        <br />
                        <span>
                            <Link href="#">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="" />
                                </span>
                                Moisés Guevara 9, Cuauhtemoc Nte, 39030 Chilpancingo de los Bravo, Gro.
                            </Link>
                        </span>
                    </div>
                    <div className="vl-offcanvas-social mb-40">
                        <h3 className="vl-offcanvas-sm-title">Siguenos!</h3>
                        <div className={`vl-footer-social-mobile ${offcanvas_social}`}>
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
            </div>
        </>
    );
}
