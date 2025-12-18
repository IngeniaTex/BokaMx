import "/public/assets/css/plugins/bootstrap.min.css";
import "/public/assets/css/plugins/aos.css";
import "/public/assets/css/plugins/all.css";
import "/public/assets/css/plugins/nice-select.css";
import "/public/assets/css/plugins/barfiller.css";

import "/public/assets/css/style.css";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Boka - Clínica Dental Integral",
    description: "Sitio oficial de Boka, clínica dental especializada en tratamientos estéticos y funcionales. Contamos con un grupo de especialistas y tecnología avanzada para cuidar tu sonrisa.",
    
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel='icon' type='image/png' href='../favicon.ico' />
            </head>
            <body className={`${figtree.className}`}>{children}</body>
        </html>
    );
}
