import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  {
    title: 'Weight Loss Program',
    description: 'Our comprehensive weight loss plans are tailored to your needs.',
    image: '/image5.jpg',
    hashtag: '#WeightLoss',
  },
  {
    title: 'Mindfulness Training',
    description: 'Improve your mental clarity with our mindfulness programs.',
    image: '/image10.jpg',
    hashtag: '#Mindfulness',
  },
  {
    title: 'Nutritional Advice',
    description: 'Get personalized nutritional advice from our experts.',
    image: '/image6.jpg',
    hashtag: '#Nutrition',
  },
];

const OurServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16 px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left Button */}
        <div className="w-full lg:w-1/3 flex justify-start">
          <motion.button
            className="bg-green-500 text-white py-2 px-6 rounded-full flex items-center space-x-2 shadow-lg hover:bg-green-700 transition"
          >
            <span>See all our services</span>
            <motion.span
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.button>
        </div>
        
        {/* Right Heading */}
        <div className="w-full lg:w-2/3 text-right">
          <h3 className="text-sm text-gray-500">Our Services</h3>
          <h2 className="text-4xl font-bold text-gray-800">What We Offer</h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-12">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                {/* Image section with fixed size */}
                <div className="h-[300px] w-full relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />

                  {/* Hashtag */}
                  <div className="absolute mt-72 left-0 z-10 bg-green-500 text-white text-lg font-bold py-1 px-3 rounded-r-xl">
                    {service.hashtag}
                  </div>
                </div>

                {/* Info section with fixed height */}
                <div className="bg-white pt-6 p-4 w-full h-[100px]">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurServicesSection;
