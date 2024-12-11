import { useState } from "react";

type FilterOptionProps = {
   id: number;
   label: string;
   checked: boolean;
   onCheck: (id: number) => void;
   onOnlyClick: (id: number) => void;
};

function FilterOption(props: FilterOptionProps) {
   const {
      id,
      label,
      checked,
      onCheck,
      onOnlyClick,
   } = props;
   const [isMouseEnter, setIsMouseEnter] = useState(false);

   return (
      <div
         className="flex items-center py-1 px-5 transition-colors duration-200 hover:bg-blue-100 cursor-pointer"
         onMouseEnter={() => setIsMouseEnter(true)}
         onMouseLeave={() => setIsMouseEnter(false)}
      >
         <input
            type="checkbox"
            id={`option-${id}`}
            checked={checked}
            onChange={() => onCheck(id)}
            className="cursor-pointer mr-2" />
         <label htmlFor={`option-${id}`} className="text-gray text-sm cursor-pointer">
            {label}
         </label>
         {isMouseEnter && checked && (
            <button
               onClick={() => onOnlyClick(id)}
               className="ml-auto text-blue-500 hover:underline text-sm"
            >
               Только
            </button>
         )}
      </div>
   );
}

export default FilterOption;