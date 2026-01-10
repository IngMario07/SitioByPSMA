import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPage } from "./analytics";

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);

  return null;
};
