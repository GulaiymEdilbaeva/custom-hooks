import React from "react";
import { useState } from "react";
import { useTimer } from "../components/useTimer";
import { styled } from "styled-components";
export const Timer = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { Restart, Stop, Start, numeral } = useTimer(inputValue);

  return (
    <form onSubmit={handleSubmit}>
      <Input type="number" value={inputValue} onChange={handleInputChange} />

      <h1>{numeral}</h1>
      <div>
        <Button onClick={Start}> Start</Button>
        <Button onClick={Stop}>Stop</Button>
        <Button onClick={Restart}> Restrat</Button>
      </div>
    </form>
  );
};
const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 8px;
  font-size: 18px;
  margin-top: 60px;
  margin-bottom: 24px;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 2px 2px #e1e1e1;
  }

  &:hover {
    border-color: #0077ff;
  }
`;
const Button = styled.button`
  background-color: #0077ff;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background-color: #0055cc;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
