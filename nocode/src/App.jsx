import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { navItems } from "./nav-items";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const AppWrapper = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [loadingImage, setLoadingImage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    // 随机选择加载图片
    const images = [
      'https://s3plus.sankuai.com/nocode-external/nocode_image/default/27a6e9e3fbc18620289b83668c891b0-g5nq09yqpd4whgbaeiuqnckcctaw1o.png',
      'https://s3plus.sankuai.com/nocode-external/nocode_image/default/e7aaad8ee35d77be471fb0f13b19a2c-cskn0g0wnvly9dleeuj6outcaykct7.png'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setLoadingImage(randomImage);

    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative">
      <Navbar />
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="animate-pulse">
            <img 
              src={loadingImage}
              alt="Loading"
              className="w-32 h-32 object-cover rounded-full opacity-80"
            />
          </div>
        </div>
      )}
      <Routes>
        {navItems.map(({ to, page }) => (
          <Route key={to} path={to} element={page} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <AppWrapper />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
