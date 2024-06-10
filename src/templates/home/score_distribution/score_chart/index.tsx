import { CircularProgress } from "@nextui-org/react";
import { FunctionComponent } from "react";

export const ScoreChart:FunctionComponent = ()=>{
    return <div className="flex w-full flex-col gap-y-4 rounded-xl bg-white p-[15px]">
    <div className="flex flex-row items-center justify-start gap-x-2">
      <div className="flex size-fit rounded-lg bg-violet-950 p-2">
        <img src="/score_ratio_icon.png" alt="" className="size-5" />
      </div>
      <h1 className=" font-kanit text-lg font-bold leading-normal text-violet-950">
        อัตราส่วนคะแนน
      </h1>
    </div>
    <div className="flex flex-row items-center justify-between">
      <CircularProgress
        classNames={{
          svg: "w-16 h-16",
          value:
            "text-violet-950 text-sm font-normal font-kanit leading-snug",
          indicator: "stroke-orange-600",
          track: "stroke-indigo-300",
          label:
            "text-violet-950 text-sm font-normal font-kanit leading-tight",
        }}
        aria-label="Loading..."
        label="ภาษาไทย"
        size="lg"
        value={35}
        color="warning"
        strokeWidth={3}
        formatOptions={{
          style: "unit",
          unit: "percent",
        }}
        showValueLabel={true}
      />
       <CircularProgress
        classNames={{
          svg: "w-16 h-16",
          value:
            "text-violet-950 text-sm font-normal font-kanit leading-snug",
          indicator: "stroke-amber-400",
          track: "stroke-indigo-300",
          label:
            "text-violet-950 text-sm font-normal font-kanit leading-tight",
        }}
        aria-label="Loading..."
        label="คณิตศาสตร์"
        size="lg"
        value={35}
        color="warning"
        strokeWidth={3}
        formatOptions={{
          style: "unit",
          unit: "percent",
        }}
        showValueLabel={true}
      />
       <CircularProgress
        classNames={{
          svg: "w-16 h-16",
          value:
            "text-violet-950 text-sm font-normal font-kanit leading-snug",
          indicator: "stroke-purple-500",
          track: "stroke-indigo-300",
          label:
            "text-violet-950 text-sm font-normal font-kanit leading-tight",
        }}
        aria-label="Loading..."
        label="ฟิสิกส์"
        size="lg"
        value={20}
        color="warning"
        strokeWidth={3}
        formatOptions={{
          style: "unit",
          unit: "percent",
        }}
        showValueLabel={true}
      />
       <CircularProgress
        classNames={{
          svg: "w-16 h-16",
          value:
            "text-violet-950 text-sm font-normal font-kanit leading-snug",
          indicator: "stroke-green-500",
          track: "stroke-indigo-300",
          label:
            "text-violet-950 text-sm font-normal font-kanit leading-tight",
        }}
        aria-label="Loading..."
        label="ภาษาอังกฤษ"
        size="lg"
        value={10}
        color="warning"
        strokeWidth={3}
        formatOptions={{
          style: "unit",
          unit: "percent",
        }}
        showValueLabel={true}
      />
    </div>
  </div>
}