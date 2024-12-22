import * as React from "react";

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
import { Dayjs } from "dayjs";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SignUp.css";
import InputPassword from "./InputPassword";

function SignUp() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [birthdate, setBirthdate] = React.useState<Dayjs>();
  const [, setBirthdateFormatted] = React.useState<string>();
  const [phoneNumber, setPhoneNumber] = React.useState("+20");
  const [email, setEmail] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const handleChangeFirstName = (
    newValue: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(newValue.target.value);
  };

  const handleChangeLastName = (
    newValue: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastName(newValue.target.value);
  };

  const handleChangeUserName = (
    newValue: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserName(newValue.target.value);
  };

  const handleChangeBirthDate = (newValue: Dayjs | null) => {
    console.log(newValue?.format("DD-MM-YYYY"));
    setBirthdate(newValue!);
    setBirthdateFormatted(newValue?.format("DD-MM-YYYY"));
  };

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const handleChangePhoneNUmber = (newValue: string) => {
    setPhoneNumber(newValue);
  };

  const handleChangeEmail = (newValue: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(newValue.target.value);
  };
  const handleChangeNewPassword = (
    newValue: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(newValue.target.value);
  };
  const handleChangeRepeatPassword = (
    newValue: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(newValue.target.value);
  };

  return (
    <div className="bg-[#18403C] flex justify-center items-center h-screen">
      <div className="bg-[#FDF8F5] sm:w-10/12 sm:h-5/6 p-4 box-border rounded-lg grid grid-cols-2 overflow-auto">
        <div className="px-4">
          <h2 className="mx-auto w-max mb-4 font-medium text-2xl text-[#18403C]">
            Register
          </h2>

          <InputField
            name="First Name"
            value={firstName}
            handleChange={handleChangeFirstName}
          />
          <InputField
            name="Last Name"
            value={lastName}
            handleChange={handleChangeLastName}
          />
          <InputField
            name="User Name"
            value={userName}
            handleChange={handleChangeUserName}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <div className="!w-full flex !mb-3">
                <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
                  Birthdate
                </label>
                <DatePicker
                  label="Birthdate"
                  value={birthdate}
                  className="bg-white focus:!border-black !w-4/6"
                  onChange={handleChangeBirthDate}
                />
              </div>
            </DemoContainer>
          </LocalizationProvider>
          <div className="!w-full flex !mb-3">
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
          <div className="!w-full flex !mb-3">
            <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
              Phone Number
            </label>
            <MuiTelInput
              value={phoneNumber}
              onChange={handleChangePhoneNUmber}
              className="!w-4/6 bg-white"
            />
          </div>
          <InputField
            name="Email"
            type="Email"
            value={email}
            handleChange={handleChangeEmail}
          />
          <div className="!w-full flex !mb-3">
            <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
              New Password
            </label>
            <InputPassword label="New Password" />
          </div>
          <div className="!w-full flex !mb-3">
            <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
              Repeat Password
            </label>
            <InputPassword label="Repeat Password" />
          </div>
          <FormGroup className="!w-full">
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I understand and agree to all terms of use and privacy policy."
            />
          </FormGroup>
          <div className="!w-full flex justify-center">
            <button className="bg-[#18403C] !w-1/2 text-[#C3E6C3] p-2 rounded-l-full rounded-r-full">
              Register
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="loope-marketplace.png"
            alt="loope marketplace logo"
            className="bg-[#18403C] p-4 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
