import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";
import HeroMascotCard from "./HeroMascotCard";

export default function HeroSection() {
  return (
    <div className="px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] items-center relative z-10">
        <HeroContent />
        
        {/* Added hidden class for mobile, block/flex for large screens */}
        <div className="hidden lg:block">
          <HeroMascotCard />
        </div>
      </div>
    </div>
  );
}