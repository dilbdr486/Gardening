import React, { useState } from "react";

function Home() {

  const [isChecked,setIsChecked] = useState(true)

  return (
    <div>
      <div className="bg-green-900 py-10">
        <div>
          <h1 className="text-white text-6xl font-bold mt-0 text-center">
            We Bring The Nature <br /> To Your Home
          </h1>
        </div>
        <div>
          <ul>
            <li className="text-center mt-5 text-white mb-10">
              An Award-Winning landscape company with over 30 years of indursty
              experience
              <br />
              Workin with Education, Goverment, Commercial, Residential
              <br />
              Stadiums, Sports & Events.
            </li>
          </ul>
        </div>
        <div>
          <div className="flex overflow-hidden justify-between py-10 gap-5 bg-slate-50">
            <img
              className="w-1/3 py-5"
              src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2022/05/gardeny-home-1.jpg"
            />
            <img
              className="w-1/3"
              src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2022/05/gardeny-home-2.jpg"
              alt=""
            />
            <img
              className="w-1/3 py-5"
              src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2022/05/gardeny-3.jpg"
              alt=""
            />
          </div>
          <div className="bg-slate-50 flex  gap-10 px-10 py-10" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)" }}>
            <div>
              <div className="">
                <h1 className="text-3xl text-center font-bold text-green-800">
                  Let Us Make Your Garden <br /> Beautiful Again
                </h1>
              </div>
              <div className="py-10">
                <ul>
                  <li>
                    If you're looking for a fantastic, reliable landscaping
                    service, you're come to the <br />
                    right place. We do things differently here at Ctra
                    gardening. We are taking a <br />
                    high-tech approach to a traditionally low tech sector, and
                    are revolutionizing the <br />
                    landscaping industry.
                  </li>
                </ul>
              </div>
              <div className="flex ">
                <h1 className="text-2xl text-green-800 font-bold">
                  What is Included in a Gardening Service?
                </h1>
              </div>
              <div className="">
                <div className="mt-10">
                  <input type="checkbox" checked = {isChecked} readOnly className="w-6 h-6 align-middle py-3"/>
                  <label className="text-green-800 font-bold px-2 align-middle">
                    Bush and shrub trimming
                  </label>
                  <br />
                  <input className="w-6 h-6 align-middle" type="checkbox" checked={isChecked} style={{ marginTop: '10px' }}/>
                  <label className="text-green-800 font-bold px-2 align-middle">
                    Flower Planting
                  </label>
                  <br />
                  <input type="checkbox" checked ={isChecked} className="w-6 h-6 align-middle " style={{ marginTop: '10px' }}/>
                  <label className="text-green-800 font-bold px-2 align-middle">
                    Green Waste Disposal
                  </label>
                  <br />

                  <input type="checkbox" checked ={isChecked} className="w-6 h-6 align-middle " style={{ marginTop: '10px' }} />
                  <label className="text-green-800 font-bold px-2 align-middle">
                    Mowing
                  </label>
                  <br />
                  <input type="checkbox" checked={isChecked} className="w-6 h-6 align-middle" style={{ marginTop: '10px' }} />
                  <label className="text-green-800 font-bold px-2 align-middle">
                    Edging
                  </label>
                  <br />
                  <input type="checkbox" checked ={isChecked} className="w-6 h-6 align-middle" style={{ marginTop: '10px' }} />
                  <label className="text-green-800 font-bold px-2 align-middle">
                    And More!
                  </label>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex justify-end">
              <img
                src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2022/05/gardener-model.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
