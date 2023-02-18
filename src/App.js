import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import List from "./components/list/List";
import Details from "./components/add-goal/Details";
import NotFound from "./components/notfound/NotFound";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="/list" element={<List />}>
            <Route
              path=":id"
              element={
                <Modal>
                  <Details />
                </Modal>
              }
            />
          </Route>
          <Route path="/add-goal" element={<Details />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
