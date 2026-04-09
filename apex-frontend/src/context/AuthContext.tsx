import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../types/user"; 

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

type AuthProviderProps={
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: AuthProviderProps){
    const [user,setUser]= useState<User | null>(null);

    return(
            <AuthContext.Provider value={{ user, setUser }}>
            {children}
            </AuthContext.Provider>
    )
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context
}