import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { me } from "../api/users";

const Auth = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  useEffect(async () => {
    try {
      setLoading(true);
      await me();
      setLoading(false);
    } catch (err) {
      window.location.href = "/not-found";
      setLoading(false);
    }
  }, []);
  return isLoading ? <Loading /> : <div>{children}</div>;
};

export default Auth;
