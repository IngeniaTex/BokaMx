"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li className="has-dropdown">
                <Link href="#">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about">Nosotros</Link>
            </li>
            <li className="has-dropdown">
                <Link href="#">
                    Tratamientos
                    <span>
                        <i className="fa-regular fa-angle-down" />
                    </span>
                </Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                    <li>
                        <Link href="/service-left">Service Left</Link>
                    </li>
                    <li>
                        <Link href="/service-right">Service Right</Link>
                    </li>
                    <li>
                        <Link href="/service-single">Service Single</Link>
                    </li>
                </ul>
            </li>
            {/* <li className="has-dropdown">
                <Link href="#">
                    Pages
                    <span>
                        <i className="fa-regular fa-angle-down" />
                    </span>
                </Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/team">Team</Link>
                    </li>
                    <li>
                        <Link href="/testimonial">Testimonial</Link>
                    </li>
                    <li>
                        <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link href="/pricing-plan">Pricing Plan</Link>
                    </li>
                    <li>
                        <Link href="/404">404</Link>
                    </li>
                </ul>
            </li>
            <li className="has-dropdown">
                <Link href="#">
                    Blog
                    <span>
                        <i className="fa-regular fa-angle-down" />
                    </span>
                </Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/blog-left">Blog Left</Link>
                    </li>
                    <li>
                        <Link href="/blog-right">Blog Right</Link>
                    </li>
                    <li>
                        <Link href="/blog-single">Blog Single</Link>
                    </li>
                </ul>
            </li> */}
            <li>
                <Link href="/contact">Contacto</Link>
            </li>
        </ul>
    );
}
