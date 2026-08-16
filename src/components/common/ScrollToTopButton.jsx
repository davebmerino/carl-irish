import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-[100]
        w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-wedding-primary
        text-white
        shadow-lg
        hover:bg-wedding-main
        transition-all duration-300
        hover:scale-110
      ">
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
