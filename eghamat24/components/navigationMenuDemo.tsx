"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const eghamatgah: { title: string; href: string; description: string }[] = [
  {
    title: "اقامتگاه قشم",
    href: "#",
    description: "تخفیف تا 78%",
  },
  {
    title: "اقامتگاه یزد",
    href: "#",
    description: "تخفیف تا 91 %",
  },
  {
    title: "اقامتگاه تهران",
    href: "#",
    description: "تخفیف تا 64 %",
  },
  {
    title: "اقامتگاه اصفهان",
    href: "#",
    description: "تخفیف تا 73  %",
  },
  {
    title: "اقامتگاه بوشهر",
    href: "#",
    description: "تخفیف تا 20 %",
  },
  {
    title: "اقامتگاه رشت",
    href: "#",
    description: "تخفیف تا 14 %",
  },
  {
    title: "اقامتگاه شیراز",
    href: "#",
    description: "تخفیف تا 75 %",
  },
  {
    title: "اقامتگاه کاشان",
    href: "#",
    description: "تخفیف تا 76 %",
  },
];
const hotels: { title: string; href: string; description: string }[] = [
  {
    title: "هتل های مشهد",
    href: "#",
    description: "تخفیف تا 90%",
  },
  {
    title: "هتل های کیش",
    href: "#",
    description: "تخفیف تا 92 %",
  },
  {
    title: "هتل های تهران",
    href: "#",
    description: "تخفیف تا 69 %",
  },
  {
    title: "هتل های قشم",
    href: "#",
    description: "تخفیف تا 84  %",
  },
  {
    title: "هتل های شیراز",
    href: "#",
    description: "تخفیف تا 64 %",
  },
  {
    title: "هتل های اصفهان",
    href: "#",
    description: "تخفیف تا 68 %",
  },
  {
    title: "هتل های یزد",
    href: "#",
    description: "تخفیف تا 67 %",
  },
  {
    title: "هتل های تبریز",
    href: "#",
    description: "تخفیف تا 25 %",
  },
];
const foreignHotels = [
  {
    title: "هتل های استانبول",
    href: "#",
    description: "تخفیف تا 24%",
  },
  {
    title: "هتل های وان",
    href: "#",
    description: "تخفیف تا 33%",
  },
  {
    title: "هتل های دبی",
    href: "#",
    description: "تخفیف تا 50%",
  },
  {
    title: "هتل های نجف",
    href: "#",
    description: "تخفیف تا 18%",
  },
  {
    title: "هتل های کربلا",
    href: "#",
    description: "تخفیف تا 61%",
  },
];
///////////////////////////
const tour: { title: string; href: string; description: string }[] = [
  {
    title: "تور کیش",
    href: "#",
    description: "تخفیف تا 90%",
  },
  {
    title: "تور مشهد",
    href: "#",
    description: "تخفیف تا 92 %",
  },
  {
    title: "تور قشم",
    href: "#",
    description: "تخفیف تا 69 %",
  },
  {
    title: "تور چابهار",
    href: "#",
    description: "تخفیف تا 84  %",
  },
  {
    title: "تور شیراز",
    href: "#",
    description: "تخفیف تا 64 %",
  },
  {
    title: "تور اصفهان",
    href: "#",
    description: "تخفیف تا 68 %",
  },
];
const foreigntour = [
  {
    title: "تور دبی",
    href: "#",
    description: "تخفیف تا 24%",
  },
  {
    title: "تور استانبول",
    href: "#",
    description: "تخفیف تا 33%",
  },
  {
    title: "تور آنتالیا",
    href: "#",
    description: "تخفیف تا 50%",
  },
  {
    title: "تور ایروان",
    href: "#",
    description: "تخفیف تا 18%",
  },
  {
    title: "تور تفلیس",
    href: "#",
    description: "تخفیف تا 8%",
  },
   {
    title: "تور نجف",
    href: "#",
    description: "تخفیف تا 18%",
  },
];
const Ticket: { title: string; href: string; description: string }[] = [
  {
    title: "تفریحات دبی",
    href: "#",
    description: "تخفیف تا 30%",
  },
  {
    title: "تفریحات استانبول",
    href: "#",
    description: "تخفیف تا 20 %",
  },
  {
    title: "تفریحات کیش",
    href: "#",
    description: "تخفیف تا 40 %",
  },
];


