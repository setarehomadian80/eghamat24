import CityPropertiesPage from "@/components/PropertyPages/CityPropertiesPage";
import citiesTour from "@/data/citiestour.json";
import tours from "@/data/tour.json";
import { notFound } from "next/navigation";


type CityTour = {
  id: number;
  cityId: number;
  city: string;
  name: string;
  discount: string;
  slug: string;
  href: string;
  type: "iran" | "foreign";
  location: {
    lat: number;
    lng: number;
  };
};



export interface Tour {
  id: number;
  cityId: number;
  name: string;
  slug: string;

  address: string;

  stars: number;

  price: string;

  discount: string;

  rating: string;

  reviewCount: number;

  image: string;

  area: string;

  amenities: string[];

  beds: number;

  mealPlan: string;

  duration: string;

  transport: string;

  badge: string;
}


type Props = {
  params: Promise<{
    slug: string;
  }>;
};



export default async function Page({ params }: Props) {


  const { slug } = await params;



  // پیدا کردن شهر از روی slug
  const city = (citiesTour as CityTour[]).find(
    (item) => item.slug === slug
  );



  if (!city) {
    notFound();
  }



  // فیلتر تورهای همان شهر
 // فیلتر تورهای همان شهر
const filteredTours = (tours as Tour[]).filter(
  (tour) => tour.cityId === city.cityId
);


return (
  <CityPropertiesPage
    city={city}
    properties={filteredTours}
    type="tour"
  />
);

}