"use client";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutSection from './components/AboutSection';
import OurServicesSection from "./components/OurServicesSection";
import OurProductsSection from "./components/OurProductsSection";
import OurPricingSection from "./components/OurPricingSection";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="min-h-screen pt-32 flex flex-col justify-center items-center text-center bg-[#254D32] text-white relative">
        <h1 className="text-5xl mt-auto md:text-7xl font-bold mb-4">
        Your path to balance, healing, and vitality begins here.
        </h1>
        <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-lg">
        Discover wellness tips, mindful practices, and personalized plans.
        </p>
        <a
          href="#get-started"
          className="bg-[#FDF1D6] text-[#254D32] py-3 px-6 rounded-full font-semibold hover:bg-black hover:text-white transition duration-300"
        >
          Start Now
        </a>

{/* Images in a responsive layout */}
{/* Images in a card-like layout */}
<div className="flex flex-wrap gap-6 justify-center py-16">
  {/* Image Card 1 */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="rounded-lg p-6 w-80 hover:scale-105 transition duration-300"
  >
    <Image
      src="/image_7.jpg"
      alt="Description 1"
      layout="responsive"
      width={700}
      height={400}
      className="rounded-tl-3xl rounded-tr-md rounded-bl-lg rounded-br-3xl hover:rounded-lg "
    />
    
  </motion.div>

  {/* Centered Image */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="] rounded-lg p-6 w-80 hover:scale-105 transition duration-300"
  >
    <Image
      src="/image_9.jpg"
      alt="Centered Image"
      layout="responsive"
      width={700}
      height={400}
      className="rounded-tl-3xl rounded-bl-3xl hover:rounded-tl-lg hover:rounded-bl-lg rounded-tr-lg rounded-br-lg hover:rounded-tr-3xl hover:rounded-br-3xl"
    />
  </motion.div>

  {/* Image Card 3 */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="rounded-lg p-6 w-80 hover:scale-105 transition duration-300"
  >
    <Image
      src="/image_4.jpg"
      alt="Description 3"
      layout="responsive"
      width={700}
      height={400}
      className="rounded-tl-3xl rounded-bl-3xl hover:rounded-tl-lg hover:rounded-bl-lg rounded-tr-lg rounded-br-lg hover:rounded-tr-3xl hover:rounded-br-3xl"
    />
    
  </motion.div>
</div>


      </header>

          {/* About Section */}
    <AboutSection />

    <OurServicesSection />

    <OurProductsSection />
      
    <OurPricingSection />  

      {/* Features Section */}
      <main className="flex flex-col gap-16 py-16 px-8 bg-white text-[#254D32] items-center">
        <section id="wellness-plans" className="max-w-5xl text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Personalized Wellness Plans</h2>
            <p className="text-lg">
              Tailored to your unique needs, our wellness plans provide a roadmap to help you achieve your health goals.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Card 1 */}
            <div className="bg-[#254D32] text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Nutrition</h3>
              <p>Expert nutritional advice and plans to suit your dietary needs and lifestyle.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#254D32] text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Exercise</h3>
              <p>Custom fitness routines designed to fit your schedule and fitness level.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#254D32] text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Mindfulness</h3>
              <p>Guided meditation and mental exercises to foster inner peace and well-being.</p>
            </div>
          </div>
        </section>

        <section id="mental-health" className="max-w-5xl text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Mental Health Guides</h2>
            <p className="text-lg">
              Expert advice and tools for managing stress, improving mental well-being, and finding inner peace.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Card 1 */}
            <div className="bg-[#254D32] text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Stress Management</h3>
              <p>Tools to help you reduce stress and live a balanced, peaceful life.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#254D32] text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Anxiety Relief</h3>
              <p>Practical guides to alleviate anxiety and build mental resilience.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#254D32] text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Emotional Well-being</h3>
              <p>Tips and advice for fostering positive emotional health.</p>
            </div>
          </div>
        </section>

        <section id="nutrition-fitness" className="max-w-5xl text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Nutrition and Fitness Tips</h2>
            <p className="text-lg">
              Simple and effective tips for building a healthy diet and staying active, no matter your fitness level.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Card 1 */}
            <div className="bg-[#254D32] text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Healthy Eating</h3>
              <p>Nutrition tips for a balanced and healthy diet that works for you.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#254D32] text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Workout Routines</h3>
              <p>Fitness plans that help you stay active and fit, tailored to your goals.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#254D32] text-white rounded-lg shadow-lg p-6 w-80 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Hydration Tips</h3>
              <p>Simple advice on how to stay hydrated and boost your overall health.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 flex justify-center items-center bg-[#254D32] text-white">
        <p>© 2024 Therawel. All rights reserved.</p>
      </footer>
    </div>
  );
}
