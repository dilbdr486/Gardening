import React from "react";

function Services() {
  return (
    <div>
      <div>
        <h1 className="text-white bg-green-950 fond-bold text-3xl text-center py-10 mb-10">
          Services
        </h1>
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-4xl text-green-800 py-10 px-5 ml-10">
              What do we offer?
              <br />
              Our Services
            </h1>
            <ul>
              <li className="py-3 px-5 text-green-800 ml-10">
                Gardening is both the process and the product of planning,
                designing, and
                <br />
                constructing buildings and other physical structures.
                Architecture works, in
                <br />
                the marerial form of buildings, are often perceived as cultural
                symbol and
                <br />
                as works of art. An architect is someone who plans, designs, and
                reviews the
                <br />
                construction of buildings.
              </li>
            </ul>
            <div className="px-5 py-5 mb-5 text-white border-none ml-10 mt-6">
              <button className="px-8 py-4 bg-green-800 border-green-800 outline-none text-xl hover:bg-slate-500">
                Get Free quote
              </button>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="">
              <div className="py-5 px-5 bg-yellow-100 mb-5">
                <img
                  src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2022/05/icon-1-hover.png"
                  alt=""
                />
                <h1 className="font-bold text-2xl mb-2">Outdoor Living</h1>
                <ul>
                  <li>
                    Architectural works,in the
                    <br />
                    material form of buildings,
                    <br /> are often perceived as
                    <br /> cultural symbol and as works
                    <br /> of art.
                  </li>
                </ul>
              </div>
              <div className="py-5 px-5 bg-yellow-100 mb-5">
                <img
                  src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2022/06/icon-2-hover.png"
                  alt=""
                />
                <h1 className="font-bold text-2xl mb-2">Lawn Care</h1>
                <ul>
                  <li>
                    Architectural works,in the
                    <br />
                    material form of buildings,
                    <br /> are often perceived as
                    <br /> cultural symbol and as works
                    <br /> of art.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-5 px-5 bg-yellow-100 mb-5 mr-10 mt-6">
                <img
                  src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2022/06/icon-3-hover.png"
                  alt=""
                />
                <h1 className="font-bold text-2xl mb-2">Pool Fetures</h1>
                <ul>
                  <li>
                    Architectural works,in the
                    <br />
                    material form of buildings,
                    <br /> are often perceived as
                    <br /> cultural symbol and as works
                    <br /> of art.
                  </li>
                </ul>
              </div>
              <div className="py-5 px-5 bg-yellow-100 mb-5 mr-10">
                <img
                  src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2022/06/icon-4-hover.png"
                  alt=""
                />
                <h1 className="font-bold text-2xl mb-2">Hardscaping</h1>
                <ul>
                  <li>
                    Architectural works,in the
                    <br />
                    material form of buildings,
                    <br /> are often perceived as
                    <br /> cultural symbol and as works
                    <br /> of art.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-green-900">
          <div>
            <img
              src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2022/06/gardeny-about-service.jpg"
              alt=""
            />
          </div>
          <div className="mr-20 mt-32 h-screen ">
            <h1 className="text-3xl font-bold mb-10 text-white">
              Step By Step With Us
            </h1>
            <div className="mb-10">
              <ul className="flex text-white items-center">
                <li className=" border-4 border-white py-3 px-6 items-center text-2xl">
                  1
                </li>
                <span className="px-2 align-middle font-bold text-2xl">
                  Free Consultation
                  <br />{" "}
                  <span className="text-sm">
                    we will give you a free consultation about your project
                  </span>
                </span>
              </ul>
            </div>
            <div className="mb-10">
              <ul className="flex text-white items-center">
                <li className="border-4 border-white py-3 px-6 items-center text-2xl">
                  2
                </li>
                <span className="px-2 align-middle font-bold text-2xl">
                  Sign In Contact
                  <br />{" "}
                  <span className="text-sm">
                  sign a contract with you in our legal department
                  </span>
                </span>
              </ul>
            </div>
            <div className="mb-10">
              <ul className="flex text-white items-center">
                <li className="border-4 border-white  py-3 px-6 items-center text-2xl">
                  3
                </li>
                <span className="px-2 align-middle font-bold text-2xl">
                  Design & Sketch
                  <br />{" "}
                  <span className="text-sm">
                  Our professional team will research and design your project
                  </span>
                </span>
              </ul>
            </div>
            <div className="mb-10">
              <ul className="flex text-white items-center">
                <li className="border-4 border-white  py-3 px-6 items-center text-2xl">
                  4
                </li>
                <span className="px-2 align-middle font-bold text-2xl">
                  Star building
                  <br />{" "}
                  <span className="text-sm">
                  after your approvement we will start to building your dream.
                  </span>
                </span>
              </ul>
            </div>
            <div>
                <button className="py-2 px-6 bg-orange-300 text-white">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
