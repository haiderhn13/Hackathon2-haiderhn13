import React from "react";
import FilterSection from "@/components/FilterSection";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <FilterSection
        textTitle={"About Us!"}
        textNavigation={"Home . Pages . "}
        pageName={"About Us..."}
      />

    {/* About Section */}
<section className="flex flex-col md:px-40 md:flex-row items-center gap-8 p-8">
  {/* Image Side */}
  <div className="flex-1">
    <Image
      src={'/PagesSection/AboutUs.jpg'}
      width={400}
      height={400}
      alt="About Us"
      className="rounded-lg"
    />
  </div>

  {/* Content Side */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold">Know About Our Ecomerce
    Business, History</h2>
    <p className="text-gray-600 leading-relaxed">
      Discover high-quality products tailored to your needs. Our goal is to deliver
      the best shopping experience with exceptional customer service.
    </p>
    <button className="px-6 py-3 md:my-10 bg-[#FB2E86] text-white rounded hover:bg-[#e34e8e]">
      Learn More
    </button>
  </div>
</section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <h3 className="text-center text-2xl font-bold mb-8">Our Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
          {/* Feature Card 1 */}
          <div className="p-4 rounded shadow-lg text-center">
          <Image
              src="/Contact/24-hours-support 1.png"
              width={65}
              height={65}
              
              alt="Feature 3"
              className="w-12px h-12px mx-auto mb-4"
            />
            <h4 className="font-bold text-lg">High Quality</h4>
            <p className="text-sm text-gray-600">We offer the best products in the market.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="p-4  rounded shadow-lg text-center">
          <Image
              src="/Contact/premium-quality 1.png"
              width={65}
              height={65}
              alt="Feature 3"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h4 className="font-bold text-lg">Fast Shipping</h4>
            <p className="text-sm text-gray-600">Your orders will arrive quickly and safely.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="p-4  rounded shadow-lg text-center">
            <Image
              src="/Contact/free-delivery 1.png"
              width={65}
              height={65}
              alt="Feature 3"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h4 className="font-bold text-lg">Customer Support</h4>
            <p className="text-sm text-gray-600">
              24/7 support to help you with your queries.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="p-4  rounded shadow-lg text-center">
          <Image
              src="/Contact/cashback 1.png"
              width={65}
              height={65}
              alt="Feature 3"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h4 className="font-bold text-lg">Affordable Prices</h4>
            <p className="text-sm text-gray-600">Top-notch products at reasonable prices.</p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Client Say!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "", image: "/client1.png" },
            { name: "", image: "/client2.png" },
            { name: "", image: "/client3.png" },
          ].map((client, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={client.image}
                alt={client.name}
                width={500}
                height={500}
                className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
              />
              <p className="text-[#151875] font-semibold">{client.name}</p>
            </div>
          ))}
        </div>
        <p className="w-132 h-26 pt-89 left-279 font-semibold text-lg ">Salena Gomez</p>
        <p className="mt-6 w-689px h-97px pt-151px text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent..
        </p>
      </section>
    </div>
  );
};

export default About;
