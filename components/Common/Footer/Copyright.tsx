import AnimatedName from "../AnimatedName/AnimatedName";

const Copyright = () => (
  <div className="flex gap-2 text-sm md:text-base font-light md:font-normal text-slate-600 dark:text-white-200">
    <p className="font-medium text-slate-500 dark:text-slate-400 mt-[1px]">
      Copyright &copy; {new Date().getFullYear()}
    </p>

    <AnimatedName name="abqarino" />
  </div>
);

export default Copyright;
