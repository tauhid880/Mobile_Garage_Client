import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isSellerLoading) {
    return (
      <div className="flex items-center justify-center">
        <progress className="progress w-1/2"></progress>;
      </div>
    );
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
