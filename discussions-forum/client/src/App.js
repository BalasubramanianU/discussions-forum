import { Routes, Route } from "react-router-dom";

import "./App.css";
import DiscussionsList from "./pages/DiscussionsList";
import Discussion from "./pages/Discussion";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      {["/", "/discussions-list"].map((path, index) => (
        <Route key={index} path={path} element={<DiscussionsList />}>
          <Route path="/discussions-list/discussion" element={<Discussion />} />
        </Route>
      ))}
      <Route path="/login" element={<Auth title={"login"} />} />
      <Route path="/signup" element={<Auth title={"signup"} />} />
      <Route path="*" element={<p>404 page not found</p>} />
    </Routes>
  );
}

export default App;
