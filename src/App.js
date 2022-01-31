import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import WhoWeAre from "./pages/who-we-are/who-we-are";
import WhatWeDo from "./pages/what-we-do/what-we-do";
import HowWeWork from "./pages/how-we-work/how-we-work";
import Careers from "./pages/careers/careers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />}></Route>
        <Route path="/what-we-do" element={<WhatWeDo />}></Route>
        <Route path="/how-we-work" element={<HowWeWork />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
