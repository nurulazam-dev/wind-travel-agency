const HeroSearchBar = ({ data, index }) => {
  return (
    <div
      key={index}
      className="flex justify-between items-center text-slate-400 gap-4"
    >
      <div className="text-2xl">{data?.icon}</div>
      <div>
        <h4 className="text-[12px] pl-1 mb-1">{data?.title}</h4>
        <input
          type={data?.dataType}
          placeholder={data?.subtitle}
          className="text-[12px] font-[500] w-32 bg-slate-900/50 rounded-md px-2 py-1 placeholder:text-slate-500 focus:outline-none border border-slate-600"
        />
      </div>
      <div className="hidden lg:block">{data?.rightBorder}</div>
    </div>
  );
};

export default HeroSearchBar;
