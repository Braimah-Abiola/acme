import Image from "next/image";

const CustomerSatisfaction = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <h2 className=" font-semibold uppercase text-[#1C1C1C] text-3xl">
        Get a glimpse of customer satisfaction
      </h2>
      <div className="flex justify-center items-center mt-12 gap-4 w-full h-[30rem]">
        <div className="w-[18rem] h-full relative rounded-l-xl">
          <Image
            fill
            className=" object-cover object-center rounded-l-xl"
            src="/common/vid.jpg"
            alt="Video"
          />
        </div>
        <div className="w-[18rem] h-full relative">
          <Image
            fill
            className=" object-cover object-center"
            src="/common/vid.jpg"
            alt="Video"
          />
        </div>
        <div className="w-[18rem] h-full relative">
          <Image
            fill
            className=" object-cover object-center"
            src="/common/vid.jpg"
            alt="Video"
          />
        </div>
        <div className="w-[18rem] h-full relative rounded-r-xl">
          <Image
            fill
            className=" object-cover object-center rounded-r-xl"
            src="/common/vid.jpg"
            alt="Video"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
