import {
  Fragment,
  FunctionComponent,
  useMemo,
  useState,
  useEffect,
} from "react";
import { DropdownButton } from "./dropdown_button";
import { SelectTabButton } from "@/components";
import { InformController, InformListener } from "@/controllers";

export const Inform: FunctionComponent = () => {
  const [listener, setListener] = useState<InformListener | null>(null);

  const controller = useMemo(() => new InformController(setListener), []);

  const semesterGpa = useMemo(() => {
    return listener
      ? listener.gradeLevel[listener.selectedGrade][listener.selectedSemester]
      : [];
  }, [listener]);

  const lineStudies = useMemo(
    () => ["วิทย์-คณิต", "ศิลป์-คำนวน", "ศิลป์-ภาษา"],
    [],
  );

  const interestedFaculty = useMemo(
    () => [
      "คณะจิตวิทยา",
      "คณะเศรษฐศาสตร์",
      "คณะบริหารธุรกิจ",
      "คณะเภสัชศาสตร์",
      "คณะนิติศาสตร์",
      "คณะวิทยาศาสตร์",
    ],
    [],
  );

  const departmentItems = useMemo(
    () => [
      "สาขาคณิตศาสตร์",
      "สาขาวิทยาการคอมพิวเตอร์",
      "สาขาเคมี",
      "สาขาเคมีประยุกต์",
    ],
    [],
  );

  const handleStudy = (item: string) => controller.handleStudy(item);
  const handleFaculty = (item: string) => controller.handleFaculty(item);
  const handleDepartment = (item: string) => controller.handleDepartment(item);
  const handleGrade = (item: string, index: number) =>
    controller.handleGrade(item, index);
  const handleSemester = (item: string, index: number) =>
    controller.handleSemester(item, index);
  const handleSemesterGpa = (item: string, index: number) =>
    controller.handleSemesterGpa(item, index);

  if (!listener) {
    return <div>loading</div>;
  }

  return (
    <div className="relative">
      <div className="absolute z-10 flex size-full flex-col items-center justify-start space-y-10 px-4 pb-[160px] pt-8">
        <img src="/inform.png" alt="Inform" />
        <div className="flex size-full flex-col justify-between rounded-2xl bg-violet-950 px-5 py-3">
          <h1 className="font-kanit text-2xl font-semibold leading-9 text-white">
            กรอกข้อมูลเพื่อทำการสมัคร
          </h1>
          <DropdownButton
            value={listener.study}
            placeHolder={"สายการเรียน"}
            items={lineStudies}
            onSelect={handleStudy}
          />
          <DropdownButton
            value={listener.faculty}
            placeHolder={"คณะที่สนใจ"}
            items={interestedFaculty}
            onSelect={handleFaculty}
          />
          <DropdownButton
            value={listener.department}
            placeHolder={"เลือกสาขา"}
            items={departmentItems}
            onSelect={handleDepartment}
          />
          <SelectTabButton
            items={["ม.4", "ม.5", "ม.6"]}
            thumbClassName="!w-[30%]"
            onItem={handleGrade}
          />
          <SelectTabButton
            items={["เทอม 1", "เทอม 2"]}
            onItem={handleSemester}
          />
          <div className="flex flex-col gap-y-4">
            {semesterGpa.map((value, subjectIndex) => (
              <Fragment key={subjectIndex}>
                <div className="flex flex-row items-center justify-between">
                  <h1 className="font-kanit text-lg font-medium leading-7 text-white">
                    {value.name}
                  </h1>
                  <DropdownButton
                    onSelect={(item) => handleSemesterGpa(item, subjectIndex)}
                    value={
                      parseFloat(value.gpa) > 0 ? value.gpa.toString() : ""
                    }
                    className="!w-[110px]"
                    items={["1", "1.5", "2", "2.5", "3", "3.5", "4"]}
                  />
                </div>
              </Fragment>
            ))}
          </div>
          <button className="btn w-full items-center justify-center rounded-2xl border-0 bg-orange-600 p-2.5 hover:bg-orange-400">
            <h1 className="font-kanit text-xl font-semibold text-white">
              สมัคร
            </h1>
          </button>
        </div>
      </div>
      <img src="/inform_bg.png" alt="Background" />
    </div>
  );
};
