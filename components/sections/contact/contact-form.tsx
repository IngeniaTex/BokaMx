"use client";

import { useState } from "react";
import Link from "next/link";

export default function Section1() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Odontología",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
      setFormData({ name: "", phone: "", email: "", service: "Odontología", message: "" });
    } else {
      setStatus("Error al enviar. Intenta nuevamente.");
    }
  };

  return (
    <>
      {/*================= Contact section Start =================*/}
      <section className="vl-contact-inner pt-100 pb-70">
        <div className="container">
          <div className="row">
              <div className="vl-contact-form-iner">
                <h4 className="title">Escríbenos</h4>
                <p className="para pt-16 pb-22">
                  Nuestro tiempo de respuesta es de 30 minutos dentro del horario laboral.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="vl-conatct-iner-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          className="mb-20"
                          type="text"
                          name="name"
                          placeholder="Nombre"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="mb-20"
                          type="text"
                          name="phone"
                          placeholder="Teléfono"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="mb-20"
                          name="email"
                          type="email"
                          placeholder="Correo electrónico"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <select
                          className="mb-20 nice-select wide vl-service-select-iner"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="Odontología">Odontología</option>
                          <option value="Limpieza y Periodoncia">Limpieza y Periodoncia</option>
                          <option value="Odontopediatría">Odontopediatría</option>
                          <option value="Estética Dental">Estética Dental</option>
                        </select>
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          id="msg"
                          placeholder="Mensaje"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="vl-cmt-btn mt-24">
                          <button type="submit" className="vl-btn-primary">
                            Agenda una cita
                          </button>
                        </div>
                        {status && <p className="mt-3">{status}</p>}
                      </div>
                    </div>
                  </div>
                </form>
              </div>

         
          </div>
        </div>
      </section>
      {/*================= Contact section End =================*/}
    </>
  );
}
