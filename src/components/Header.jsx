import headerLogo from "../assets/headerLogo.svg";

const header = () => {
  return (
    <div className="bg-gray-500 grid grid-cols-2 gap-8">
      <img src={headerLogo} className="w-10" />
      <div className="flex gap-5">
        <h1>rqwerqrwe</h1>
        <h1>rqwerqrwe</h1>
        <h1>rqwerqrwe</h1>
        <h1>rqwerqrwe</h1>
      </div>
    </div>
  );
};

export default header;
