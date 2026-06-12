import { socialMedia } from "@/data";
import Link from "next/link";

const SocialMediaLinks = () => (
  <div className="flex items-center md:gap-3 gap-6">
    {socialMedia.map((info) => (
      <Link
        href={info.link}
        target="_blank"
        key={info.id}
        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-slate-900/90 dark:bg-black-200/75 rounded-lg border border-slate-200 dark:border-black-300 shadow-sm dark:shadow-none"
      >
        <img src={info.img} alt="icons" width={20} height={20} />
      </Link>
    ))}
  </div>
);

export default SocialMediaLinks;
