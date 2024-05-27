import { DropdownButton } from "./dropdown_button";

export const Inform = () => {
  const lineStudies = ["วิทย์-คณิต", "ศิลป์-คำนวน", "ศิลป์-ภาษา"];
  const interestedFaculty = [
    "คณะจิตวิทยา",
    "คณะเศรษฐศาสตร์",
    "คณะบริหารธุรกิจ",
    "คณะเภสัชศาสตร์",
    "คณะนิติศาสตร์",
    "คณะวิทยาศาสตร์",
  ];
  const departmentItems = [
    "สาขาคณิตศาสตร์",
    "สาขาวิทยาการคอมพิวเตอร์",
    "สาขาเคมี",
    "สาขาเคมีประยุกต์",
  ];
  return (
    <div className=" relative">
      <div className="absolute z-10 flex size-full flex-col items-center justify-start space-y-10 px-8 pb-[180px] pt-8">
        <img src="/inform.png" alt="" />
        <div className="flex size-full flex-col justify-between rounded-2xl bg-violet-950 px-5 py-3">
          <h1 className="font-['Kanit'] text-2xl font-semibold leading-9 text-white">
            กรอกข้อมูลเพื่อทำการสมัคร
          </h1>
          <DropdownButton
            placeHolder={"สายการเรียน"}
            items={lineStudies}
            onSelect={(item) => {}}
          />
          <DropdownButton
            placeHolder={"คณะที่สนใจ"}
            items={interestedFaculty}
            onSelect={(item) => {}}
          />
          <DropdownButton
            placeHolder={"เลือกสาขา"}
            items={departmentItems}
            onSelect={(item) => {}}
          />
        </div>
      </div>
      <img src="/inform_bg.png" alt="" />
    </div>
  );
};
