import { createContext, FC, useContext, useState } from "react";

interface User {
  id: number;
  email: string;
  tier: string;
}

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
}

//Complete the Context


export const useUserContext = () => {

};

export const UserProvider: FC = ({ children }) => {
 
  return (
    <></>
  );
};
