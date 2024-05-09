import React from "react";
import LeftImage from "../../public/assets/img/undraw_key_points_re_u903.svg";
import { RiSearchLine } from "react-icons/ri";

export default function Jumbotron() {
  const scrollToContent = () => {
    const content = document.getElementById("content");
    if (content) {
      content.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div class="container col-xxl-8 px-4 py-5" style={{ minHeight: "60vh" }}>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-5">
          <img
            src={LeftImage}
            class="d-block mx-lg-auto img-fluid"
            alt="Hero Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-7">
          <h1 class="display-6 fw-bold lh-1 mb-3 lh-sm">
            Ingin belajar bahasa <span className="text-warning">Inggris?</span>
          </h1>
          <p class="lead">
            <i>EnglishDict</i> adalah aplikasi kamus bahasa Inggris anda dapat
            mencari arti kata, frasa, dan contoh dalam bahasa Inggris.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              class="btn btn-outline-dark px-4 me-md-2 shadow-lg"
              onClick={scrollToContent}
            >
              Cari <RiSearchLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
