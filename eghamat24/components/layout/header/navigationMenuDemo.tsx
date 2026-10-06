"use client";

import * as React from "react";
import citiesHotel from "@/data/citiesHotel.json";
import Link from "next/link";
import citiesAccommodation from "@/data/citiesAccommodation.json";
import citiesTour from "@/data/citiestour.json";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type city_hotel = {
  id: number;
  cityId: number;
  name: string;
  discount: string;
  slug: string;
  href: string;
  type: "iran" | "foreign";
};

type city_Accommodation = {
  id: number;
  cityId: number;
  name: string;
  discount: string;
  slug: string;
  href: string;
};

type TourMenu = {
  id: number;
  cityId: number;
  city: string;
  name: string;
  discount: string;
  slug: string;
  href: string;
  type: "iran" | "foreign";
};

const tour_menu = citiesTour as TourMenu[];
const hotel_menu = citiesHotel as city_hotel[];
const Accommodation_menu = citiesAccommodation as city_Accommodation[];

const iranCities = hotel_menu.filter((city) => city.type === "iran");
const foreignCities = hotel_menu.filter((city) => city.type === "foreign");
const iranTours = tour_menu.filter((item) => item.type === "iran");
const foreignTours = tour_menu.filter((item) => item.type === "foreign");

///////////////////////////
const Flight: { title: string; href: string }[] = [
  {
    title: "بلیط هواپیما تهران",
    href: "/TehranFlights.html",
  },
  {
    title: "بلیط هواپیما مشهد",
    href: "/MashhadFlights.html",
  },
  {
    title: "بلیط هواپیما تبریز",
    href: "/TabrizFlights.html",
  },
  {
    title: "بلیط هواپیما اصفهان",
    href: "/EsfahanFlights.html",
  },
  {
    title: "بلیط هواپیما کیش",
    href: "/KishFlights.html",
  },
];

