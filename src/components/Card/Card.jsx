import React from 'react'
import { Title, CardWrapper, SubTitle, PrioryTitle, PriorySubTitle, PriorityWrapper } from './Card.styled';

const Card = () => {
  return (
      <CardWrapper>
          <div>
              <Title>The Watch Spot Design</Title>
              <SubTitle>Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance.
                  Your design should be unique, innovative, and reflective of the latest trends in watch design.</SubTitle>
              <hr style={{ border: "1px solid #232323", margin: "10px 0" }} />
              <PriorityWrapper>
                  <div>                      
                  <PrioryTitle>Priority</PrioryTitle>
                  <PriorySubTitle>Low</PriorySubTitle>
              </div>
              <div>
                  <PrioryTitle>Deadline</PrioryTitle>
                  <PriorySubTitle>12/05/2023</PriorySubTitle>
                  </div>
                  </PriorityWrapper>
          </div>
    </CardWrapper>
  )
}

export default Card;