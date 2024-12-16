import TextField from "@mui/material/TextField";

export default function InputField({
  name,
  type = "text",
}: {
  name: string;
  type?: string;
}) {
  return (
    <div className="!w-full flex">
      <label className="!w-1/4 flex items-center text-lg text-[#18403C]">
        {name}
      </label>
      <TextField
        id="outlined-basic"
        label={name}
        variant="outlined"
        className="!w-4/6 bg-white"
        type={type}
      />
    </div>
  );
}
