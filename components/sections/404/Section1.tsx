import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*================= error section Start =================*/}
            <section className="vl-eror-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="vl-eror-area">
                                <div className="eror-thumb">
                                    <img className="w-100" src="assets/img/banner/eror-thumb.png" alt="" />
                                </div>
                                <div className="eror-content">
                                    <h3 className="title">Disculpanos, algo salio mal</h3>
                                    <p className="para pt-16 pb-32">
                                        Pero no te preocupes aun te podemos atender en Boka Clínica Dental. Si el problema persiste favor de comunicarte directamente a la clínica para darte la informacion que necesitas. 
                                    </p>
                                    <div className="eror-btn">
                                        <Link href="/" className="vl-btn-primary">
                                            Regresar al inicio
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= error section End =================*/}
        </>
    );
}
