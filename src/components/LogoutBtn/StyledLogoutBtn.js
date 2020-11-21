import styled from "styled-components";

const LogoutBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  justify-self: center;

  padding: 8px 16px;
  border-radius: 3px;
  background-color: #ffffff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #3f51b5;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 30%;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  width: 10%;

  &:hover,
  :focus {
    background-color: rgb(250, 242, 0);
  }
`;
export default LogoutBtn;
