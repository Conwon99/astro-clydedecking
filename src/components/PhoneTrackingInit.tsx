import { useEffect } from "react";
import { initPhoneTracking } from "@/utils/phoneTracking";

/**
 * Renders nothing - its only job is kicking off the client-side phone
 * number swap (real number in HTML source for SEO, tracking number shown
 * to visitors) once mounted. Single canonical place this runs from.
 */
const PhoneTrackingInit = () => {
  useEffect(() => {
    initPhoneTracking();
  }, []);

  return null;
};

export default PhoneTrackingInit;
