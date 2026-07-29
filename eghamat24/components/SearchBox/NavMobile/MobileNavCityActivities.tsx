"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideIcon, Map, X } from "lucide-react";
import { useState } from "react";

type ActivitiesName = {
  id: number;
  city: string;
  map: string;
  icon: LucideIcon;
};

const activities: ActivitiesName[] = [
  { id: 1, city: "دبی", map: "امارات متحده عربی", icon: Map },
  { id: 2, city: "استانبول", map: "ترکیه", icon: Map },
  { id: 3, city: "کیش", map: "ایران", icon: Map },
];

export function MobileNavCityActivities() {
  const [open, setOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("شهر");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className=" w-full">
          <input
            className="border w-full! p-4 rounded-[12px]
           text-[12px] cursor-pointer"
            type="text"
            value={selectedActivity}
            readOnly
          />
      </SheetTrigger>

      <SheetContent
        side="right"
        dir="rtl"
        showCloseButton={false}
        className="w-full!"
      >
        <SheetHeader className="p-0 border-b">
          <div className="flex justify-between px-4 py-3">
            <h2 className="text-[16px]">شهر</h2>

            <SheetClose>
              <X />
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="p-4">
          {activities.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedActivity(item.city);
                setOpen(false);
              }}
              className="flex items-center gap-4 h-16 cursor-pointer"
            >
              <item.icon size={20} />

              <div>
                <p className="text-[12px]">{item.city}</p>
                <p className="text-gray-500 text-[11px]">{item.map}</p>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
