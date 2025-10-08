import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Characters from "./Pages/Characters/Index";
import Campanhas from "./Pages/Campanhas/Index";
import Account from "./Pages/Account/Index";

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}