export function NavigationMenuDemo() {
  const [activeHotel, setActiveHotel] = React.useState<"internal" | "external">(
    "internal",
  );

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* 1 */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>رزرو هتل</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex w-125 bg-white rounded-2xl">
              {/* ستون سمت راست */}
              <div className="w-30 py-5 border-l *:text-[12px]!">
                <div
                  onMouseEnter={() => setActiveHotel("internal")}
                  className={`cursor-pointer p-2  transition
            ${
              activeHotel === "internal"
                ? "bg-gray-100 text-red-500"
                : "hover:bg-gray-50"
            }`}
                >
                  هتل های داخلی
                </div>

                <div
                  onMouseEnter={() => setActiveHotel("external")}
                  className={`cursor-pointer p-2 font-medium transition
            ${
              activeHotel === "external"
                ? "bg-gray-100 text-red-500"
                : "hover:bg-gray-50"
            }`}
                >
                  هتل های خارجی
                </div>
              </div>

              {/* ستون لیست */}
              <div className="flex-1 p-6 w-87.5 ">
                {(activeHotel === "internal" ? hotels : foreignHotels).map(
                  (item) => (
                    <NavigationMenuLink
                      key={item.title}
                      className="block cursor-pointer
             rounded-lg p-3 hover:bg-gray-100 text-[12px]"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{item.title}</span>

                        <span className="text-gray-500 text-[12px]">
                          {item.description}
                        </span>
                      </div>
                    </NavigationMenuLink>
                  ),
                )}

                <div className="mt-6 text-center ">
                  <Link
                    href="#"
                    className="text-blue-600 hover:underline text-[12px]"
                  >
                    مشاهده همه{" "}
                    {activeHotel === "internal"
                      ? "هتل‌های داخلی"
                      : "هتل‌های خارجی"}
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 2 */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>رزرو اقامتگاه</NavigationMenuTrigger>
          <NavigationMenuContent className="w-75">
            <div className="w-full p-3">
              {eghamatgah.map((item) => (
                <NavigationMenuLink
                  key={item.title}
                  className="w-full p-3 my-2 cursor-pointer"
                >
                  <div className="w-full flex justify-between items-center text-[12px]">
                    <span className="ml-2">{item.title}</span>
                    <span className="text-gray-500">{item.description}</span>
                  </div>
                </NavigationMenuLink>
              ))}
              <div className="mt-6 text-center ">
                <Link
                  href="#"
                  className="text-blue-600 hover:underline text-[12px]"
                >
                  مشاهده همه اقامتگاه ها
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 3 */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>رزرو تور</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex w-125 bg-white rounded-2xl">
              {/* ستون سمت راست */}
              <div className="w-30 py-5 border-l *:text-[12px]!">
                <div
                  onMouseEnter={() => setActiveHotel("internal")}
                  className={`cursor-pointer p-2  transition
            ${
              activeHotel === "internal"
                ? "bg-gray-100 text-red-500"
                : "hover:bg-gray-50"
            }`}
                >
                  تور های داخلی
                </div>

                <div
                  onMouseEnter={() => setActiveHotel("external")}
                  className={`cursor-pointer p-2 font-medium transition
            ${
              activeHotel === "external"
                ? "bg-gray-100 text-red-500"
                : "hover:bg-gray-50"
            }`}
                >
                  تور های خارجی
                </div>
              </div>

              {/* ستون لیست */}
              <div className="flex-1 p-6 w-87.5 ">
                {(activeHotel === "internal" ? tour : foreigntour).map(
                  (item) => (
                    <NavigationMenuLink
                      key={item.title}
                      className="block cursor-pointer
             rounded-lg p-3 hover:bg-gray-100 text-[12px]"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{item.title}</span>

                        <span className="text-gray-500 text-[12px]">
                          {item.description}
                        </span>
                      </div>
                    </NavigationMenuLink>
                  ),
                )}

                <div className="mt-6 text-center ">
                  <Link
                    href="#"
                    className="text-blue-600 hover:underline text-[12px]"
                  >
                    مشاهده همه{" "}
                    {activeHotel === "internal"
                      ? "تور های داخلی"
                      : "تور های خارجی"}
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 4 */}
        <NavigationMenuItem className="hidden lg:block">
          <NavigationMenuTrigger>رزرو پرواز</NavigationMenuTrigger>
        </NavigationMenuItem>

        {/* 5 */}
        <NavigationMenuItem className="hidden lg:block">
          <NavigationMenuTrigger>بلیط تفریحات</NavigationMenuTrigger>
          <NavigationMenuContent className="w-75">
            <div className="w-full p-3">
              {Ticket.map((item) => (
                <NavigationMenuLink
                  key={item.title}
                  className="w-full p-3 my-2 cursor-pointer"
                >
                  <div className="w-full flex justify-between items-center text-[12px]">
                    <span className="ml-2">{item.title}</span>
                    <span className="text-gray-500">{item.description}</span>
                  </div>
                </NavigationMenuLink>
              ))}
              <div className="mt-6 text-center ">
                <Link
                  href="#"
                  className="text-blue-600 hover:underline text-[12px]"
                >
                  مشاهده همه تفریحات
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* 6 */}
        <NavigationMenuItem className="hidden xl:block">
          <NavigationMenuTrigger>بیشتر</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid  **:my-2 w-[200px]">
              <li>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2">
                      درباره ما
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2">
                      تماس با ما
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2">
                      مجله اقامت 24
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2">
                      آژانس و سازمان ها
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2">
                      ثبت هتل و اقامتگاه
                    </Link>
                  }
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
