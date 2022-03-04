import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Restorant = lazy(() => import("./Restorant"));
const Restorants = lazy(() => import("./Restorants"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Restorants />} />
        <Route path="/restorants/:id" element={<Restorant />} />
      </Routes>
    </Suspense>
  );
}
