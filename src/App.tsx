import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AITherapist from "./pages/AITherapist";
import Journaling from "./pages/Journaling";
import MoodTracker from "./pages/MoodTracker";
import SleepAndAudio from "./pages/SleepAndAudio";
import Story from "./pages/Story";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetTheApp from "./pages/GetTheApp";

const queryClient = new QueryClient();

function App() {
  // Immediately return null for .well-known paths
  if (window.location.pathname.startsWith('/.well-known/')) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-therapist" element={<AITherapist />} />
          <Route path="/journaling" element={<Journaling />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/sleep-and-audio" element={<SleepAndAudio />} />
          <Route path="/story" element={<Story />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/get-the-app" element={<GetTheApp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;