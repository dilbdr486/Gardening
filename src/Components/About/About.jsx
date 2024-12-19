import React from "react";

function About() {
  return (
    <div class="bg-white">
        <h1 className="text-4xl text-white bg-green-900 text-center py-20">About Us</h1>
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
            <img
              src="https://xtratheme.com/elementor/gardening-2/wp-content/uploads/sites/114/2018/08/p3-2.jpg"
              alt="image"
              loading="lazy"
              width=""
              height=""
            ></img>
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-green-900 font-bold md:text-4xl">
              About Us
              <br />
              Who we are?
            </h2>
            <p class="mt-6 text-gray-600">
              Gardening is the production, commerce, and trade in flowers. It
              encompasses flower care and handling, floral design, or flower
              arranging, merchandising, production, display and flower delivery.
              Wholesale florists sell bulk flowers and related supplies to
              professionals in the trade. Retail florists offer fresh flowers
              and related products and services to consumers. The first flower
              shop in the United States opened prior to 1851.
            </p>
            <p class="mt-4 text-gray-600">
              {" "}
              People have been using natural objects, such as tree stumps, rocks
              and moss, as furniture since the beginning of human civilisation.
              Archaeological research shows that from around 30,000 years ago,
              people began constructing and carving their own furniture, using
              wood, stone, and animal bones. Gardening is the production,
              commerce, and trade in flowers. It encompasses flower care and
              handling, floral design, or flower arranging, merchandising,
              production, display and flower delivery. Wholesale florists sell
              bulk flowers and related supplies to professionals in the trade.
              Retail florists offer fresh flowers and related products and
              services to consumers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
