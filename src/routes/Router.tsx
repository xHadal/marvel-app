import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Detail from "@/pages/Detail";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Dashboard />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);
