import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SideMenuSectionProps {
  title: string;
  icon: LucideIcon;
  route: string;
}

const SideMenuSection = ({
  title,
  icon: IconComponent,
  route,
}: SideMenuSectionProps) => {
  return (
    <Link
      href={route}
      className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer"
    >
      <IconComponent size={20} />
      <p>{title}</p>
    </Link>
  );
};

export default SideMenuSection;
