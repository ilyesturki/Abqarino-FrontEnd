import CustomButton from "@/components/ui/CustomButton";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => (
  <div className="flex flex-col items-center">
    <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-ink text-center">
      Prêt à booster <span className="text-amber">ton parcours</span>{" "}
      d’apprentissage ?
    </h1>

    <p className="text-slate-600 dark:text-white-200 md:mt-10 my-5 text-center lg:max-w-[45vw]">
      Une plateforme éducative conçue pour les élèves tunisiens, du collège au
      baccalauréat, spécialisée en Informatique et en Sciences Techniques.
      Apprends plus efficacement et progresse à ton rythme.
    </p>

    <a href="mailto:turki.ilyes.dev@gmail.com">
      <CustomButton
        title="Nous contacter"
        icon={faLocationArrow}
        mode="primary"
      />
    </a>
  </div>
);

export default ContactSection;
