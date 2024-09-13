import React from "react";
import MaxWidthContainer from "../components/mmw"; // Adjust path based on your structure

const AboutUs = () => {
  return (
    <section className="bg-hero-pattern py-16">
      <MaxWidthContainer>
        <div className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Avatar and Logo */}
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <img
                src="/img/medi.png"
                alt="MediBridge Logo"
                className="w-48 h-auto"
              />
            </div>
            {/* Doctor Avatar */}
            <div>
              <img
                src="/img/avatar.png"
                alt="Doctor Avatar"
                className="h-[40vh] w-auto"
              />
            </div>
          </div>

          {/* Right Section: Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-main-colour mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              MediBridge is a centralized platform that connects clinics with
              patients, streamlining the process of patient management and
              doctor appointments. By bridging the gap between healthcare
              providers and patients, it offers a seamless solution for booking
              appointments, enhancing communication, and improving healthcare
              access.
            </p>
            <div className="mt-8 text-blue-800 italic text-right">
              <p>Bridging Care, Building Trust.</p>
              <p>-Medi Bridge</p>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default AboutUs;
