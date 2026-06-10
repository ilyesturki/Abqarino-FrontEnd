import AnimatedName from "../AnimatedName/AnimatedName";

const Copyright = () => (
  <div className="flex gap-2 md:text-base text-sm md:font-normal font-light text-white-200">
    <p className="font-medium text-slate-400">
      Copyright &copy; {new Date().getFullYear()}
    </p>

    <AnimatedName name="abqarino" className="" />
  </div>
);

export default Copyright;
