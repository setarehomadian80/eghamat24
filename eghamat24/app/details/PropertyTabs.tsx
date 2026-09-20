
export default function DetailTabs() {
  return (
    <div className="overflow-hidden w-full mt-6 md:hidden">
      <div
        className="
          flex 
          items-center
          h-10
          gap-1 
          text-[10px] 
          *:w-[70px]
          overflow-x-auto 
          *:shrink-0
          *:text-center
          text-gray-600
          *:rounded-2xl
          *:cursor-pointer
          border-b-2
          scrollbar-none
          "
      >
        <span>درباره هتل</span>
        <span>اتاق ها</span>
        <span>قوانین</span>
        <span>نقشه</span>
        <span>نظرات</span>
        <span>پرسش و پاسخ</span>
      </div>
    </div>
  );
}
