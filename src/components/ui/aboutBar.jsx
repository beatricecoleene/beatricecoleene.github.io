export default function AboutBar({skills}) {
  const items = [
    "Software Development",
    "Web Development",
    "Database Management",
    "AI & ML",
    "Art & Design"
  ];

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full flex flex-row animate-marquee items-center justify-center whitespace-nowrap gap-2 font-zen text-center text-xs text-secondary-light2">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-row items-center justify-center text-xs text-center gap-3">
            <span>{skill}</span>

            {index < skills.length - 1 && (
              <i className="ph ph-gear-six text-sm font-bold text-primary"></i>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}