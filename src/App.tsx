import { Layout } from "@allComponents";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Content } from "@pages/Content";
import Contact from "@pages/Contact/Contact";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
