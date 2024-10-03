import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="md:text-white w-full px-8 md:px-16 lg:px-36 flex justify-between items-center bg-transparent fixed z-10 ">
      <div className=" ">
        <img src={logo} alt="" className="w-1/3" />
      </div>
      <div className="">
        <h2>xjiuyhgu</h2>
      </div>
    </div>
  );
};

export default Navbar;
