// import { useState } from "react";
import { createContext, useEffect, useReducer } from "react";

const storedUser = localStorage.getItem('user');
const initial_state = {
  user: storedUser !== null
    ? JSON.parse(storedUser)
    : null,
  loading: false,
  error: null,
};


export const AuthContext = createContext(initial_state);

const AuhtReducer = (state, action) => {

  switch (action.type) {

    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
   
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: null,
      };

    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AuhtReducer,initial_state);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser !== null) {
        const parsedUser = JSON.parse(storedUser);
        dispatch({ type: "LOGIN_SUCCESS", payload: parsedUser });
      }
    } catch (error) {
      // Handle the error (e.g., log it) or set state accordingly
      console.error("Error parsing user from local storage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ user: state.user, loading: state.loading, error: state.error, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};