import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function InputField({
  name,
  placeholder,
  type = "text",
  value,
  handleChange,
}: {
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="!w-full flex">
      <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
        {name}
      </label>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        className="!w-4/6"
      >
        <TextField
          id={name}
          label={name}
          value={value}
          onChange={handleChange}
          variant="outlined"
          className="!w-full bg-white"
          type={type}
        />
      </Box>
    </div>
  );
}
