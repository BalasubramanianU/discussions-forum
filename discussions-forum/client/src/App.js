import { Routes, Route } from "react-router-dom";

import "./styles/styles.css";
import DiscussionsList from "./pages/DiscussionsList";
import Auth from "./pages/Auth";
import AddDiscussion from "./pages/AddDiscussion";
import DiscussionCard from "./components/DiscussionCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DiscussionsList />}>
        <Route
          path="/discussions-list/:discussion"
          element={<DiscussionCard />}
        />
      </Route>
      <Route path="/discussions-list" element={<DiscussionsList />}>
        <Route
          path="/discussions-list/:discussion"
          element={<DiscussionCard />}
        />
      </Route>
      <Route path="/login" element={<Auth title={"Login"} />} />
      <Route path="/signup" element={<Auth title={"Sign up"} />} />
      <Route path="/add-discussion" element={<AddDiscussion />} />
      <Route path="*" element={<p>404 page not found</p>} />
    </Routes>
  );
}

export default App;
