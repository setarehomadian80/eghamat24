import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowRight,
  Backpack,
  BookOpenText,
  FileText,
  Hotel,
  House,
  LucideIcon,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  PlaneTakeoff,
  Search,
  User,
  X,
} from "lucide-react";

type buttonText = {
  id: number;
  txt: string;
  link: string;
  icon: LucideIcon;
};

const ButtonText: buttonText[] = [
  { id: 1, txt: "جستجو", link: "#", icon: Search },
  { id: 2, txt: "پیگیری رزرو", link: "#", icon: MessageSquareText },
  { id: 3, txt: "حساب کاربری", link: "#", icon: User },
  { id: 4, txt: "هتل های داخلی", link: "#", icon: Hotel },
  { id: 5, txt: "هتل های خارجی", link: "#", icon: Hotel },
  { id: 6, txt: "اقامتگاه های داخلی", link: "#", icon: House },
  { id: 7, txt: "تور های داخلی ", link: "#", icon: Backpack },
  { id: 8, txt: "تور های خارجی", link: "#", icon: Backpack },
  { id: 9, txt: "رزرو پرداخت", link: "#", icon: PlaneTakeoff },
  { id: 10, txt: "بلیط تفریحات", link: "#", icon: MapPin },
  { id: 11, txt: "مجله اقامت 24", link: "#", icon: BookOpenText },
  { id: 12, txt: "ثبت هتل و اقامتگاه", link: "#", icon: Hotel },
  { id: 13, txt: "آژانس ها و سازمان ها ", link: "#", icon: Hotel },
  { id: 14, txt: "درباره ما", link: "#", icon: FileText },
  { id: 15, txt: "تماس با ما", link: "#", icon: Phone },
];

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={20} />
      </SheetTrigger>

      <SheetContent
        side="right"
        dir="rtl"
        showCloseButton={false}
        className="w-full!"
      >
        <SheetHeader className="p-0! border-b f">
          <div className="flex justify-between px-4 py-3">
            <div className="flex items-center gap-2 h-full!">
              <ArrowRight />
              <h2 className="text-[22px]">منو</h2>
            </div>
            <SheetClose>
              <X />
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="w-full overflow-y-scroll">
          {ButtonText.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center cursor-pointer gap-4 h-16 p-4"
              >
                <Icon size={20} />
                <button className="text-[12px]">{item.txt}</button>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
