import * as React from "react";
import Box from "@mui/material/Box";
import "./SignUp.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { MuiTelInput } from "mui-tel-input";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputField from "./InputField";

function SignUp() {
  const [gender, setGender] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("+20");

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const handleChangePhoneNUmber = (newValue: string) => {
    setPhoneNumber(newValue);
  };

  return (
    <div className="bg-[#FDF8F5] sm:w-10/12 m-auto sm:h-5/6 p-4 box-border rounded-lg grid grid-cols-2 overflow-auto">
      <div className="px-4">
        <h2 className="mx-auto w-max mb-4 font-medium text-2xl text-[#18403C]">
          Register
        </h2>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          // className="grid grid-cols-1"
        >
          <InputField name="First Name" />
          <InputField name="Last Name" />
          <InputField name="User Name" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <div className="!w-full flex">
                <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
                  Birthdate
                </label>
                <DatePicker
                  label="Birthdate"
                  className="bg-white focus:!border-black !w-4/6"
                />
              </div>
            </DemoContainer>
          </LocalizationProvider>
          <div className="!w-full flex">
            <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
              Gender
            </label>
            <div className="!w-4/6 bg-white">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}
                >
                  <MenuItem value={"male"}>male</MenuItem>
                  <MenuItem value={"female"}>female</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="!w-full flex">
            <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
              Phone Number
            </label>
            <MuiTelInput
              value={phoneNumber}
              onChange={handleChangePhoneNUmber}
              className="!w-4/6 bg-white"
            />
          </div>
          <InputField name="Email" type="Email" />
          <InputField name="Password" type="password" />
          <InputField name="Confirm Password" type="password" />
          {/* <div className="!w-full flex">
            <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
              Email
            </label>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="!w-4/6 bg-white"
              type="email"
            />
          </div>
          <div className="!w-full flex">
            <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
              New Password
            </label>
            <TextField
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              className="!w-4/6 bg-white"
              type="password"
            />
          </div>
          <div className="!w-full flex">
            <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
              Repeat Password
            </label>
            <TextField
              id="outlined-basic"
              label="Repeat Password"
              variant="outlined"
              className="!w-4/6 bg-white"
              type="password"
            />
          </div> */}
        </Box>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="loope.png"
          alt="loope logo"
          className="bg-[#18403C] p-4 rounded-lg"
        />
      </div>
    </div>
  );
}

export default SignUp;
