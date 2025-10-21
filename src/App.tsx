import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Providers } from "./components/Providers";
import { ScrollToTop } from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Explorer from "./pages/Explorer";
import Legal from "./pages/Legal";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => (
  <Providers>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Providers>
);

export default App;
