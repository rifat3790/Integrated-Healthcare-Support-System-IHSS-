import Image from "next/image";
import BannerPage from "./Banner/page";
import FeaturePage from "./Feature/page";

export default function Home() {
  return (
    <div>
      <BannerPage></BannerPage>
      <FeaturePage></FeaturePage>
    </div>
  );
}
