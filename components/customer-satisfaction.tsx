import Image from "next/image";

const CustomerSatisfaction = () => {
  return (
    <div className="flex flex-col items-center py-20 px-4 md:px-0">
      <h2 className=" font-semibold uppercase text-[#1C1C1C] text-2xl text-center md:text-3xl">
        Get a glimpse of customer satisfaction
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-4 w-full md:h-[30rem]">
        <div className=" w-full md:w-[18rem] h-[30rem] md:h-full relative md:rounded-l-xl">
          <Image
            fill
            className=" object-cover object-center md:rounded-l-xl"
            src="/common/vid.jpg"
            alt="Video"
          />
        </div>
        <div className=" w-full md:w-[18rem] h-[30rem] md:h-full relative">
          <Image
            fill
            className=" object-cover object-center"
            src="/common/vid.jpg"
            alt="Video"
          />
        </div>
        <div className=" w-full md:w-[18rem] h-[30rem] md:h-full relative">
          <Image
            fill
            className=" object-cover object-center"
            src="/common/vid.jpg"
            alt="Video"
          />
        </div>
        <div className=" w-full md:w-[18rem] h-[30rem] md:h-full relative md:rounded-r-xl">
          <Image
            fill
            className=" object-cover object-center md:rounded-r-xl"
            src="/common/vid.jpg"
            alt="Video"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
