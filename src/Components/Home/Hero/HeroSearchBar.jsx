const HeroSearchBar = ({ data, index }) => {
  return (
    <div
      key={index}
      className="flex justify-between items-center text-slate-400 gap-4"
    >
      <div className="text-2xl">{data?.icon}</div>
      <div>
        <h4 className="text-[12px]">{data?.title}</h4>
        <h3 className="text-[12px] font-[500]">{data?.subtitle}</h3>
      </div>
      <div className="hidden lg:block">{data?.rightBorder}</div>
    </div>
  );
};

export default HeroSearchBar;
