import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <section className="bg-gray-100 py-16 px-8" id="about-section">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            We strive to empower personal growth, mindfulness, and overall well-being through our personalized services.
          </p>

          <div ref={ref} className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xl">Personal Growth</span>
              <span>96%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 relative">
              <motion.div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: inView ? '96%' : '0%' }}
                initial={{ width: '0%' }}
                animate={{ width: inView ? '96%' : '0%' }}
                transition={{ duration: 1 }}
              />
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xl">Mindfulness</span>
              <span>89%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 relative">
              <motion.div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: inView ? '89%' : '0%' }}
                initial={{ width: '0%' }}
                animate={{ width: inView ? '89%' : '0%' }}
                transition={{ duration: 1 }}
              />
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xl">Well-being</span>
              <span>84%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 relative">
              <motion.div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: inView ? '84%' : '0%' }}
                initial={{ width: '0%' }}
                animate={{ width: inView ? '84%' : '0%' }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex gap-6 justify-center items-start">
  {/* First Image (Fixed height for desktop) */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full lg:w-1/2 h-96 lg:h-96 relative rounded-xl overflow-hidden shadow-lg self-center"
  >
    <Image src="/image_7.jpg" alt="Image 1" layout="fill" objectFit="cover" />
  </motion.div>



          {/* Stack of Second and Third Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Second Image (60% height on desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full h-48 lg:h-60 relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image src="/image_9.jpg" alt="Image 2" layout="fill" objectFit="cover" />
            </motion.div>
            {/* Third Image (40% height on desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="w-full h-48 lg:h-40 relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image src="/image_4.jpg" alt="Image 3" layout="fill" objectFit="cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
