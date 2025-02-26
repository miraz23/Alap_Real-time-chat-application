import { Routes, Route } from "react-router";
import SignUpPage from "./pages/auth/SignUp";
import SignInPage from "./pages/auth/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/auth/sign-up" element={<SignUpPage />} />
      <Route path="/auth/sign-in" element={<SignInPage />} />
    </Routes>
  );
}

export default App;