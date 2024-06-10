import { FunctionComponent } from "react";

export const SubjectBarChart: FunctionComponent = () => {
  return (
    <div className="flex w-full flex-col gap-y-4 rounded-xl bg-white p-[15px]">
      <div className="flex flex-row items-center justify-start gap-x-2">
        <div className="flex size-fit rounded-lg bg-violet-950 p-2">
          <img src="/score_bar_icon.png" alt="" className="size-5" />
        </div>
        <h1 className=" font-kanit text-lg font-bold leading-normal text-violet-950">
          คะแนนในแต่ละวิชา
        </h1>
      </div>
    </div>
  );
};
