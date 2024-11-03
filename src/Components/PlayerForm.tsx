import React, { useState } from "react";
import Input from "../Shared/Input";
import classes from "../styles/CreatePlayer.module.css";
import { useHttpClient } from "../Hooks/http-hook";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// TODO use Error and clearError properties from useHttpClient hook
// Need to show error and after that to clear it
// Need to add validation for form

const PlayerForm = (props: any) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    nationality: "",
    team: "",
    position: "",
    jersey_number: 0,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleOnSubmitCreatePlayer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      sendRequest(
        `${API_BASE_URL}/api/players`,
        "POST",
        JSON.stringify({ ...values }),
        { "Content-Type": "application/json" }
      );
    } catch (err) {}
  };

  return (
    <form className={classes.placeForm} onSubmit={handleOnSubmitCreatePlayer}>
      <Input
        label="First name"
        name="first_name"
        placeholder="Enter first name"
        type="text"
        value={values?.first_name}
        onChange={(e) => handleOnChange(e)}
      />
      <Input
        label="Last name"
        name="last_name"
        placeholder="Enter last name"
        type="text"
        value={values?.last_name}
        onChange={(e) => handleOnChange(e)}
      />
      <Input
        label="Nationality"
        name="nationality"
        placeholder="Enter nationality"
        type="text"
        value={values?.nationality}
        onChange={(e) => handleOnChange(e)}
      />
      <Input
        label="Team"
        name="team"
        placeholder="Enter team"
        type="text"
        value={values?.team}
        onChange={(e) => handleOnChange(e)}
      />
      <Input
        label="Position"
        name="position"
        placeholder="Enter position"
        type="text"
        value={values?.position}
        onChange={(e) => handleOnChange(e)}
      />
      <Input
        label="Jersey number"
        name="jersey_number"
        placeholder="Enter number"
        type="number"
        value={values?.jersey_number}
        onChange={(e) => handleOnChange(e)}
      />
      <button type="submit">Create player</button>
    </form>
  );
};

export default PlayerForm;
