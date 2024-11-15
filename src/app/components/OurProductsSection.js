import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHeart, FaSearch, FaSyncAlt } from 'react-icons/fa'; // Import necessary icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    name: 'Kenwood Airfryer 8L 3.4Kg ',
    price: '$299.99',
    image: '/AIRFRYER-KENWOOD-8L-3.4KG-HFP70.000-DUAL-GCC-COPPER-BLACK.webp',
  },
  {
    name: 'Hisense 172L Bar Fridge ',
    price: '$599.99',
    image: '/h235rre-wd_1.webp',
  },
  {
    name: 'Electric Stainless Steel',
    price: '$449.00',
    image: '/fresh-60cm-cokf500012720-ss.webp',
  },
  {
    name: 'Amazing Product 4',
    price: '$79.99',
    image: '/image (14).jpg',
  },
  // Add more products as needed
];

const OurProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true, // Ensure dots are enabled
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 items on desktop
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Mobile screens
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
            <span>See all products</span>
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
          <h3 className="text-sm text-gray-500">Our Products</h3>
          <h2 className="text-4xl font-bold text-gray-800">Amazing Products Are Ready For You</h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-12">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg group">
                {/* Image section with hoverable icons */}
                <div className="h-[300px] w-full relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                  
                  {/* Hover Icons */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex justify-center items-center space-x-4 opacity-0 group-hover:opacity-100">
                    <FaHeart className="text-white cursor-pointer" onClick={() => alert('Added to Wishlist')} />
                    <FaSearch className="text-white cursor-pointer" onClick={() => alert('Quick View')} />
                    <FaSyncAlt className="text-white cursor-pointer" onClick={() => alert('Compare')} />
                  </div>
                </div>

                {/* Info section with hoverable price */}
                <div className="p-4 w-full text-center">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-lg text-gray-600 group-hover:hidden">{product.price}</p>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-full hidden group-hover:inline">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurProductsSection;
