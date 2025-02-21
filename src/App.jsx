import { Routes, Route } from "react-router";
import SignUpPage from "./pages/auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/auth/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;