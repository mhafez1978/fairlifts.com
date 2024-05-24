import "./Header.style.css";
import MainMenu from "./MainMenu";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="flex flex-col w-[100vw] h-[14vh]">
      <div className="w-full h-1/5 flex flex-row items-center justify-end pr-[14vw] bg-[#cdcdcd]">
        <Menu />
      </div>
      <div className="w-full h-4/5 bg-slate-50 flex flex-row justify-between items-center">
        <div className="w-[80vw] mx-auto h-full flex flex-row justify-between items-center">
          <div>
            <img
              src="https://www.fairlifts.com/wp-content/uploads/2020/01/fairlifts-logo-web-horiz-lg-345.png"
              alt="logo"
            />
          </div>
          <div>
            <MainMenu load="client" />
          </div>
          <div className="mr-[5vw] py-1 px-2 text-center leading-snug bg-[#c06014] rounded-lg flex flex-col justify-center items-center">
            <button className="w-full h-[30px] mb-0 text-yellow-200 px-4 rounded-lg text-center">
              Hassle Free Quotes
            </button>
            <span className="w-full h-[30px] mt-0 text-slate-50 text-center font-extrabold">
              1-800-318-8940
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
