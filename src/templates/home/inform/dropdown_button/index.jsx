import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import style from "./main.module.scss";

/**
 * DropdownButton Component
 *
 * This component renders a dropdown button with a list of items. When an item is selected,
 * the dropdown closes and the selected item is displayed as the button's label.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.placeHolder - The placeholder text to display when no item is selected.
 * @param {Array<string>} props.items - The array of items to display in the dropdown.
 * @param {Function} props.onSelect - The callback function to call when an item is selected.
 *
 * @returns {JSX.Element} The rendered DropdownButton component.
 */
export const DropdownButton = (props) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(props.placeHolder);
  const onItem = (item) => {
    props.onSelect(item);
    setOpen((prev) => false);
    setItem((prev) => item);
  };
  return (
    <div className="dropdown dropdown-open">
      <div
        tabIndex={0}
        role="button"
        className={`btn ${open ? "rounded-b-none" : ""} flex w-full !scale-100 flex-row items-center justify-between text-violet-950`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <h1
          className={` font-['Kanit'] text-base font-medium leading-normal ${item != props.placeHolder ? "" : "text-slate-500"}`}
        >
          {item}
        </h1>
        <IoIosArrowDown
          className={`text-[24px] duration-200 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <ul
        tabIndex={0}
        className={` dropdown-content z-[1] rounded-box rounded-t-none bg-slate-100 p-2 ${open ? " " : "!scale-y-0  !opacity-0"} w-full   `}
      >
        <div
          className="flex max-h-[152px] w-full flex-col gap-y-2 overflow-y-auto"
          id={style.dropdownContent}
        >
          {props.items.map((value, index) => {
            return (
              <button
                key={index}
                onClick={() => onItem(value)}
                className=" w-full rounded-box px-4 py-2 text-left font-['Kanit'] text-base font-medium leading-normal text-violet-950 duration-200 hover:bg-zinc-200"
              >
                {value}
              </button>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
