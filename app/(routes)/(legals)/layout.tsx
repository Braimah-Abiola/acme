const LegalsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-y-auto">
      <div className="flex flex-col items-center justify-center w-full bg-white mt-32">
        {children}
      </div>
    </div>
  );
};
export default LegalsLayout;
