import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import History from "../pages/History/History.tsx";
import Home from "../pages/Home/Home.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
