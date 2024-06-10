import { SelectTabButton } from "@/components";
import { CircularProgress } from "@nextui-org/react";
import { FunctionComponent, useState } from "react";
import { ScoreChart } from "./score_chart";
import { SubjectBarChart } from "./subject_bar_chart";
import { RateIndicator } from "./rate_indicator";

export const ScoreDistribution: FunctionComponent = () => {
  const [tab, setTab] = useState("ม.4");
  const grades = ["ม.4", "ม.5", "ม.6"];
  const handleTab = (val: string) => {
    setTab((prev) => val);
  };
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-row items-center justify-start gap-x-4">
        {grades.map((val, index) => (
          <div key={index}>
            <button className="group pb-[11px] pt-[12px]">
              <input
                type="radio"
                name="grade"
                id={val}
                defaultChecked={val == tab ? true : false}
                className="peer hidden"
                onChange={() => handleTab(val)}
              />
              <label
                className="rounded-tl-xl rounded-tr-xl bg-orange-300 px-5  py-4 font-kanit text-lg font-semibold text-violet-950 transition-all duration-200 peer-checked:!bg-violet-950 peer-checked:!text-white"
                htmlFor={val}
              >
                {val}
              </label>
            </button>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-y-5 rounded-bl-xl rounded-br-xl rounded-tr-xl bg-violet-950 p-5">
        <SelectTabButton
          items={["เทอม 1", "เทอม 2"]}
          onItem={(item, index) => {}}
        />
        <ScoreChart/>
        <SubjectBarChart/>
        <RateIndicator/>
      </div>
    </div>
  );
};
