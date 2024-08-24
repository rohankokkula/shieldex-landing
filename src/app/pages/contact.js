import Head from 'next/head';


export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for more information" />
      </Head>
      <main className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-4xl font-extrabold text-[#17115F] mb-8 text-center">Contacts Us</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-[#17115F] mb-4">India Corporate Office</h3>
                  <p className="text-gray-700 mb-4">Address: Plot No. 16/A, Bhabgarwadi Area, Lonavala – 410401 (Maharashtra), India</p>
                  <p className="text-gray-700 mb-4">Phone: +918530251422</p>
                  <p className="text-gray-700">Email: <a href="mailto:admin@shieldex.co.in" className="text-[#17115F] hover:underline">admin@shieldex.co.in</a></p>
                </div>
                {/* Contact Form Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-[#17115F] mb-4">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#17115F]"
                        placeholder="Your Name *"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#17115F]"
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="subject" className="text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#17115F]"
                        placeholder="Subject *"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea
                        id="message"
                        className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#17115F]"
                        rows="6"
                        placeholder="Your Message *"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#17115F] text-white px-6 py-3 rounded-lg hover:bg-[#0f0a4d] focus:outline-none focus:ring-2 focus:ring-[#17115F] transition duration-300 ease-in-out"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
