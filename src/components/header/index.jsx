import { GiHamburgerMenu } from "react-icons/gi";
export const Header = () => {
  return (
    <div className="flex bg-orange-400 w-full px-6 py-2 items-center justify-center">
      <label
        htmlFor="my-drawer"
        className="btn btn-primary drawer-button text-lg text-white rounded-lg bg-purple-900 hover:bg-purple-800 border-0"
      >
        <GiHamburgerMenu />
      </label>
      <img src="/icon.svg" alt="" className="mx-auto -translate-x-[25px]" />
    </div>
  );
};
