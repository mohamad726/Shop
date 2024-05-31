import { ReactNode, createContext, useContext, useReducer } from "react";

type AuthState = {
  isLogin: boolean;
  userName: string;
  role: string;
};

const authInit = {
  isLogin: false,
  userName: "",
  role: "",
};

function authReducer(
  state: AuthState,
  action: { type: string; payload: any }
): AuthState {
  switch (action.type) {
    case "SET_USER":
      return {
        isLogin: action.payload.isLogin,
        userName: action.payload.userName,
        role: action.payload.role,
      };
    default:
      return state;
  }
}

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<{ type: string; payload: any }>;
}>({
  state: authInit,
  dispatch: () => {},
});

export const useUserContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, authInit);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
