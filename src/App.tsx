import { Hero } from "./components/Hero";
import { AppShowcase } from "./components/AppShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { Benefits } from "./components/Benefits";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";
import {
  CarIcon,
  MapPinIcon,
  WrenchIcon,
  ChartIcon,
  ShieldIcon,
  ClockIcon,
  StarIcon,
  WalletIcon,
  VehicleIcon,
  BellIcon,
} from "./components/icons";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />

      <HowItWorks />

      <div id="showcase" />
      <AppShowcase
        eyebrow="For car owners"
        title="Help when you need it. Control when you book."
        description="Whether you're stuck on the roadside or planning a service visit, Digital Garage connects you to nearby mechanics and garages — with live tracking, clear pricing, and your vehicle history in one place."
        variant="carOwner"
        features={[
          {
            icon: <WrenchIcon className="h-5 w-5" />,
            title: "Request a mechanic",
            description:
              "Describe the problem, share your location, and get matched to nearby help in real time.",
          },
          {
            icon: <MapPinIcon className="h-5 w-5" />,
            title: "Live tracking",
            description:
              "Watch acceptance, ETA, and arrival on the map — no phone calls or guessing.",
          },
          {
            icon: <CarIcon className="h-5 w-5" />,
            title: "Book a garage",
            description:
              "Browse nearby garages, compare services, and book a slot directly in the app.",
          },
          {
            icon: <VehicleIcon className="h-5 w-5" />,
            title: "Your vehicles",
            description:
              "Save vehicles, service history, and preferences so every request starts faster.",
          },
          {
            icon: <StarIcon className="h-5 w-5" />,
            title: "Reviews & receipts",
            description:
              "Rate the job, keep payment records, and report issues when something goes wrong.",
          },
          {
            icon: <BellIcon className="h-5 w-5" />,
            title: "Real-time updates",
            description:
              "Push and in-app notifications keep you informed from request to completion.",
          },
        ]}
      />

      <AppShowcase
        eyebrow="For garages & mechanics"
        title="Turn nearby demand into booked, paid work."
        description="See live service requests around you, send offers, manage the job from acceptance to completion, and track what you owe the platform — all in one app."
        variant="provider"
        reversed
        features={[
          {
            icon: <WrenchIcon className="h-5 w-5" />,
            title: "Live incoming requests",
            description:
              "Nearby roadside and booking requests reach you the moment they are created.",
          },
          {
            icon: <ClockIcon className="h-5 w-5" />,
            title: "Active job control",
            description:
              "Accept, update status, and complete jobs with clear steps and timers.",
          },
          {
            icon: <WalletIcon className="h-5 w-5" />,
            title: "Earnings & commissions",
            description:
              "Customers pay you directly. Track completed jobs and the platform commission in one place.",
          },
          {
            icon: <ShieldIcon className="h-5 w-5" />,
            title: "Garage & service profile",
            description:
              "List services, capabilities, and details so the right jobs find you.",
          },
          {
            icon: <ChartIcon className="h-5 w-5" />,
            title: "History & performance",
            description:
              "Review past jobs, ratings, and activity to grow your reputation.",
          },
          {
            icon: <BellIcon className="h-5 w-5" />,
            title: "Stay notified",
            description:
              "Get alerted instantly when a new request matches your area and services.",
          },
        ]}
      />

      <Benefits />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
