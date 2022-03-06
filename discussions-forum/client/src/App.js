import { Routes, Route } from "react-router-dom";

import "./styles/styles.css";
import DiscussionsList from "./pages/DiscussionsList";
import Discussion from "./pages/Discussion";
import Auth from "./pages/Auth";
import AddDiscussion from "./pages/AddDiscussion";
import DiscussionCard from "./components/DiscussionCard";

function App() {
  return (
    <Routes>
      {["/", "/discussions-list"].map((path, index) => (
        <Route key={index} path={path} element={<DiscussionsList />}>
          <Route
            path="/discussions-list/:discussion"
            element={<DiscussionCard />}
          />
        </Route>
      ))}
      <Route path="/login" element={<Auth title={"Login"} />} />
      <Route path="/signup" element={<Auth title={"Sign up"} />} />
      <Route path="/add-discussion" element={<AddDiscussion />} />
      <Route path="*" element={<p>404 page not found</p>} />
    </Routes>
  );
}

export default App;
