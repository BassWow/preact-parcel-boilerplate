import { h, render } from "preact";
import {styled} from "twin.macro";


const StyledCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`;

const StyledCard = styled.div`
flex: 1;
  background-color: #efefef;
  border: 1px solid #eee;
  margin: 30px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  .card__image > img {
    width: 100%;
    height: auto;
  }

  .card__content_container {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    padding: 10px;
    justify-content: center;
  }
  .card__content_image {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 20%;
  }
  .card__content_copy {
    flex-basis: 80%;
  }

  .card__content_image > img {
    width: 100%;
    width: 30px;
    height: auto;
  }

  .card__links {
    height: 100px;
    background: #e9e9e9;
  }

  .card__links ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
  }

  .card__links ul > li {

    text-align: center;
  }

  .card__links i {
    color: dimgrey;
  }
`;

export const Cards = (p) => {
  return <StyledCards>{p.children}</StyledCards>
};

export const Card = (p) => {
  return <StyledCard>{p.children}</StyledCard>;
};
