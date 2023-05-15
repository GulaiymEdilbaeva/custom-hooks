import { useState } from "react";

const useInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [dateError, setDateError] = useState("");

  const validateEmail = (value) => {
    if (!value) {
      setEmailError("Электронная почта обязательна");
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Электронная почта недействительна");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Необходим пароль");
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/.test(value)) {
      setPasswordError(
        "Пароль должен содержать не менее 8 символов, однц заглавную букву,одну строчную букву и одну цифру."
      );
    } else {
      setPasswordError("");
    }
  };

  const validateDate = (value) => {
    if (!value) {
      setDateError("Укажите дату");
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      setDateError("Дата недействительна");
    } else {
      setDateError("");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    validateDate(event.target.value);
  };

  return {
    email,
    password,
    date,
    emailError,
    passwordError,
    dateError,
    handleEmailChange,
    handlePasswordChange,
    handleDateChange,
  };
};

export default useInput;
