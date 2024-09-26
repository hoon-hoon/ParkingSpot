import { Parking } from "../types/parking";

export const filterParking = (parkingData: Parking[], districtName: string) => {
  return parkingData.filter((parking) => parking.ADDR.includes(districtName));
};
