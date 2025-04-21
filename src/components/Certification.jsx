// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import ReactSwipe from "react-swipe";
import CertifWaveUP from "../waves/CertifWaveUP";

export function Certification({ personalData }) {
  const reactSwipeEl = useRef(null);

  return (
    <section className="certificate">
      <CertifWaveUP />
      <div className="pb-10 bg-[#8c2b7a]">
        <div>
          <div className="flex flex-wrap">
            <div className="w-full">
              <h4
                className="font-bold uppercase text-white text-xl text-center md:text-2xl lg:text-4xl"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-offset="500"
              >
                Certification
              </h4>
              <ReactSwipe className="carousel" ref={reactSwipeEl}>
                {personalData.certificates.map((certificate, index) => (
                  <div className="flex justify-center pt-10" key={index}>
                    <div
                      className="lg:w-[50%] w-[100%] md:w-[70%] sm:w-[70%] xs:w-[70%]"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                      data-aos-duration="800"
                      data-aos-offset="300"
                    >
                      {certificate.certif_link ?  (
                        <a
                          href={certificate.certif_link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="certif_img rounded-2xl bg-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                            src={`/src/assets/${certificate?.img_url}`}
                            alt={certificate.name}
                          />
                        </a>
                      ) : (
                        <img
                          className="rounded-2xl bg-contain cursor-default"
                          src={`/src/assets/${certificate?.img_url}`}
                          alt={certificate.name}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </ReactSwipe>
              <div className="relative">
                <div
                  onClick={() => reactSwipeEl.current.prev()}
                  className="lg:mt-20 lg:ml-[150px] md:mt-[75px] md:ml-[50px] sm:mt-[1px] sm:ml-[35px] xs:mt-[10px] xs:ml-[20px] inline-block w-8 h-8 lg:w-14 lg:h-14 absolute cursor-pointer -top-44 left-2 md:left-5 md:-top-80 lg:top-[-26rem] lg:left-10"
                  data-aos="fade-right"
                  data-aos-delay="800"
                  data-aos-duration="800"
                >
                  <img
                    src="/src/assets/gambarpanah-removebg-preview.svg"
                    alt="previous"
                    className="rotate-180"
                  />
                </div>
                <div
                  onClick={() => reactSwipeEl.current.next()}
                  className="lg:mt-20 lg:mr-[150px] md:mt-[75px] md:mr-[50px] sm:mt-[1px] sm:mr-[35px] xs:mt-[5px] xs:mr-[20px] inline-block w-8 h-8 lg:w-14 lg:h-14 absolute cursor-pointer -top-44 right-2 md:right-5 md:-top-80 lg:top-[-26rem] lg:right-10"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                >
                  <img
                    src="/src/assets/gambarpanah-removebg-preview.svg"
                    alt="next"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
