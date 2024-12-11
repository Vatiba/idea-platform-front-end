import React from "react";
import CurrencyType from "../../types/CurrencyType";
import currencyConverter from "../../utils/currencyConverter";

type FlightCardProps = {
   origin: string;
   origin_name: string;
   destination: string;
   destination_name: string;
   departure_date: string;
   departure_time: string;
   arrival_date: string;
   arrival_time: string;
   carrier: string;
   stops: number;
   price: number;
   currency: CurrencyType
};

const FlightCard: React.FC<FlightCardProps> = ({
   origin,
   origin_name,
   destination,
   destination_name,
   departure_date,
   departure_time,
   arrival_date,
   arrival_time,
   carrier,
   stops,
   price,
   currency
}) => {
   const renderStops = (stops: number) => {
      if (stops === 0) return "Без пересадок";
      if (stops === 1) return "1 пересадка";
      return `${stops} пересадки`;
   };

   return (
      <div className="flex justify-between items-center bg-white shadow rounded-lg p-4">
         {/* Airline Logo and Carrier Name */}
         <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center text-gray font-bold text-lg">
               {carrier}
            </div>
            {/* <div className="ml-4 font-semibold text-gray-800">Turkish Airlines</div> */}

            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition flex items-center justify-center">
               Купить за {currencyConverter(currency, price)}
            </button>
         </div>

         {/* Flight Times and Stops */}
         <div className="flex-1 mx-8 text-center text-gray">
            <div className="text-2xl font-bold">
               {departure_time} <span className="text-sm font-normal">→</span>{" "}
               {arrival_time}
            </div>
            <div className="text-gray-600 text-sm mt-1">{renderStops(stops)}</div>
            <div className="text-gray-600 text-sm mt-1">
               {origin}, {origin_name} → {destination}, {destination_name}
            </div>
            <div className="text-gray-500 text-xs mt-1">
               {departure_date} → {arrival_date}
            </div>
         </div>

      </div>
   );
};

export default FlightCard;
