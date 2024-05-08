import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className=" w-full hidden md:block pt-40 px-8 md:px-60">
        <div className="w-full flex flex-row gap-10 justify-between">
          <div className="flex flex-row w-full gap-4">
            <div className="w-full">
              <Skeleton className="w-full h-[50vh]" />
              <div className="w-full flex flex-row justify-between gap-4 mt-8">
                <Skeleton className="w-[14rem] h-[14rem]" />
                <Skeleton className="w-[14rem] h-[14rem]" />
                <Skeleton className="w-[14rem] h-[14rem]" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Skeleton className="w-[15%] h-[2.5rem]" />
            <Skeleton className="w-full h-[4rem]" />

            <Skeleton className="w-[30%] h-[2.5rem] mt-8" />
            <Skeleton className="w-full h-[6rem]" />
          </div>
        </div>
      </div>

      <div className=" w-full md:hidden pt-24 px-4">
        <div className="flex flex-col">
          <Skeleton className="w-[100%] h-[4rem]" />
          <Skeleton className="w-[100%] h-[14rem] mt-3" />
          <Skeleton className="w-[100%] h-[85vh] mt-4" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
