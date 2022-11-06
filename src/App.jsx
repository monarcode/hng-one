import { Layout } from "@components/index";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import { Content } from "@pages/Content";
import Contact from "@pages/Contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Toaster />
      </AnimatePresence>
    </>
  );
}

export default App;
