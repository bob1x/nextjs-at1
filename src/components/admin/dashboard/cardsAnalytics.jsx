"use client";
import AreaChartPlot from "./areaChartPlot";
import AreaUsersList from "./areaUserList";
const CardsAnalytics = () => {
  return (
    <>
      <section>
        <div className="flex m-4 gap-2">
          <div
            className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow
rounded h-300px"
          >
            <div className="">
              <p className="text-white font-bold">Total returns</p>
              <p className="py-4 font-bold text-yellow-500">80,000 TND</p>
              <p className="text-green-300">+24.5%</p>
            </div>
          </div>
          <div
            className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow
rounded max-h-300px"
          >
            <div className="">
              <p className="text-white font-bold">Total sales</p>
              <p className="py-4 font-bold text-yellow-500">35,000 TND</p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div
            className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow
rounded max-h-300px"
          >
            <div className="">
              <p className="text-white font-bold">Total subscriptions</p>
              <p className="py-4 font-bold text-yellow-500">21,000 TND</p>
              <p className="text-green-300">+24.5%</p>
            </div>
          </div>
          <div
            className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow
rounded h-300px"
          >
            <div className="">
              <p className="text-white font-bold">Total orders</p>
              <p className="py-4 font-bold text-yellow-500">100,000 TND</p>
              <p className="text-red-300">-14.5%</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex m-4 gap-2">
        <div className="w-full h-[300px] bg-gray-700 rounded">
        <AreaChartPlot/>
        </div>
      </section>
      <section className="flex m-4 gap-2">
        <div className="w-full h-[250px] bg-gray-700 rounded">
        <AreaUsersList />
        </div>
      </section>
    </>
  );
};
export default CardsAnalytics;
