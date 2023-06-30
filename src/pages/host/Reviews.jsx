import React from "react";
import reviewGraphURL from "../../assets/images/reviews-graph.png";
import { BsStarFill } from "react-icons/bs";

const reviewsData = [
  {
    rating: 5,
    name: "Elliot",
    date: "January 3, 2023",
    text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    id: "1",
  },
  {
    rating: 4,
    name: "Sandy",
    date: "December 12, 2022",
    text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    id: "2",
  },
];

const Reviews = () => {
  return (
    <div className="flowise reviews">
      <section className="flowise income-intro">
        <h1>Your reviews</h1>
        <p>
          Last <span className="time">30 days</span>
        </p>
      </section>
      <img src={reviewGraphURL} alt="review graph" />

      <section className="flowise review-list">
        <h2>Reviews {`(${reviewsData.length})`}</h2>
        {reviewsData.map((review) => (
          <div key={review.id} className="flowise review-item">
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill key={i} className="star-icon" />
            ))}
            <h3>{review.name} <span>{review.date}</span></h3>
            <p>{review.text}</p>
            <hr />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Reviews;
