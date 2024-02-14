import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./pages/loginPage/Login";
import { getData } from "./utils/apiUtils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "./store/slices/userSlice";

const PrivateRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const data = await getData("/user");
      // If the User Exists
      if (data?.data?.user) {
        dispatch(userActions.authenticate(true));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return isAuthenticated ? <Outlet /> : <Login />;
};

export default PrivateRoutes;
