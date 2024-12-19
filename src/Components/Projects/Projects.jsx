import React from "react";

function Projects() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-4xl text-center bg-green-950 py-20 mb-20 text-white">
          Projects
        </h1>
      </div>
      <div className="flex flex-wrap px-24">
        <div className="w-96 px-8 pb-10">
          <img
            className={({ isActive }) => `w-8 h-10 ${isActive ? "" : ""}`}
            src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2018/08/pa1-1.jpg"
          />
        </div>
        <div className="w-96 px-8 pb-10">
          <img
            className={({ isActive }) => `w-8 h-10 ${isActive ? "" : ""}`}
            src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2018/08/p9-1.jpg"
          />
        </div>
        <div className="w-96 px-8 pb-10">
          <img
            className={({ isActive }) => `w-8 h-10 ${isActive ? "" : ""}`}
            src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2018/08/pa2-1.jpg"
          />
        </div>
        <div className="w-96 px-8 pb-10">
          <img
            className={({ isActive }) => `w-8 h-10 ${isActive ? "" : ""}`}
            src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2018/08/p3-2.jpg"
          />
        </div>
        <div className="w-96 px-8 pb-10">
          <img
            className={({ isActive }) => `w-8 h-10 ${isActive ? "" : ""}`}
            src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2018/08/p7-1.jpg"
          />
        </div>
        <div className="w-96 px-8 pb-10">
          <img
            className={({ isActive }) => `w-8 h-10 ${isActive ? "" : ""}`}
            src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2018/08/p4-2.jpg"
          />
        </div>
      </div>
      <div className="bg-green-950 py-20 " style={{ clipPath: "polygon(0% 40%, 100% 0%, 100% 100%, 0% 100%)" }}>
        <h1 className="text-5xl text-white text-center">
        Still In Doubt?<br/>
        Fill The Form Below And Get A Free Quote
        </h1>
      </div>
    </div>
  );
}

export default Projects;
