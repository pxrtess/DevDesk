import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./components/SideMenu/SideMenu";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col h-screen bg-gray-50">
        <Navbar />
        <div className="flex flex-1 h-full">
          <SideMenu />
          <div className="flex flex-col flex-1 p-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
