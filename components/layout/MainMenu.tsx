"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about">Nosotros</Link>
            </li>
            <li>
                <Link href="/service">
                    Tratamientos
                </Link>
            </li>
            <li>
                <Link href="/instalaciones">
                    Instalaciones
                </Link>
            </li>
            <li>
                <Link href="/contact">Contacto</Link>
            </li>
        </ul>
    );
}
