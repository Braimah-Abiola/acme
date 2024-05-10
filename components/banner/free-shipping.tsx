const FreeShipping = () => {
  return (
    <div className="bg-[#4E35CE] w-full py-1 flex flex-col items-center justify-center">
      <div className="w-full flex flex-row items-center justify-center px-5">
        <p className="text-white text-sm md:text-base">
          Free shipping on all orders above €200, T&C apply
        </p>
        {/* <X
          className="h-6 w-6 hover:scale-105 transition-all cursor-pointer"
          color="white"
        /> */}
      </div>
    </div>
  );
};

export default FreeShipping;
