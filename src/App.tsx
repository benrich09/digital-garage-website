import { Hero } from "./components/Hero";
import { AppShowcase } from "./components/AppShowcase";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";
import { CarIcon, MapPinIcon, WrenchIcon, ChartIcon, ShieldIcon } from "./components/icons";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />

      <div id="showcase" />
      <AppShowcase
        eyebrow="For car owners"
        title="Stuck on the road? Help finds you."
        description="Request a mechanic or book a garage in a few taps, then watch them come to you in real time — no phone calls, no guessing when they'll arrive."
        variant="carOwner"
        features={[
          {
            icon: <WrenchIcon className="h-5 w-5" />,
            title: "Request a mechanic",
            description: "Describe the problem, share your location, get matched to someone nearby.",
          },
          {
            icon: <MapPinIcon className="h-5 w-5" />,
            title: "Track them live",
            description: "See exactly when your mechanic will arrive, from acceptance to arrival.",
          },
          {
            icon: <CarIcon className="h-5 w-5" />,
            title: "Book a garage",
            description: "Browse nearby garages, compare, and book a service slot directly.",
          },
        ]}
      />

      <AppShowcase
        eyebrow="For garages & mechanics"
        title="Turn nearby requests into booked jobs."
        description="See every incoming request the moment it comes in, respond with an offer, and manage the whole job — from accepted to paid — in one place."
        variant="provider"
        reversed
        features={[
          {
            icon: <WrenchIcon className="h-5 w-5" />,
            title: "Live incoming requests",
            description: "Nearby service requests reach you in real time, not a delayed inbox.",
          },
          {
            icon: <ChartIcon className="h-5 w-5" />,
            title: "Track your earnings",
            description: "See completed jobs and monthly totals at a glance, no spreadsheet needed.",
          },
          {
            icon: <ShieldIcon className="h-5 w-5" />,
            title: "Build your profile",
            description: "List your services and capabilities so the right jobs find you.",
          },
        ]}
      />

      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
