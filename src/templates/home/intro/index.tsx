import { FunctionComponent } from "react";
import style from "./intro.module.scss";
export const Intro: FunctionComponent = () => {
  return (
    <div className=" flex flex-col items-center space-y-[29px] bg-[#576ECD] px-4 pb-[60px]">
      <div className="flex flex-col">
        <img src="/banner.png" alt="" className={style.bounce} />
        <img src="/banner_shade.png" alt="" className="mx-16" />
      </div>
      <div className="space-y-2.5 rounded-[18px] bg-violet-950 px-3 py-2">
        <h1 className=" font-kanit text-2xl font-semibold leading-9 text-white">
          NEXT LEVEL คืออะไร ?
        </h1>
        <h1 className=" font-kanit text-sm font-medium leading-normal text-white">
          เป้าหมายของโครงการนี้คือการพัฒนาเว็บไซต์ที่สามารถพยากรณ์ความสำเร็จทางวิชาการใน
          ระดับอุดมศึกษาและสร้างฐานข้อมูลเพื่อจัดเก็บ
          ค่าเฉลี่ยคะแนนและหลักสูตรนี่จะเป็นประโยชน์
          สำหรับครูในการเตรียมแผนการสอนของ
          พวกเขาสำหรับนักเรียนของพวกเขาเว็บไซต์จะประเมินเกรดเฉลี่ยของแต่ละวิชาในโรงเรียนมัธยมศึกษาตอนปลายและเปรียบเทียบกับหลักสูตร
          ของคณะที่ได้รับการคัดเลือกเพื่อทำนายความ สำเร็จของวิทยาลัย
        </h1>
      </div>
      <h1 className="text-center font-kanit text-base font-medium leading-7 text-white">
        อยากรู้มั้ย ?<br />
        ว่าความสำเร็จของคุณจะออกมาเป็นแบบไหน
      </h1>
      <button className="btn w-full items-center justify-center rounded-2xl border-0 bg-orange-600 p-2.5 hover:bg-orange-400">
        <h1 className="font-kanit text-xl font-semibold text-white ">
          กรอกข้อมูล
        </h1>
      </button>
    </div>
  );
};
