import { Parking } from "@/types";

const filterParking = (parkingData: Parking[], districtName: string) => {
  return parkingData.filter((parking) => parking.ADDR.includes(districtName));
};

export default filterParking;
