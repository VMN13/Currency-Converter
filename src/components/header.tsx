import Franklin from '../img/franklin.png'
import Goodes from '../img/Goodes.png'
import Gandi from '../img/Gandi.png'
export default function Header() {
  return (
    <>
      <div className='App'>
        <div className="
          grid 
          grid-cols-3 
          grid-rows-1 
          h-[100px] 
          justify-items-center 
          items-center 
          mt-[60px] 
          mb-[200px] 
          z-[1] 
          bg-green-950 ">

            <div className="
              col-start-1 
              row-start-1">
          <img className='
            Goodes 
            w-[120px]  
            cursor-pointer 
            duration-700 
            rounded-[180px] 
            scale-125' 
            src={Goodes} 
            alt="Franklin" />
          </div>
          
          <div className="
            col-start-2 
            row-start-1">
            <img className='
              franklin 
              z-[2] 
              w-[180px] 
              cursor-pointer 
              duration-700' 
              src={Franklin} 
              alt="Franklin" />
            </div>

            <div className="col-start-3 row-start-1">
              <img className='
                Goodes 
                w-[120px] 
                cursor-pointer 
                rounded-[180px] 
                scale-125  
                duration-700' 
                src={Gandi} 
                alt="Franklin" />
          </div>
        </div>
      </div>
    </>
  );
}