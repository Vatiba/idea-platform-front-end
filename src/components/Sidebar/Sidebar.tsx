import React from "react";
import CurrencyType from "../../types/CurrencyType";
import CurrencyButton from "../CurrencyBtn";
import Option from "../../types/Option";
import FilterOption from "../FilterOption";

type SidebarProps = {
   selectedCurrency: CurrencyType
   setSelectedCurrency: React.Dispatch<React.SetStateAction<CurrencyType>>
   options: Option[]
   setOptions: React.Dispatch<React.SetStateAction<Option[]>>
}

const currencies: CurrencyType[] = ["RUB", "USD", "EUR"];

function Sidebar(props: SidebarProps) {
   const {
      selectedCurrency,
      setSelectedCurrency,
      options,
      setOptions
   } = props;

   const handleChange = (value: CurrencyType) => {
      setSelectedCurrency(value)
   }

   const handleCheck = (id: number) => {
      setOptions((prev) =>
         prev.map((option) =>
            option.id === id ? { ...option, checked: !option.checked } : option
         )
      );
   };

   const handleOnlyClick = (id: number) => {
      setOptions((prev) =>
         prev.map((option) =>
            option.id == id ? option : { ...option, checked: false }
         )
      );
   };

   return (
      <>
         <h3 className='text-gray text-sm font-semibold uppercase mb-2 pt-5 px-5'>
            Валюта
         </h3>
         <div className="flex border border-slate-300 rounded-lg overflow-hidden mx-5">
            {currencies.map((currency) => (
               <CurrencyButton
                  key={currency}
                  value={currency}
                  isSelected={selectedCurrency === currency}
                  onChange={handleChange}
               />
            ))}
         </div>
         <h3 className='text-gray text-sm font-semibold uppercase mt-7 mb-2 px-5'>
            Количество пересадок
         </h3>
         <div className="flex flex-col mb-5">
            {options.map((option) => (
               <FilterOption
                  key={option.id}
                  id={option.id}
                  label={option.label}
                  checked={option.checked}
                  onCheck={handleCheck}
                  onOnlyClick={handleOnlyClick}
               />
            ))}
         </div>
      </>
   )
}

export default Sidebar