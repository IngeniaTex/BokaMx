import Link from "next/link";

export default function Section2() {
  return (
    <>
      {/*================= Sección de Misión y Visión =================*/}
      <section className="vl-mission-area fix pt-100 pb-70">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 mb-30">
              <div className="vl-mission-content-inner mr-60">
                {/* Título de la sección */}
                <div className="vl-section-title">
                  <h5 className="subtitle">Nuestra Visión</h5>
                  <h2 className="title text-anime-style-3 pt-16 pb-16">
                    Comprometidos con la excelencia en <br /> salud y estética dental
                  </h2>
                  <p className="para pb-32">
                    En <strong>Boka Clínica Dental</strong>, trabajamos para ofrecer atención dental
                    de la más alta calidad, promoviendo la salud bucal, la confianza y
                    el bienestar de nuestros pacientes a través de tecnología avanzada
                    y un trato humano.
                  </p>
                </div>

                {/* Pestañas de misión y visión */}
                <div className="vl-mission-tabs">
                  <div className="vl-tab-heading-content">
                    <ul
                      className="nav nav-pills"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <span className="tab-title">Nuestra Visión</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          <span className="tab-title">Nuestra Historia</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          <span className="tab-title">Por qué elegirnos</span>
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Contenido de pestañas */}
                  <div className="tab-content" id="pills-tabContent">

                    {/* VISIÓN */}
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabIndex={0}
                    >
                      <div className="vl-tab-content">
                        <p className="para pt-30 pb-20">
                          <span>Compromiso con nuestros pacientes:</span> Buscamos inspirar comunidades más saludables promoviendo la importancia de la salud bucal y creando sonrisas que transforman vidas. <br />
                          Nuestra visión es consolidarnos como una clínica líder en excelencia dental, combinando innovación, educación y atención personalizada.
                        </p>
                        <p className="para pb-32">
                          <span>Enfoque personalizado:</span> En Boka Clínica Dental cada sonrisa es única. Nuestro objetivo es ofrecer soluciones estéticas y funcionales adaptadas a las necesidades de cada paciente.
                        </p>
                        <div className="vl-tab-btn">
                          <Link href="/contact" className="vl-btn-primary">
                            Agenda tu cita
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* HISTORIA */}
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabIndex={0}
                    >
                      <div className="vl-tab-content">
                        <p className="para pt-30 pb-20">
                          <span>Nuestros inicios:</span> Boka Clínica Dental nació con la misión de ofrecer atención odontológica integral en un entorno moderno y cálido, reuniendo especialistas certificados en diversas áreas.
                        </p>
                        <p className="para pb-32">
                          <span>Evolución constante:</span> Con más de una década de experiencia, seguimos innovando en tecnología dental, tratamientos estéticos y protocolos de atención centrados en el paciente.
                        </p>
                        <div className="vl-tab-btn">
                          <Link href="/contact" className="vl-btn-primary">
                            Contáctanos
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* POR QUÉ ELEGIRNOS */}
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabIndex={0}
                    >
                      <div className="vl-tab-content">
                        <p className="para pt-30 pb-20">
                          <span>Excelencia y confianza:</span> Contamos con un equipo multidisciplinario de especialistas, tecnología de vanguardia y materiales de alta calidad para garantizar resultados excepcionales.
                        </p>
                        <p className="para pb-32">
                          <span>Atención humana y profesional:</span> En Boka Clínica Dental cuidamos cada detalle de tu experiencia, desde la primera consulta hasta el seguimiento posterior a tu tratamiento.
                        </p>
                        <div className="vl-tab-btn">
                          <Link href="/contact" className="vl-btn-primary">
                            Solicitar información
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen lateral */}
            <div className="col-lg-6 mb-30">
              <div className="vl-mission-iner-thumb">
                <div className="vl-mission-thumb-iner reveal image-anime">
                  <img
                    className="w-100"
                    src="assets/img/about/nosotros-vision.jpg"
                    alt="Equipo Boka"
                  />
                </div>

                {/* contador de experiencia */}
                <div className="vl-tab-counter-box">
                  <div className="vl-counter-content">
                    <h3>
                      <span className="title counter">10</span>
                      <span>+</span>
                    </h3>
                    <span className="deseg">Años de experiencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Fin de sección Misión y Visión =================*/}
    </>
  );
}
