import Link from "next/link";

export default function Section1() {
  return (
    <>
      {/*================= Instalaciones section start =================*/}
      <section className="vl-gallery-section pt-100 pb-70">
        <div className="container">
          <div className="vl-section-title text-center mb-50">
            <h5 className="subtitle">Nuestras instalaciones</h5>
            <h2 className="title">Comodidad, tecnología y seguridad en cada detalle</h2>
            <p className="para pt-16">
                  En <strong>Boka Clínica Dental</strong> contamos con espacios modernos diseñados para tu bienestar.
                  Cada área ha sido pensada para ofrecer una experiencia cómoda, segura y confiable:
                  desde nuestra recepción con ambiente relajante, hasta los consultorios equipados con 
                  tecnología dental de última generación.
            </p>
          </div>

          {/* Galería de imágenes */}
          <div className="vl-gallery-grid">
            <div className="vl-gallery-item">
              <img src="/assets/img/instalaciones/recepcion.jpeg" alt="Recepción" />
            </div>
            <div className="vl-gallery-item">
              <img src="/assets/img/instalaciones/consultorio.jpeg" alt="Consultorio" />
            </div>
            <div className="vl-gallery-item">
              <img src="/assets/img/instalaciones/laboratorio.jpeg" alt="Laboratorio" />
            </div>
            <div className="vl-gallery-item">
              <img src="/assets/img/instalaciones/salaespera.jpeg" alt="Sala de espera" />
            </div>
          </div>

          {/* Botón de agendar visita */}
          <div className="text-center mt-50">
            <a href="/contact" className="vl-btn-primary">
              Agendar visita
            </a>
          </div>
        </div>
      </section>

      {/*================= Instalaciones section End =================*/}
    </>
  );
}
