import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  skills: {
    name: string;
    icon: LucideIcon;
  }[];
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, className }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-md transition-all hover:shadow-lg p-6",
        className
      )}
    >
      <h3 className="text-xl font-semibold mb-6 text-gray-800">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3 group">
            <div className="p-2 rounded-md bg-gray-50 group-hover:bg-gray-100 transition-colors">
              <skill.icon className="h-5 w-5 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
