import { useState } from "react";
import Box from "@mui/material/Box";
import InputField from "../InputField";

import "./SignInPage.css";
import { Link } from "react-router-dom";
function SignInPage(){
  const [email, setEmail] =useState("");
  const [Password, setPassword] =useState("");

  const handleChangeEmail = (Value: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(Value.target.value);
  };
  const handlePassword = (
    Value: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(Value.target.value);
  };

  return (
    <div className="bg-[#18403C] flex justify-center items-center h-screen">
    <div className="bg-[#FDF8F5] w-1/2 h-6/8 p-4 box-border rounded-lg grid overflow-auto">
      <div className="px-4">
        <h2 className="mx-auto w-max mb-6 font-medium text-2xl text-[#18403C]">
          SIGN IN
        </h2>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          className="grid gap-3"
        >
          <InputField
            name="Email"
            type="Email"
            placeholder="example@site.com"
            value={email}
            handleChange={handleChangeEmail}
          />
          <InputField
            name="Password"
            type="password"
            value={Password}
            handleChange={handlePassword}
          />
          <Link to="/signin" className="text-[#0E150E] justify-self-end pe-12">FORGOT PASSWORD?</Link>
          <Link to="/signin" className="text-white w-full hover:bg-[#173331] justify-self-end font-medium rounded-3xl text-sm px-5 py-4 text-center focus:ring-4 mb-2 bg-[#18403C]">SIGN IN</Link>
        </Box>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/public/loope_head.png"
          alt="loope marketplace logo"
          className="w-48 h-24 p-4 rounded-lg"
        />
      </div>
    </div>
    </div>
  );
}

export default SignInPage;
