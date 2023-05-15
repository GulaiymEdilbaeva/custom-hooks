import "./App.css";

import useCounter from "./components/counter";
import { Timer } from "./hook/Timer";
import useInput from "./components/useInput";
import { styled } from "styled-components";
function App() {
  const { count, increment, decrement, reset } = useCounter();
  const {
    email,
    password,
    date,
    emailError,
    passwordError,
    dateError,
    handleEmailChange,
    handlePasswordChange,
    handleDateChange,
  } = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("имайл", email);
    console.log("пароль", password);
    console.log("дытааа", date);
  };

  return (
    <div className="App">
      <div>
        <useCounter />
        <Timer></Timer>
        <h1>{count}</h1>

        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>reset</Button>

        <Form onSubmit={handleSubmit}>
          <Label>
            Email:
            <Input type="text" value={email} onChange={handleEmailChange} />
          </Label>
          {emailError && <Error>{emailError}</Error>}
          <br />
          <Label>
            Password:
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Label>
          {passwordError && <Error>{passwordError}</Error>}
          <br />
          <Label>
            Date:
            <Input type="text" value={date} onChange={handleDateChange} />
          </Label>
          {dateError && <Error>{dateError}</Error>}
          <br />
        </Form>
        <></>
      </div>
    </div>
  );
}
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

const Form = styled.form`
  display: flex;

  gap: 30px;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
`;

const Label = styled.label`
  margin-top: 100px;
  font-size: 20px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #3d3d3d;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 8px;
  font-size: 18px;
  width: 100%;
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

const Error = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 110px;
  margin-bottom: 24px;
`;

export default App;