const foreignFlight: { title: string; href: string }[] = [
  {
    title: "بلیط هواپیما استانبول",
    href: "/IstanbulFlights.html",
  },
  {
    title: "بلیط هواپیما تفلیس",
    href: "/TbilisiFlights.html",
  },
  {
    title: "بلیط هواپیما ایروان",
    href: "/YerevanFlights.html",
  },
  {
    title: "بلیط هواپیما مسقط",
    href: "/MuscatFlights.html",
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
  const [activeHotel, setActiveHotel] = React.useState<
    "internal" | "external"
  >("internal");

  const [activeTour, setActiveTour] = React.useState<
    "internal" | "external"
  >("internal");

  const [activeFlight, setActiveFlight] = React.useState<
    "internal" | "external"
  >("internal");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* 1 */}
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuTrigger>رزرو هتل</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex w-125 bg-white rounded-2xl">
              {/* ستون سمت راست */}
              <div className="w-30 py-5 border-l *:text-[12px]!">
                <div
                  onMouseEnter={() => setActiveHotel("internal")}
                  className={`cursor-pointer p-2 transition
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
              <div className="flex-1 p-6 w-87.5">
                {(activeHotel === "internal"
                  ? iranCities
                  : foreignCities
                ).map((item) => (
                  <NavigationMenuLink
                    key={item.id}
                    render={<Link href={`/hotel/${item.slug}`} />}
                    className="block cursor-pointer
             rounded-lg p-3 hover:bg-gray-100 text-[12px]"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{item.name}</span>

                      <span className="text-gray-500 text-[12px]">
                        {item.discount}
                      </span>
                    </div>
                  </NavigationMenuLink>
                ))}

                <div className="mt-6 text-center">
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
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuTrigger>رزرو اقامتگاه</NavigationMenuTrigger>

          <NavigationMenuContent className="w-75">
            <div className="w-full p-3">
              {Accommodation_menu.map((item) => (
                <NavigationMenuLink
                  key={item.id}
                  render={<Link href={`/accommodation/${item.slug}`} />}
                  className="w-full p-3 my-2 cursor-pointer"
                >
                  <div className="w-full flex justify-between items-center text-[12px]">
                    <span className="ml-2">{item.name}</span>
                    <span className="text-gray-500">{item.discount}</span>
                  </div>
                </NavigationMenuLink>
              ))}

              <div className="mt-6 text-center">
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
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuTrigger>رزرو تور</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex w-125 bg-white rounded-2xl">
              {/* ستون سمت راست */}
              <div className="w-30 py-5 border-l *:text-[12px]!">
                <div
                  onMouseEnter={() => setActiveTour("internal")}
                  className={`cursor-pointer p-2 transition
          ${
            activeTour === "internal"
              ? "bg-gray-100 text-red-500"
              : "hover:bg-gray-50"
          }`}
                >
                  تور های داخلی
                </div>

                <div
                  onMouseEnter={() => setActiveTour("external")}
                  className={`cursor-pointer p-2 font-medium transition
          ${
            activeTour === "external"
              ? "bg-gray-100 text-red-500"
              : "hover:bg-gray-50"
          }`}
                >
                  تور های خارجی
                </div>
              </div>

              {/* ستون لیست */}
              <div className="flex-1 p-6 w-87.5">
                {(activeTour === "internal" ? iranTours : foreignTours).map(
                  (item) => (
                    <NavigationMenuLink
                      key={item.id}
                      render={
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        />
                      }
                      className="
              block cursor-pointer
              rounded-lg p-3
              hover:bg-gray-100
              text-[12px]
            "
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{item.name}</span>

                        <span className="text-gray-500 text-[12px]">
                          {item.discount}
                        </span>
                      </div>
                    </NavigationMenuLink>
                  ),
                )}

                <div className="mt-6 text-center">
                  <Link
                    href="#"
                    className="text-blue-600 hover:underline text-[12px]"
                  >
                    مشاهده همه{" "}
                    {activeTour === "internal"
                      ? "تور های داخلی"
                      : "تور های خارجی"}
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 4 */}
        <NavigationMenuItem className="hidden lg:block cursor-pointer">
          <NavigationMenuTrigger>رزرو پرواز</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex w-125 bg-white rounded-2xl">
              {/* ستون سمت راست */}
              <div className="w-30 py-5 border-l *:text-[12px]!">
                <div
                  onMouseEnter={() => setActiveFlight("internal")}
                  className={`cursor-pointer p-2 transition
            ${
              activeFlight === "internal"
                ? "bg-gray-100 text-red-500"
                : "hover:bg-gray-50"
            }`}
                >
                  پرواز داخلی
                </div>

                <div
                  onMouseEnter={() => setActiveFlight("external")}
                  className={`cursor-pointer p-2 font-medium transition
            ${
              activeFlight === "external"
                ? "bg-gray-100 text-red-500"
                : "hover:bg-gray-50"
            }`}
                >
                  پرواز خارجی
                </div>
              </div>

              {/* ستون لیست */}
              <div className="flex-1 p-6 w-87.5">
                {(activeFlight === "internal" ? Flight : foreignFlight).map(
                  (item) => (
                    <NavigationMenuLink
                      render={<Link href={item.href} />}
                      key={item.title}
                      className="block cursor-pointer
             rounded-lg p-3 hover:bg-gray-100 text-[12px]"
                    >
                      <span className="font-medium">{item.title}</span>
                    </NavigationMenuLink>
                  ),
                )}

                <div className="mt-6 text-center">
                  <Link
                    href="#"
                    className="text-blue-600 hover:underline text-[12px]"
                  >
                    مشاهده همه{" "}
                    {activeFlight === "internal"
                      ? "تور های داخلی"
                      : "تور های خارجی"}
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 5 */}
        <NavigationMenuItem className="hidden lg:block cursor-pointer">
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

              <div className="mt-6 text-center">
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
        <NavigationMenuItem className="hidden xl:block cursor-pointer">
          <NavigationMenuTrigger>بیشتر</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid **:my-2 w-[200px]">
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