import { CheckCheck, type LucideIcon } from "lucide-react";

export interface SideMenuActivitiesProps {
  text: string;
  date: string;
  typeAction: 1 | 2 | 3 | 4;
}

// !Todo: chnage this json to use backend data, and change the typeAction to use enum instead of number.
const typeActionProps: {
  [key: number]: { icon: LucideIcon; color: string };
} = {
  1: {
    icon: CheckCheck,
    color: "text-green-500",
  },
  2: {
    icon: CheckCheck,
    color: "text-red-500",
  },
  3: {
    icon: CheckCheck,
    color: "text-blue-500",
  },
  4: {
    icon: CheckCheck,
    color: "text-yellow-500",
  },
};

const SideMenuActivities = ({
  text,
  date,
  typeAction,
}: SideMenuActivitiesProps) => {
  const { icon: IconComponent, color } = typeActionProps[typeAction] || {};
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <IconComponent className={color} />
        <p className="text-md text-muted-foreground">{text}</p>
      </div>
      <p className="flex text-sm text-muted-foreground justify-end">{date}</p>
    </div>
  );
};

export default SideMenuActivities;
