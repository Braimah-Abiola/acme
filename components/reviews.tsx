import { BadgeCheck, Star, StarHalfIcon } from "lucide-react";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <h2 className=" font-semibold uppercase text-[#1C1C1C] text-center text-2xl md:text-3xl">
        Customer Reviews
      </h2>

      <div className="flex flex-col px-4 md:px-0 md:flex-row md:justify-center items-center mt-12 gap-4 w-full">
        <div className="h-full w-full md:w-fit border border-black/10 rounded-lg p-2">
          <div className=" w-full md:w-[18rem] h-[20rem] relative rounded-lg">
            <Image
              fill
              className=" object-cover object-center rounded-lg"
              src="/common/review_1.webp"
              alt="Review"
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-lg font-medium">Logan F</p>
            <BadgeCheck color="#4E35CE" />
          </div>
          <p className="text-black/60">07/09/2023</p>
          <div className="flex items-center py-2">
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <StarHalfIcon fill="#4E35CE" color="none" />
          </div>
          <h4 className="text-black text-lg font-normal  w-full md:w-[18rem]">
            Best quality out there would recommend to everyone
          </h4>
        </div>
        <div className="h-full border border-black/10 rounded-lg p-2">
          <div className=" w-full md:w-[18rem] h-[20rem] relative rounded-lg">
            <Image
              fill
              className=" object-cover object-center rounded-lg"
              src="/common/review_2.webp"
              alt="Review"
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-lg font-medium">Nayel H</p>
            <BadgeCheck color="#4E35CE" />
          </div>
          <p className="text-black/60">28/12/2023</p>
          <div className="flex items-center py-2">
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <StarHalfIcon fill="#4E35CE" color="none" />
          </div>
          <h4 className="text-black text-lg font-normal  w-full md:w-[18rem]">
            Best quality out there would recommend to everyone
          </h4>
        </div>
        <div className="h-full border border-black/10 rounded-lg p-2">
          <div className=" w-full md:w-[18rem] h-[20rem] relative rounded-lg">
            <Image
              fill
              className=" object-cover object-center rounded-lg"
              src="/common/review_3.webp"
              alt="Review"
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-lg font-medium">Marley G</p>
            <BadgeCheck color="#4E35CE" />
          </div>
          <p className="text-black/60">14/01/2024</p>
          <div className="flex items-center py-2">
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <StarHalfIcon fill="#4E35CE" color="none" />
          </div>
          <h4 className="text-black text-lg font-normal  w-full md:w-[18rem]">
            Best quality out there would recommend to everyone
          </h4>
        </div>
        <div className="h-full border border-black/10 rounded-lg p-2">
          <div className=" w-full md:w-[18rem] h-[20rem] relative rounded-lg">
            <Image
              fill
              className=" object-cover object-center rounded-lg"
              src="/common/review_4.webp"
              alt="Review"
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-lg font-medium">Harley</p>
            <BadgeCheck color="#4E35CE" />
          </div>
          <p className="text-black/60">05/02/2024</p>
          <div className="flex items-center py-2">
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <Star fill="#4E35CE" color="#4E35CE" />
            <StarHalfIcon fill="#4E35CE" color="none" />
          </div>
          <h4 className="text-black text-lg font-normal  w-full md:w-[18rem]">
            Best quality out there would recommend to everyone
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
