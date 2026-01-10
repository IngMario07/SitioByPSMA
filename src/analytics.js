import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-683NLQ8EVN"; // tu ID de GA4

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPage = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
