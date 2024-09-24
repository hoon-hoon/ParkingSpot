import ParkingItem from "./ParkingItem";

const parkingData = [
  {
    id: 1,
    name: "효원빌딩주차장",
    address: "서울 송파구 가락동",
    price: "9000원",
  },
  {
    id: 2,
    name: "가락ID타워 주차장",
    address: "서울 송파구 가락동",
    price: "무료",
  },
];

const ParkingList = () => {
  return (
    <div>
      {parkingData.map((parking) => (
        <ParkingItem key={parking.id} parking={parking} />
      ))}
    </div>
  );
};

export default ParkingList;
