const SearchInput = () => {
  return (
    <div className="relative p-1 mt-3 mb-3">
      <img
        src="/images/search.svg"
        alt="searchIcon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
      />
      <input
        type="text"
        className="w-full pl-10 p-2 border-2 border-primary-light rounded text-sm"
        placeholder="자치구를 입력해주세요 (예) 강남구, 도봉구"
      />
    </div>
  );
};

export default SearchInput;
