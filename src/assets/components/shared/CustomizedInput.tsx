import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

type Props = {
  name: string;
  type: string;
  label: string;
};

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    width: "400px",
    borderRadius: 10,
    fontSize: 20,
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
});

const CustomizedInput = ({ name, type, label }: Props) => {
  return (
    <StyledTextField
      margin="normal"
      name={name}
      label={label}
      type={type}
      variant="outlined"
    />
  );
};

export default CustomizedInput;
