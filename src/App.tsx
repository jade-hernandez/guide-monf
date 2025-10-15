import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/userProvider";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Explorer from "./pages/Explorer";
import Legal from "./pages/Legal";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

// React query client setup
const queryClient = new QueryClient();

// Todo
// Create a new <Providers> component that includes all the necessary providers
// This keeps the App component clean and focused on routing
// Good implementation of separation of concerns

// Todo:
// Ensure all text throughout the app has the correct localization "fr" ✅
// Remember our initial constraint: "The application must not hardcode any text in the UI. All text must be sourced from a localization file to support multiple languages."

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
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
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
