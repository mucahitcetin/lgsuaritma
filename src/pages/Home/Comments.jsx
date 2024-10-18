import React from "react";
import Slider from "react-slick";
import comments from "../../data/comments";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comments = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-4/5">
        <Slider {...settings}>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="m-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={comment.image}
                  alt={comment.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#60C98B]">
                    {comment.name}
                  </h3>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{comment.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Comments;
