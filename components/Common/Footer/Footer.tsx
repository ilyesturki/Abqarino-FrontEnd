import FooterBackground from "./FooterBackground";
import ContactSection from "./ContactSection";
import Copyright from "./Copyright";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="container w-full pt-20 pb-10" id="contact">
      <FooterBackground />
      <ContactSection />
      <div className="flex mt-16 md:flex-row max-md:gap-4 flex-col-reverse justify-between items-center">
        <Copyright />
        <SocialMediaLinks />
      </div>
    </footer>
  );
};

export default Footer;