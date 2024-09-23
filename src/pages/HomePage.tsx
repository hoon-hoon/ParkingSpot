const HomePage = () => {
  return (
    <div className="flex h-screen">
      {/* 사이드 네비게이션 */}
      <aside className="w-1/4 bg-gray-100 p-4 border-r">
        사이드 네비게이션
      </aside>

      {/* 메인 지도 영역 */}
      <main className="w-3/4 bg-blue-100">지도</main>
    </div>
  );
};

export default HomePage;
