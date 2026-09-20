import reviews from "@/data/reviews.json";

type Props = {
  title?: string;
};

export default function PropertyReviews({ title = "نظرات کاربران" }: Props) {
  return (
    <section className="mt-12" dir="rtl">
      <h2 className="text-[20px] font-bold mb-8">{title}</h2>

      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-4
        gap-6
        "
      >
        {/* ================= Reviews ================= */}
        {/* سمت راست دسکتاپ */}

        <div
          className="
          lg:col-span-3
          order-1
          space-y-5
          "
        >
          {reviews.map((review) => (
            <article
              key={review.id}
              className="
              border
              rounded-xl
              p-5
              bg-white
              "
            >
              {/* Header */}

              <div
                className="
                flex
                justify-between
                items-start
                mb-4
                "
              >
                <div>
                  <h3
                    className="
                    text-sm
                    font-medium
                    "
                  >
                    {review.name}
                  </h3>

                  <p
                    className="
                    text-xs
                    text-gray-400
                    mt-2
                    "
                  >
                    {review.tripType}
                  </p>
                </div>

                <div
                  className="
                  text-green-600
                  font-bold
                  text-sm
                  "
                >
                  😊 {review.rating}
                </div>
              </div>

              <p
                className="
                text-xs
                text-gray-400
                mb-5
                "
              >
                {review.date}
              </p>

              {/* مثبت */}

              <div
                className="
                flex
                gap-3
                mb-4
                "
              >
                <span
                  className="
                  text-green-500
                  text-xl
                  "
                >
                  +
                </span>

                <p
                  className="
                  text-sm
                  leading-7
                  text-gray-700
                  "
                >
                  {review.positive}
                </p>
              </div>

              {/* منفی */}

              <div
                className="
                flex
                gap-3
                "
              >
                <span
                  className="
                  text-red-500
                  text-xl
                  "
                >
                  −
                </span>

                <p
                  className="
                  text-sm
                  leading-7
                  text-gray-700
                  "
                >
                  {review.negative}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ================= Sidebar ================= */}
        {/* سمت چپ دسکتاپ */}

        <aside
          className="
          lg:col-span-1
          order-2
          border
          rounded-xl
          p-5
          bg-white
          h-fit
          "
        >
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-1
            gap-6
            "
          >
            {/* امتیازها */}

            <div>
              {/* امتیاز کلی */}

              <div
                className="
                border
                border-green-400
                bg-[#f5fcf9]
                rounded-lg
                px-4
                py-2
                text-center
                flex
                justify-between
                items-center
                "
              >
                <p
                  className="
                  text-gray-500
                  text-sm
                  "
                >
                  امتیاز کلی کاربران
                </p>

                <div
                  className="
                  text-green-600
                  text-2xl
                  font-bold
                  mt-2
                  "
                >
                  7.5
                  <span className="text-sm">/10</span>
                </div>
              </div>

              {/* نوار امتیازها */}

              <div
                className="
                mt-6
                space-y-5
                "
              >
                {[
                  {
                    title: "امکانات هتل",
                    score: "7.7",
                  },
                  {
                    title: "کیفیت اتاق‌ها",
                    score: "8.2",
                  },
                  {
                    title: "موقعیت مکانی",
                    score: "9.1",
                  },
                  {
                    title: "برخورد پرسنل",
                    score: "8.5",
                  },
                  {
                    title: "قیمت",
                    score: "7.4",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div
                      className="
                      flex
                      justify-between
                      text-xs
                      mb-2
                      "
                    >
                      <span>{item.title}</span>

                      <span>{item.score}</span>
                    </div>

                    <div
                      className="
                      h-[4px]
                      bg-gray-200
                      rounded-full
                      "
                    >
                      <div
                        className="
                        h-full
                        bg-yellow-400
                        rounded-full
                        "
                        style={{
                          width: `${Number(item.score) * 10}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* نوع سفر */}

            <div>
              <ul
                className="
                flex justify-between
                items-center
                
                "
              >
                {[
                  ["سفر با دوستان", "16"],
                  ["سفر انفرادی", "18"],
                  ["سفر خانوادگی", "224"],
                  ["سفر کاری", "25"],
                ].map(([title, count]) => (
                  <li
                    key={title}
                    className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                  text-[12px]
                    "
                  >
                    <span
                      className="
                      text-xs
                      text-gray-600
                      "
                    >
                      {title}
                    </span>

                    <strong>{count}</strong>
                  </li>
                ))}
              </ul>

              <button
                className="
                mt-6
                w-full
                border
                rounded-lg
                py-3
                text-red-500
                text-sm
                "
              >
                ورود و ثبت نظر
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
