import React, { Suspense } from "react";
import { useAppSelector } from "@/redux/store";
import Loading from "@/components/ui/Loading";

// Lazy load components
const TempHome = React.lazy(() => import("@/components/Home/TempHome"));
const HomePage = React.lazy(() => import("./HomePage"));

const Home = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const isAuthenticatedLocal = localStorage.getItem("isAuthenticated") === "true";

  // Check if all conditions are true
  const shouldRenderHomePage = isAuthenticated && user && isAuthenticatedLocal;

  return (
    <div>
      <Suspense fallback={ <div className="flex bg-black items-center justify-center h-screen">
      <Loading variant="ripple"  />
    </div>}>
        {shouldRenderHomePage ? <HomePage /> : <TempHome />}
      </Suspense>
    </div>
  );
};

export default Home;