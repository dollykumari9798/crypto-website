import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "../Resources/style.css";

const data1 = [
      {
        introline: "dogs",
        id: "dogs",
        content: {
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
          copy: "Dog ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
        },
      },
      {
        introline: "elephants",
        id: "elephants",
        content: {
          image:
            "https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Kenya_112367/story_full_width/qxyqxqjtu_WW187785.jpg",
          copy: "Elephant ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
        },
      },
      {
        introline: "bears",
        id: "bears",
        content: {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg",
          copy: "Bears ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
        },
      },
      {
        introline: "cats",
        id: "cats",
        content: {
          image:
            "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb.jpg",
          copy: "Cats ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
        },
      },
      {
        introline: "giraffes",
        id: "giraffes",
        content: {
          image:
            "https://cdn-acgla.nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-5131b73/wp-content/uploads/2020/11/Giraffe.jpg",
          copy: "Giraffes ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
        },
      },
      {
        introline: "owls",
        id: "owls",
        content: {
          image:
            "https://www.treehugger.com/thmb/HHs4-767tiyW_RuYUS48a_WYAtk=/1885x1414/smart/filters:no_upscale()/GettyImages-166152657-cb61ca0fd49e453cb4f1a60b50d281e7.jpg",
          copy: "Owls ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
        },
      },
      {
        introline: "horses",
        id: "horses",
        content: {
          image:
            "https://cdn-acgla.nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-5131b73/wp-content/uploads/2020/11/Giraffe.jpg",
          copy: "Horses ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
        },
      },
];

const VerticalCarousel = ({ data1, leadingText }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const halfwayIndex = Math.ceil(5 / 2);

  const itemHeight = 52;

  const shuffleThreshold = halfwayIndex * itemHeight;

  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data1.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data1.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data1.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data1.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <div className="container">
      <section className="outer-container">
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick("prev")}
          >
            Prev
          </button>

          <div className="carousel">
            <div className="leading-text"></div>
            <div className="slides">
              <div className="carousel-inner">
                {data1.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <=
                        visibleStyleThreshold,
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`,
                    }}
                  >
                    <img src={data1[i].content.image} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="carousel-button next"
            onClick={() => handleClick("next")}
          >
            Next
          </button>
        </div>
        <div className="content">
          <img
            src={data1[activeIndex].content.image}
            alt={data1[activeIndex].content.introline}
          />
          <p>{data1[activeIndex].content.copy}</p>
        </div>
      </section>
    </div>
  );
};

// VerticalCarousel.propTypes = {
//   data1: PropTypes.array.isRequired,
//   leadingText: PropTypes.string.isRequired
// };

export default VerticalCarousel;
