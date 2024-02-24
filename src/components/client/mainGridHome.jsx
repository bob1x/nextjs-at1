import React from "react";
import Image from "next/image";
const MainGridHome = () => {
    const tabOffres = [

        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703774819/images/balai-flora-rose_a5kfdb.webp"},
        
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703774828/images/pesePersonne_tnlpyk.webp"},
        
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703774825/images/chariot6roues_pmsfuq.webp"},
        
        {src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703774813/images/balai2_bjpaek.webp"}
        
        ]
  return (
    <div className="container overflow-hidden">
      <div className="row gy-5">
        <div className="col-6">
          <div className="p-3 border bg-light">
            <Image
              src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754747/images/3bcafa912d646c6cad059740c23417a151ee2f62_site_web_3_G_zyzqam.webp"
              width={700}
              height={500}
              alt="Picture"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 border bg-light">
            <Image
              src="https://res.cloudinary.com/iset-sfax/image/upload/v1703754771/images/52a42c70c1b9ba723650d7348b8fb882b4399c38_site_web_2_G_xjp4uc.webp"
              width={700}
              height={500}
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainGridHome;
