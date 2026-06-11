import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

export default function ScrollDown() {
  return (
    <a
      href="#articles"
      className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-amber animate-bounce z-10"
    >
      <ChevronDoubleDownIcon className="h-9 w-9" />
    </a>
  );
}
