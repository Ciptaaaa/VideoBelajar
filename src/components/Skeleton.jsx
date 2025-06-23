const Skeleton = ({ type = "course" }) => {
  const isCarousel = type === "carousel";

  if (isCarousel) {
    return (
      <div className="w-full max-w-[1170px] mx-auto mt-4">
        <div className="relative w-full h-[400px] sm:h-[500px] xl:h-[600px] animate-pulse bg-gray-300 rounded-md overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 px-4">
            <div className="h-8 sm:h-10 md:h-12 w-3/4 bg-gray-400 rounded mb-6"></div>
            <div className="h-4 sm:h-5 lg:h-6 w-5/6 bg-gray-400 rounded mb-4"></div>
            <div className="h-10 w-40 bg-gray-400 rounded mt-4"></div>
          </div>
        </div>
      </div>
    );
  }

  // Type: Course
  return (
    <div className="p-4 border rounded-lg shadow animate-pulse space-y-4">
      {/* Gambar Produk */}
      <div className="h-40 bg-gray-300 rounded-md w-full"></div>

      {/* Judul */}
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>

      {/* Deskripsi */}
      <div className="h-3 bg-gray-300 rounded w-full"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>

      {/* Avatar dan Info Owner */}
      <div className="flex items-center gap-4 mt-4">
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="flex-1">
          <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
