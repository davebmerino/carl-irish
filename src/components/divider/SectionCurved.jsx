export default function SectionCurve({ flip = false }) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[90px]">
        <path
          d="M0,40 C150,80 350,0 600,30 850,60 1050,20 1200,40 L1200,120 L0,120 Z"
          className="fill-text-main"
        />
      </svg>
    </div>
  );
}
