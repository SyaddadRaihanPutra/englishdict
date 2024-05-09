import React from "react";

export default function About() {
  return (
    <div>
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col-md-6 col-12" style={{ textAlign: "justify" }}>
            <h2 className="fw-semibold">Tentang Developer</h2>
            <small>
              <p>
                Saya adalah seorang web developer yang sedang belajar membuat
                aplikasi web dengan menggunakan ReactJS. Saya tertarik dengan
                pengembangan web dan ingin menjadi seorang full stack developer.
              </p>
            </small>
          </div>
          <div className="col-md-6 col-12">
            <h2 className="fw-semibold">Kontak</h2>
            <small>
              <p>
                Email:{" "}
                <a href="mailto:syaddadraihanputra@gmail.com">
                  syaddadraihanputra@gmail.com
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a href="https://github.com/syaddadraihanputra">
                  https://github.com/syaddadraihanputra
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/syaddadraihanputra/">
                  Syaddad Raihan Putra
                </a>
              </p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
