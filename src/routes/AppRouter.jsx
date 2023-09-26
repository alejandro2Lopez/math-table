import React, { lazy, Suspense } from "react";
import { Route, Navigate, Routes } from "react-router-dom";



const LoginGame = lazy(() => import("../pages/logingame"))
const Game = lazy(() => import("../pages/game"))
const AppRouter = () => {
  return (
    <>
   
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <Routes>
          <Route end path="/LoginGame" element={<LoginGame />} />
          <Route end path="/Game" element={<Game />} />
          <Route path="*" element={<Navigate to="/LoginGame" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
