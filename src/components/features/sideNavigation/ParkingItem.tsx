const ParkingItem = ({ parking }: { parking: any }) => {
  return (
    <div className="mb-4 border-t pt-4 p-1">
      <h3 className="text-primary-light text-lg font-medium mb-1">
        {parking.name}
      </h3>
      <p className="text-gray-500 text-sm">
        {parking.address} / {parking.type} / {parking.price} /{" "}
        {parking.operationTime}
      </p>
      <a href="#" className="text-primary-light text-sm mt-1">
        상세보기
      </a>
    </div>
  );
};

export default ParkingItem;
