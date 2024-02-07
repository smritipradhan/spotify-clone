import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import React from "react";

const options = {
  shouldForwardProp: (prop) => prop !== "borderColor",
};

const StyledTextField = styled(
  TextField,
  options
)(({ borderColor }) => ({
  "& label.Mui-focused": {
    color: "#727272",
  },
  ["& .MuiOutlinedInput-notchedOutline"]: {
    borderWidth: 1,
    borderColor: "#727272",
  },
  ["&:hover .MuiOutlinedInput-notchedOutline"]: {
    borderWidth: 1,
    borderColor,
  },
  ["& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline"]: {
    borderWidth: 2,
    borderColor,
  },
  ["& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"]: {
    color: "#ecebeb !important",
    padding: "14px 20px",
    width: "300px",
    fontWeight: 600,
  },
  [".css-1wc848c-MuiFormHelperText-root"]: {
    color: "red",
    marginLeft: "0px",
  },
}));

const CustomTextField = (props) => {
  const {
    name,
    placeholder,
    helperText,
    handleChange,
    isError = false,
  } = props;

  const onInputChange = (event) => {
    const { value } = event.target;

    const type = "input";
    const data = { value, type, name };
    handleChange(event, data);
  };

  return (
    <StyledTextField
      error={isError}
      id="outlined-basic"
      label=""
      variant="outlined"
      borderColor="white"
      helperText={isError ? helperText : ""}
      placeholder={placeholder}
      onBlur={onInputChange}
    />
  );
};

export default CustomTextField;
