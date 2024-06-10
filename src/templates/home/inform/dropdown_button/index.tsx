import React, { useCallback, useState, useEffect, useMemo } from "react";
import { IoIosArrowDown } from "react-icons/io";
import style from "./main.module.scss";

interface DropdownButtonProps {
  placeHolder?: string;
  value: string;
  items: string[];
  onSelect: (item: string, index: number) => void;
  className?: string;
}

/**
 * DropdownButton Component
 *
 * This component renders a dropdown button with a list of items. When an item is selected,
 * the dropdown closes and the selected item is displayed as the button's label.
 *
 * @param {DropdownButtonProps} props - The properties object.
 * @returns {JSX.Element} The rendered DropdownButton component.
 */
export const DropdownButton: React.FC<DropdownButtonProps> = (props) => {
  const { placeHolder, value, items, onSelect, className } = props;

  const [open, setOpen] = useState(false);
  const onItem = useCallback(
    (selectedItem: string, index: number) => {
      setOpen(false);
      onSelect(selectedItem, index);
    },
    [onSelect],
  );
  return (
    <div
      className="group dropdown dropdown-open"
      onBlur={(e) => {
        setOpen((prev) => false);
      }}
    >
      <div
        tabIndex={0}
        role="button"
        className={`btn !bg-white ${open ? "rounded-b-none" : ""} ${className} flex w-full !scale-100 flex-row items-center justify-between text-violet-950`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <h1
          className={`font-kanit text-base font-medium leading-normal ${
            placeHolder !== value ? "" : "text-slate-500"
          }`}
        >
          {value || placeHolder}
        </h1>
        <IoIosArrowDown
          className={`text-[24px] duration-200 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[3] rounded-box rounded-t-none bg-slate-100 p-2 ${
          open ? " " : "!scale-y-0  !opacity-0"
        } w-full`}
      >
        <div
          className="flex max-h-[152px] w-full flex-col gap-y-2 overflow-y-auto"
          id={style.dropdownContent}
        >
          {items.map((value, index) => (
            <button
              key={index}
              onClick={() => onItem(value, index)}
              className="w-full rounded-box px-4 py-2 text-left font-kanit text-base font-medium leading-normal text-violet-950 duration-200 hover:bg-zinc-200"
            >
              {value}
            </button>
          ))}
        </div>
      </ul>
    </div>
  );
};
