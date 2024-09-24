const ParkingItem = ({ parking }: { parking: any }) => {
  return (
    <div className="mb-4 p-2 border-b">
      <h3 className="font-bold">{parking.name}</h3>
      <p>{parking.address}</p>
      <p>{parking.price}</p>
      <a href="#" className="text-blue-500">
        상세보기
      </a>
    </div>
  );
};

export default ParkingItem;
