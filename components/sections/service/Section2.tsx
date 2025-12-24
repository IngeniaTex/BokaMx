import Link from "next/link";

export default function Section2() {
  return (
    <>
      {/*================= Service section start(thumb-service) =================*/}
      <section className="vl-thumb-service-inner fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="vl-thumb-service-inner-section-title">
                {/* section title */}
                <div className="vl-section-title text-center mb-60">
                  <h5 className="subtitle">Tratamientos</h5>
                  <h2 className="title text-anime-style-3 pt-16">Descubre la variedad de tratamientos dentales que ofrecemos. </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-30">
              {/* single slider box */}
              <div className="vl-single-service-box-iner" data-background="./assets/img/service/vl-service-thumb1.1.png">
                <div className="vl-service-icon-box">
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="#">Odontología</Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                    Recupera la función y estética de tus dientes con resinas,
                        coronas o incrustaciones de alta calidad. En Boka, devolvemos la
                        salud a tu sonrisa.
                    </p>
                    {/* <Link href="#" className="learnmore">
                      Learn More
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-30">
              {/* single slider box */}
              <div className="vl-single-service-box-iner" data-background="./assets/img/service/vl-service-thumb1.2.png">
                <div className="vl-service-icon-box">
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="#">Limpieza y Periodoncia</Link>
                    </h4>
                    <p className="para pt-16 pb-24"> Cuidamos tus encías y eliminamos placa y sarro para prevenir
                        enfermedades periodontales. Tu salud bucal comienza con una
                        limpieza profesional.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-30">
              {/* single slider box */}
              <div className="vl-single-service-box-iner" data-background="./assets/img/service/vl-service-thumb1.3.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="./assets/img/icons/vl-service-icon-1.4.svg" alt="" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="#">Odontopediatría</Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                        Atención dental divertida y sin miedo para los más pequeños.
                        Enseñamos buenos hábitos y cuidamos su sonrisa desde temprana
                        edad.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-30">
              {/* single slider box */}
              <div className="vl-single-service-box-iner" data-background="./assets/img/service/vl-service-thumb1.4.png">
                <div className="vl-service-icon-box">
                
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="#">Estética Dental</Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                        Blanqueamientos, carillas y diseño de sonrisa personalizados.
                        En Boka Chilpancingo te ayudamos a lucir una sonrisa más blanca
                        y segura.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Service section End =================*/}
    </>
  );
}
