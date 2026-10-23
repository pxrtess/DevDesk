import type { LucideIcon } from "lucide-react";

interface SideMenuSectionProps {
  title: string;
  icon: LucideIcon;
}

const SideMenuSection = ({
  title,
  icon: IconComponent,
}: SideMenuSectionProps) => {
  return (
    <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer">
      <IconComponent size={20} />
      <p>{title}</p>
    </div>
  );
};

export default SideMenuSection;
