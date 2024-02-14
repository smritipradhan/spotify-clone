import { useState } from "react";
import { postData } from "../../../utils/apiUtils";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../../store/slices/userSlice";
import { useDispatch } from "react-redux";

const useLoginFormHandler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({ email: "", password: "" });

  const handleLoginFields = (event, data) => {
    console.log(event, data);
    const { name, value, type } = data;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (name) => {
    if (name === "signup") {
      try {
        const data = await postData("/signup", user);

        if (data?.data?.user) {
          dispatch(userActions.authenticate(true));
          navigate(`/`);
        } else {
          throw Error("hjkl");
        }
      } catch (err) {
        dispatch(
          userActions.openSnackbar(
            `${err?.response?.data?.errors?.email}
             ${err?.response?.data?.errors?.password}`
          )
        );
        dispatch(userActions.authenticate(false));
      }
    } else {
      try {
        const data = await postData("/login", user);

        if (data?.data?.user) {
          dispatch(userActions.authenticate(true));
          navigate(`/`);
        }
      } catch (err) {
        console.log("Error");
        dispatch(userActions.authenticate(false));
      }
    }
  };

  return { handleLoginFields, handleLogin };
};

export default useLoginFormHandler;
