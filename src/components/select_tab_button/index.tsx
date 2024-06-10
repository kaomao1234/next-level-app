import React, { useEffect, useRef, useState, useCallback } from "react";

interface SelectTabButtonProps {
  items: string[];
  initItem?: number;
  onItem: (item: string, index: number) => void;
  className?: string;
  buttonClassName?: string;
  thumbClassName?: string;
  textColor?: string;
  selectedTextColor?: string;
}

export const SelectTabButton: React.FC<SelectTabButtonProps> = (props) => {
  const {
    items,
    initItem = 0,
    onItem,
    className = "",
    buttonClassName = "",
    thumbClassName = "",
    textColor = "text-white",
    selectedTextColor = "text-violet-950",
  } = props;

  const [thumbPos, setThumbPos] = useState(0);
  const [item, setItem] = useState(initItem);
  const itemRef = useRef<(HTMLButtonElement | null)[]>([]);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  const addRef = (el: HTMLButtonElement | null, index: number) => {
    if (el) {
      itemRef.current[index] = el;
    }
  };

  const calculateThumbPos = useCallback((el: HTMLButtonElement) => {
    const buttonWidth = el.offsetWidth;
    const buttonLeft = el.offsetLeft;
    const buttonCenter = buttonLeft + buttonWidth / 2;
    return buttonCenter - (thumbRef.current?.offsetWidth || 0) / 2;
  }, []);

  const handleClick = (index: number) => {
    setItem(index);
    setThumbPos(calculateThumbPos(itemRef.current[index]!));
    onItem(items[index], index);
  };

  useEffect(() => {
    if (thumbRef.current && itemRef.current[item]) {
      setThumbPos(calculateThumbPos(itemRef.current[item]!));
    }
  }, [calculateThumbPos, item]);

  useEffect(() => {
    const initialThumbWidth = (1 / items.length) * 100;
    if (thumbRef.current) {
      thumbRef.current.style.width = `${initialThumbWidth}%`;
      setThumbPos(calculateThumbPos(itemRef.current[item]!));
    }

    const handleResize = () => {
      if (itemRef.current[item]) {
        setThumbPos(calculateThumbPos(itemRef.current[item]!));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [items.length, calculateThumbPos, item]);

  return (
    <div
      className={`relative min-h-9 w-full rounded-xl border border-white ${className}`}
    >
      <div
        className="absolute z-[1] flex size-full w-full flex-row items-center justify-around bg-transparent"
        style={{ padding: `0px 8px` }}
      >
        {items.map((value, index) => (
          <button
            className={`font-kanit text-base font-medium leading-normal duration-200 ${item === index ? selectedTextColor : textColor} ${buttonClassName}`}
            onClick={() => handleClick(index)}
            key={index}
            ref={(el) => addRef(el, index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div
        ref={thumbRef}
        className={`absolute inset-y-0 z-0 my-1 rounded-lg bg-white duration-200 ${thumbClassName}`}
        style={{ left: `${thumbPos}px` }}
      />
    </div>
  );
};
