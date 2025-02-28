
import Euro from '../img/euro.svg';
import Dollar from '../img/dollar.svg';
import INR from '../img/INR.svg';

export default function Footer() {
  return (
    <>
      <div className='App '>
        <div className="grid grid-cols-3 grid-rows-1 h-[100px] justify-items-center items-center mt-[190px] mb-[10px]  bg-green-950">
          <div className="col-start-1 row-start-1">
            <img className='Goodes w-[50px]  cursor-pointer duration-700 rounded-[180px] scale-125 ' src={Euro} alt="one" />
          </div>
          <div className="col-start-2 row-start-1">
          <img className='Goodes w-[50px]  cursor-pointer duration-700 rounded-[180px] scale-125' src={Dollar} alt="one" />
          </div>
          <div className="col-start-3 row-start-1">
          <img className='Goodes w-[50px]  cursor-pointer duration-700 rounded-[180px] scale-125' src={INR} alt="one" />
          </div>
      </div>
      </div>
    </>
  );
}