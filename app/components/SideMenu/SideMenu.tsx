import {
  HelpCircle,
  Home,
  ListTodo,
  LogOutIcon,
  MessagesSquare,
  Settings,
  User,
} from "lucide-react";
import SideMenuSection from "./SideMenuSection/SideMenuSection";
import SideMenuActivities, {
  SideMenuActivitiesProps,
} from "./SideMenuActivities/SideMenuActivities";

// !todo change this json to use backend data, and change the typeAction to use enum instead of number.
const recentActivities = [
  {
    typeAction: 1,
    text: "New ticket created",
    date: "2023-09-15 10:30 AM",
  },
  {
    typeAction: 2,
    text: "Ticket closed",
    date: "2023-09-15 11:45 AM",
  },
  {
    typeAction: 3,
    text: "New comment added",
    date: "2023-09-15 12:15 PM",
  },
  {
    typeAction: 4,
    text: "Ticket assigned to John",
    date: "2023-09-15 01:00 PM",
  },
  {
    typeAction: 1,
    text: "New ticket created",
    date: "2023-09-15 10:30 AM",
  },
] satisfies SideMenuActivitiesProps[];

const SideMenu = () => {
  return (
    <div
      id="side-menu"
      className="flex h-full flex-col bg-gray-800 text-white w-64 p-4"
    >
      <section id="side-menu-sections" className="space-y-2">
        <SideMenuSection route="/" title="Home" icon={Home} />
        <SideMenuSection
          route="/messages"
          title="Messages"
          icon={MessagesSquare}
        />
        <SideMenuSection route="/tasks" title="Tasks" icon={ListTodo} />
        <SideMenuSection route="/members" title="Members" icon={User} />
        <SideMenuSection route="/settings" title="Settings" icon={Settings} />
      </section>
      <hr className="my-4 ml-2 border-gray-600 " />
      <section id="side-menu-recent" className="mt-auto">
        <p className="mb-4 flex items-center justify-between">
          Recent Activities{" "}
          <span className="text-sm text-gray-400 cursor-pointer">See all</span>
        </p>
        <div className="flex flex-col bg-gray-600 p-2 rounded-2xl mx-2 gap-y-2">
          {recentActivities.map((activity, index) => (
            <SideMenuActivities
              key={index}
              text={activity.text}
              date={activity.date}
              typeAction={activity.typeAction}
            />
          ))}
        </div>
      </section>
      <hr className="my-4 ml-2 border-gray-600 " />
      <section id="side-menu-footer" className="mt-auto">
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer">
          <HelpCircle size={20} className="mr-2" />
          <p>Help & Support</p>
        </div>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer">
          <LogOutIcon size={20} />
          <p>Logout</p>
        </div>
      </section>
    </div>
  );
};

export default SideMenu;
