import CurrencyType from "../../types/CurrencyType";

type CurrencyButtonProps = {
   value: CurrencyType;
   isSelected: boolean;
   onChange: (value: CurrencyType) => void;
}

function CurrencyButton(props: CurrencyButtonProps) {
   const {
      isSelected,
      onChange,
      value
   } = props;

   return (
      <label className="flex-1 cursor-pointer">
         <input
            type="radio"
            name="currency"
            value={value}
            className="hidden peer"
            checked={isSelected}
            onChange={() => onChange(value)} />
         <div
            className={`px-4 py-2 text-center transition-colors duration-200 ${isSelected
               ? "bg-blue-500 text-white"
               : "bg-white text-blue-500 hover:bg-blue-100"}`}
         >
            {value}
         </div>
      </label>
   );
}

export default CurrencyButton;