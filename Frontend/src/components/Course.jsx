import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2x1 conatiner mx-auto md:px-20 px-4">
        <div className="item-center justify-center text-center pt-28">
          <h1 className="text-2xl md-text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            incidunt deserunt officiis commodi, error vero expedita ipsa laborum
            nobis fugiat repellendus. Dicta eos itaque neque accusantium
            exercitationem consequuntur quia maiores! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illum blanditiis officia inventore
            nobis modi, praesentium nisi consequatur voluptatum vitae
            laudantium!
          </p>
          <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default Course;
