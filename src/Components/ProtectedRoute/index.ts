import { PropsWithChildren, useEffect } from "react";
import { useUserContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "../../constant/routes";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { state } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (state.role !== "admin") {
      navigate(HOME_PAGE_ROUTE, { replace: true });
    }
  }, [navigate, state.role]);
  return children;
}
