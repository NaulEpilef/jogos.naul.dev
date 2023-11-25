import styled from "styled-components";

const PaperStyled = styled.div`
  background-color: brown;
  height: 15em;
  width: 30em;

  background-image: linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);

  box-shadow: 0px 0px 19px 4px rgba(0, 0, 0, 0.345);

  border-radius: 6px;

  padding: 1em;

  & h1 {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

const FieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.6em;
  width: 90%;
`;

const FieldTitleStyled = styled.span`
  max-width: 100%;
  margin-left: 0.5em;
`;

const FieldBodyStyled = styled.span`
  border: 1px solid black;
  max-width: 100%;

  border-radius: 10px;

  padding: 0.5em;
`;

export {
  PaperStyled,
  FieldStyled,
  FieldTitleStyled,
  FieldBodyStyled,
};