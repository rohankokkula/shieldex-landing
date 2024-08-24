import Navbar from '../app/components/Navbar';
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-blue-500 to-teal-400 text-white justify-between p-24">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full text-center py-20 mt-16">
        <h1 className="text-5xl font-bold mb-4">Shieldex</h1>
        <p className="text-xl mb-6">
          Your Ultimate Safety Products and Personal Protective Equipment
        </p>
      </section>

      {/* Product Features Section */}
      <section className="w-full py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Products</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Safety Harness</h3>
            <p>High-quality Full Body Harness.</p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Safety Helmets</h3>
            <p>Durable helmets designed to protect you in any environment.</p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Protective Gloves</h3>
            <p>Comfortable and tough gloves to keep your hands safe.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Get in Touch</h2>
        <div className="text-center">
          <p>Have any questions? Contact us at:</p>
          <p className="text-lg font-semibold mt-2">admin@shieldex.co.in</p>
        </div>
      </section>
    </main>
  );
}
