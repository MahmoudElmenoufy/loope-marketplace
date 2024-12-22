import TextField from "@mui/material/TextField";
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
      <TextField
        id={name}
        label={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        variant="outlined"
        className="!w-4/6 bg-white"
        type={type}
      />
    </div>
  );
}
