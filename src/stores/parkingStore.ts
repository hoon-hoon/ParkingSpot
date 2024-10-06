import { create } from "zustand";

interface ParkingStore {
  parkingData: any[];
  setParkingData: (data: any[]) => void;
  sortedParking: any[];
  setSortedParking: (data: any[]) => void;
  district: string | null;
  setDistrict: (district: string | null) => void;
  selectedParking: any | null;
  setSelectedParking: (parking: any) => void;
}

export const useParkingStore = create<ParkingStore>((set) => ({
  parkingData: [],
  setParkingData: (data) => set({ parkingData: data }),
  sortedParking: [],
  setSortedParking: (data) => set({ sortedParking: data }),
  district: null,
  setDistrict: (district) => set({ district }),
  selectedParking: null,
  setSelectedParking: (parking) => set({ selectedParking: parking }),
}));
