import React from "react";

import map from "../../assets/img/map.png";
import banner from "../../assets/img/banner.png";

const Home = () => {
  return (
    <section className="flex items-center justify-between pt-10 bg-gradient-to-b from-gradient to-white">
      {/* banner left-side div  */}
      <div className="ml-[50px]">
        <div className="flex items-center justify-center gap-3 w-48 h-16 mt-14 bg-secondaryColor rounded-full">
          <h3 className="text-3xl">Visit</h3>
          <p className="w-9">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.875 27.125L21 21L27.125 7.875L14 14L7.875 27.125ZM17.5 19.25C17.0042 19.25 16.5888 19.082 16.254 18.746C15.918 18.4112 15.75 17.9958 15.75 17.5C15.75 17.0042 15.918 16.5882 16.254 16.2522C16.5888 15.9174 17.0042 15.75 17.5 15.75C17.9958 15.75 18.4118 15.9174 18.7478 16.2522C19.0826 16.5882 19.25 17.0042 19.25 17.5C19.25 17.9958 19.0826 18.4112 18.7478 18.746C18.4118 19.082 17.9958 19.25 17.5 19.25ZM17.5 35C15.0792 35 12.8042 34.5403 10.675 33.621C8.54583 32.7028 6.69375 31.4563 5.11875 29.8813C3.54375 28.3063 2.29717 26.4542 1.379 24.325C0.459667 22.1958 0 19.9208 0 17.5C0 15.0792 0.459667 12.8042 1.379 10.675C2.29717 8.54583 3.54375 6.69375 5.11875 5.11875C6.69375 3.54375 8.54583 2.29658 10.675 1.37725C12.8042 0.459083 15.0792 0 17.5 0C19.9208 0 22.1958 0.459083 24.325 1.37725C26.4542 2.29658 28.3063 3.54375 29.8813 5.11875C31.4563 6.69375 32.7028 8.54583 33.621 10.675C34.5403 12.8042 35 15.0792 35 17.5C35 19.9208 34.5403 22.1958 33.621 24.325C32.7028 26.4542 31.4563 28.3063 29.8813 29.8813C28.3063 31.4563 26.4542 32.7028 24.325 33.621C22.1958 34.5403 19.9208 35 17.5 35Z"
                fill="#3282AD"
              />
            </svg>
          </p>
        </div>
        <div className="text-6xl font-bold my-14">
          <h1>The Exotic</h1>
          <h1 className="text-primaryColor my-5">Lakshadweep</h1>
          <h1>Islands</h1>
        </div>
        <div className="flex items-center justify-between">
          <button className="btn btn-outline btn-info">Discover Now</button>
          <svg
            width="35"
            height="52"
            viewBox="0 0 45 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.0021 44.1656L44.1737 39.521L31.9587 18.7633L37.9309 5.99093C38.8321 4.06346 38.0819 1.74153 36.2513 0.792584C34.4207 -0.156362 32.2155 0.63353 31.3143 2.561L25.3422 15.3334L2.26873 17.7982L0.0970496 22.4427L20.4559 25.7835L14.4837 38.5559L8.44393 39.7527L6.81516 43.2361L15.6204 44.9154L22.2539 51.2392L23.8826 47.7558L21.1003 41.9858L27.0725 29.2135L42.0021 44.1656Z"
              fill="#42A7C3"
            />
          </svg>
        </div>
      </div>
      {/* banner right-side div  */}
      <div
        className="w-1/2"
        style={{
          backgroundImage: `url(${map})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img src={banner} className="w-96 mx-auto rounded-full" alt="" />
      </div>
    </section>
  );
};

export default Home;
