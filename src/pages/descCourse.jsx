import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Accordion from "../components/Accordion";
import Check from "../assets/check.png";
import useProductStore from "../services/api/useProductStore";
const DescCourse = () => {
  const { products, fetchProducts } = useProductStore();
  const { id } = useParams();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const selectedProduct = products.find((p) => p.id === id);

  if (!selectedProduct) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  const accordionData = [
    {
      title: "Introduction Course 1: Foundation of Data Analyst",
      lessons: [
        { name: "The basics of user experience design", duration: "45 menit" },
        { name: "Jobs in the field of user experience", duration: "40 menit" },
        { name: "The product development life cycle", duration: "30 menit" },
      ],
    },
    {
      title: "Introduction Course 2: Learn Fast Data Analyst",
      lessons: [
        { name: "Advanced user experience design", duration: "50 menit" },
        { name: "UX research methods", duration: "35 menit" },
        { name: "Prototyping techniques", duration: "40 menit" },
      ],
    },
    {
      title: " Introduction Course 3: Intermediate Data Analyst",
      lessons: [
        { name: "Data visualization techniques", duration: "60 menit" },
        { name: "Data modeling basics", duration: "45 menit" },
        { name: "Introduction to SQL", duration: "40 menit" },
      ],
    },
  ];
  return (
    <>
      <Header />
      <main className="pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-4 mx-4 max-w-[1170px]">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <Link
                  to="/user"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-500">&gt;</li>
              <li>
                <Link
                  to="#"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >
                  Detail
                </Link>
              </li>
            </ol>
          </nav>
          <Banner
            title={selectedProduct.Title}
            description={selectedProduct.descriptionClass}
            imageSrc={selectedProduct.photoProduct}
            rating={selectedProduct.ratingCourse}
            reviewScore={selectedProduct.totalRiview}
          />
          <div className="lg:flex lg:space-x-8 mt-8 mx-4 max-w-[1170px]">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Deskripsi
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProduct.descriptionClass}
                </p>
              </div>
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Belajar Bersama Tutor Profesional
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedProduct.photoOwner}
                        alt="Avatar_Instructor"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {selectedProduct.ownerCourse}
                        </p>
                        <p className="text-sm text-gray-600">
                          {selectedProduct.roleOwner}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm">
                      {selectedProduct.descriptionClass}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedProduct.photoOwner}
                        alt="Avatar_Instructor"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {selectedProduct.ownerCourse}
                        </p>
                        <p className="text-sm text-gray-600">
                          {selectedProduct.roleOwner}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga cumque incidunt totam tenetur veritatis obcaecati aut
                      hic laudantium minima non dolorum ipsam, velit eos quae
                      officiis exercitationem ipsum odit numquam.
                    </p>
                  </div>
                </div>
              </div>
              <Accordion title="Kamu akan Mempelajari" items={accordionData} />
              <div className="bg-white rounded-lg border p-6 mb-6">
                <div className="text-xl font-bold text-gray-900 mb-4">
                  {" "}
                  Rating dan Riview
                </div>
                <div className="relative">
                  <h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est quisquam animi sed mollitia ducimus, laborum odio
                    doloribus! Optio laboriosam, delectus, dignissimos et eum
                    velit ratione reiciendis explicabo dolor dolorem id.
                  </h1>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  {`Gapai Karier Impianmu sebagai Seorang Data ${selectedProduct.Tittle}`}
                </h2>
                <div className="flex justify-between">
                  <div className="flex items-center text-green-600 text-xl font-bold mb-2">
                    {`Rp.${selectedProduct.discountPrice}`}
                    <div className="text-gray-500 line-through ml-2 text-sm">
                      {`Rp.${selectedProduct.Price}`}
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center rounded-md bg-yellow-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20 ">
                      {`Discount ${selectedProduct.discount}`}
                    </span>
                  </div>
                </div>
                <p className="text-blue-600 text-sm mb-6">
                  Penawaran spesial tersisa 2 hari lagi!
                </p>
                <Link
                  to="/"
                  className="block w-full bg-green-500 text-white text-center py-3 mb-6 rounded-lg font-semibold hover:bg-green-600 cursor-pointer"
                >
                  Beli Sekarang
                </Link>
                <h3 className="text-md font-semibold text-gray-900 mb-4">
                  Kelas ini sudah termasuk
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>Ujian Akhir</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>49 Video Online</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>Akses kelas seumur hidup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>Sertifikat Online</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src={Check}
                      alt="Check_Icons"
                      className="w-5 h-5 text-gray-500"
                    />{" "}
                    <span>Pretest</span>
                  </li>
                </ul>
                <h3 className="text-md font-semibold text-gray-900 mt-6">
                  Bahasa Pengantar
                </h3>
                <div className="flex items-center space-x-2 text-gray-700 text-sm mt-2 pb-4">
                  <img
                    src={Check}
                    alt="Check_Icons"
                    className="w-5 h-5 text-gray-500"
                  />{" "}
                  <span>Bahasa indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DescCourse;
