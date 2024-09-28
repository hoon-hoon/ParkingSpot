import { useState, useEffect } from "react";
import { Location } from "@/types";

const useLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log(location);
      },
      (error) => {
        console.error("get location error:", error);
      }
    );
  }, []);

  return location;
};

export default useLocation;
