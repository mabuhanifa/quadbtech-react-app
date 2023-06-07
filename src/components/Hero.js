import React from "react";

export default function Hero() {
  return (
    <div>
      <h1 className="text-center mb-5 text-gray-400 text-2xl font-bold">
        Best Price to Trade
      </h1>

      <div className="flex justify-around items-center">
        <div>
          <h1 className="text-teal-500 text-4xl text-center font-[500]">0.76 %</h1>
          <p className="text-gray-500 text-center font-[500]">5 Mins</p>
        </div>
        <div>
          <h1 className="text-teal-500 text-4xl text-center font-[500]">1.43 %</h1>
          <p className="text-gray-500 text-center font-[500]">1 Hour</p>
        </div>
        <div>
          <h1 className="text-center text-white text-[80px]">
            ₹ 25,04,772
          </h1>
          <p className="text-center text-gray-500">
            Average BTC/INR net price including commission
          </p>
        </div>
        <div>
          <h1 className="text-teal-500 text-4xl text-center font-[500]">8.73 %</h1>
          <p className="text-gray-500 text-center font-[500]">1 Day</p>
        </div>
        <div>
          <h1 className="text-teal-500 text-4xl text-center font-[500]">18.13 %</h1>
          <p className="text-gray-500 text-center font-[500]">7 Days</p>
        </div>
      </div>
    </div>
  );
}
