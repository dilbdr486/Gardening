import React from "react";

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10" >
      <div className="container mx-auto flex flex-wrap justify-center gap-10">
        {/* Working Time Section */}
        <div className="p-10 rounded-lg w-full md:w-1/2 lg:w-1/3 bg-slate-50">
          <h1 className="text-xl font-bold mb-4 text-green-900">Working Time:</h1>
          <hr className="mb-4 bg-black" />
          <ul className="space-y-3">
            <div className="flex justify-between text-green-900">
              <li>Monday-Friday</li>
              <li>9:00 AM - 6:00 PM</li>
            </div>
            <div className="flex justify-between text-green-900">
              <li>Saturday</li>
              <li>10:00 AM - 4:00 PM</li>
            </div>
            <div className="flex justify-between text-green-900">
              <li>Sunday</li>
              <li>Closed</li>
            </div>
          </ul>
        </div>

        {/* Free Estimate Section */}
        <div className="bg-green-700 p-10 rounded-lg w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-xl font-bold mb-4">Get a Free Estimate</h1>
          <p className="mb-4">Fill out the form below:</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                className="w-full p-2 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full p-2 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 text-white"></textarea>
            </div>
            <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-all w-full">
              Get A Free Quote
            </button>
          </form>
        </div>
      </div>
      <hr className="translate-y-3"/>
      <div className="bottom-0 py-3 mt-3">
      <p className="text-sm mt-1 text-center">
          &copy; {new Date().getFullYear()} Gardening. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
