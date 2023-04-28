import { Splide, SplideSlide, Options } from "@splidejs/react-splide"
import '@splidejs/react-splide/css'
import { PeopleSay } from "./PeopleSay"
import reviews from "../assets/reviews.json"
import { PeopleSayProps } from "./hooks/usePeopleSay"

export const WhatOtherPeopleSaySlide = () => {

  const options: Options = {
    rewind: true,
    gap: "1rem",
    perPage: 1,
    autoplay: true,
    type: "loop",
    start: 0,
    interval: 5000
  }

  return (
    <div className="text-white wrapper mr-4">
      <Splide
        options={options}
      >
        {reviews.map((review: PeopleSayProps) => (
          <SplideSlide
            key={review.id}
          >
            <PeopleSay 
              reviewDescription={review.reviewDescription}
              person={review.person}             
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
