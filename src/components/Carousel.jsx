import React from "react";
import { Carousel } from "flowbite-react";
import kelas1 from "../assets/kelas1.png";
import kelas2 from "../assets/kelas2.png";
import kelas3 from "../assets/kelas3.png";
import kelas4 from "../assets/kelas4.jpg";
import kelas5 from "../assets/kelas5.jpg";

const CarouselComponents = () => {
  return (
    <div className="relative bg-cover bg-center py-4 sm:py-8 md:py-10 lg:py-12 mx-4 sm:mx-8 md:mx-auto max-w-[1170px] mt-2">
      <Carousel slideInterval={5000}>
        <div className="relative">
          <img
            src={kelas1}
            alt="Carousel_gambar1"
            className="w-full h-[400px] sm:h-[500px] xl:h-[600px] object-cover"
          />
          {/* Teks di dalam gambar */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Data Analyst
            </h2>
            <p className="text-gray-200 text-center mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
              Data analyst (analisis data) adalah seorang profesional yang
              bertugas mengumpulkan, memproses,
              <br /> dan menganalisis data untuk mengidentifikasi pola, tren,
              dan <br />
              informasi penting yang dapat digunakan untuk membuat keputusan
              bisnis yang lebih baik.
            </p>
            <a
              href="#"
              className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 text-sm md:text-base"
            >
              Daftar sekarang!
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={kelas2}
            alt="Carousel_gambar2"
            className="w-full h-[400px] sm:h-[500px] xl:h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Akuntansi
            </h2>
            <p className="text-gray-200 text-center mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
              Akuntansi adalah proses pencatatan, pengklasifikasian, pengukuran,{" "}
              <br />
              dan pelaporan informasi keuangan suatu entitas, baik itu
              perusahaan, organisasi, atau individu.
            </p>
            <a
              href="#"
              className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 text-sm md:text-base"
            >
              Daftar sekarang!
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={kelas3}
            alt="Carousel_gambar3"
            className="w-full h-[400px] sm:h-[500px] xl:h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Full-stack Web Developer
            </h2>
            <p className="text-gray-200 text-center mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
              Full Stack Web Developer adalah seorang profesional yang memiliki
              kemampuan untuk mengembangkan aplikasi <br /> web secara
              menyeluruh, baik di sisi frontend (apa yang dilihat dan
              berinteraksi dengan pengguna) <br /> maupun backend (bagian
              server, database, dan logika aplikasi yang tidak terlihat langsung
              oleh pengguna).
            </p>
            <a
              href="#"
              className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 text-sm md:text-base"
            >
              Daftar sekarang!
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={kelas4}
            alt="Carousel_gambar4"
            className="w-full h-[400px] sm:h-[500px] xl:h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              UI/UX Designer
            </h2>
            <p className="text-gray-200 text-center mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
              UI/UX Designer adalah profesional yang fokus pada User Interface
              (UI) <br /> dan User Experience (UX) dalam pengembangan produk
              digital. <br /> Meskipun keduanya berhubungan dengan desain,
              mereka memiliki fokus yang berbeda.
            </p>
            <a
              href="#"
              className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 text-sm md:text-base"
            >
              Daftar sekarang!
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={kelas5}
            alt="Carousel_gambar5"
            className="w-full h-[400px] sm:h-[500px] xl:h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              HR Consultant
            </h2>
            <p className="text-gray-200 text-center mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
              HR Consultant adalah seorang profesional yang memberikan layanan
              konsultasi di <br />
              bidang Sumber Daya Manusia (SDM) kepada perusahaan atau
              organisasi.
            </p>
            <a
              href="#"
              className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 text-sm md:text-base"
            >
              Daftar sekarang!
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponents;
