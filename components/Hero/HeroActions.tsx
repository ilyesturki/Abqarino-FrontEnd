import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../ui/CustomButton";

export default function HeroActions() {
  return (
    <div className="flex gap-3 flex-wrap">
      <CustomButton
        title="Commencer gratuitement"
        icon={faLocationArrow}
        link="#pricing"
        mode="primary"
      />
      <CustomButton
        title="Voir les cours"
        icon={faLocationArrow}
        link="#features"
        mode="secondary"
      />
    </div>
  );
}
