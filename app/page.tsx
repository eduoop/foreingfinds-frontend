import { Suspense } from "react";
import { Container } from "./components/Container";
import ListAdsHome from "./components/Lists/AdsHome/ListAdsHome";
import 'react-loading-skeleton/dist/skeleton.css'
import AdSquareSkeleton from "./components/Cards/AdSquareSkeleton";
import { Banners } from "./components/Banners/Banners";

export default async function Home() {

  return (
    <Container minAllVh={true}>
      <>
        <div className="w-full mb-4 mt-4">
          <Banners />
        </div>
        <h1 className='text-2xl mt-7 font-normal text-primaryGraffiti mb-5'>Anúncios publicados</h1>
        <Suspense
          fallback={
            <div className="grid gap-2 tablet:gap-4 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5">
              {<AdSquareSkeleton quantity={8} />}
            </div>
          }>
          <ListAdsHome />
        </Suspense>
      </>
    </Container>
  )
}
