import flatUs from './flagUs.png'
import INR from './flagINR.png'
import Change from '../img/exchange.svg'
export default function Main() {
  return (
    <>
      <div className='App'>
        <form className="
          grid 
          grid-cols-6 
          grid-rows-1 
          gap-0
          h-[400px] 
          w-[100%]
          items-center 
          bg-black-400 
          border 
          rounded-md
          z-[-1]">
      <div className="
        wallpaper
        col-span-4 
        col-start-2
        text-center 
        text-2xl 
        rounded-md
        font-bold 
        p-[100px]">
          <h1 className="
            text-4xl 
            font-bold    
            rounded-md
          text-gray-300">
              Currency Converter
          </h1>
      <div className="
        flex 
        justify-center 
        items-center
        mt-10
        rounded-md
        flex-col
        text-gray-300">

          <div className='
            flex 
            flex-col 
            pl-[0px] 
            mt-[10px]'>
            <span className="
              text-2xl 
              font-bold 
              mr-30 
              inline-flex">
                Enter amount
            </span>

      <input 
        type="number" 
        className="
          inline-flex
        bg-gray-300
          text-center 
          text-2xl 
          font-bold
          w-[590px]
          h-[50px]
          rounded-md">
      </input>
      </div>
      </div>
  <div className="
    flex 
    justify-center 
    items-center
    mt-[-5px]">
  <div className="p-4">
    <div className="  
      rounded-md
      border
    text-gray-300
    hover:bg-green-950
    bg-black">
      <label className='
        inline-flex 
        mt-3.5'>
          From
      </label>

<div className="
  p-4 
  mb-3.5">
    <div className='
      flex 
      flex-row 
      mr-[10px]'>
        <img className='
          w-[70px] 
          inline-flex 
          justify-center 
          mr-[10px]'
          src={flatUs} 
          alt="Us flag" />
            <select 
              className="
                ml-[10px]
              decoration-red-200 
                border 
                border-white-200 
                rounded-md
                p-2">
          <option className="
            decoration-red-200">
              USD
          </option>
          <option>
            INR
          </option>
          <option>
            NRP
          </option>
        </select>
        </div>
</div>
</div>
</div>

<div className='
  icons 
  w-[150px]'>
  <img 
    src={Change} 
    alt="change"/>
</div>

<div className="p-4">
<div className='
  flex 
  flex-row 
  mr-[10px]'>
    <div className="
      rounded-md
      border
    text-gray-300
    hover:bg-green-950
    bg-black">

  <label className='
    inline-flex 
    mt-3.5'>
      To
  </label>
  <div className="p-4">
    <img className='
      w-[70px] 
      inline-flex 
      justify-center 
      ml-[10px] ' 
      src={INR} 
      alt="INR flag"/>
        <select className="
        decoration-red-200 
          border 
        border-black 
          rounded-md
          p-2">
      <option className="
        decoration-red-200">
          INR
      </option>
      <option>
        USD
      </option>
      <option>
        NRP
      </option>
    </select>
  </div>
  </div>
  </div>
  </div>
</div>
<div className="
  flex 
  justify-center 
  mt-[-40px]">
  <button className="
    border 
    rounded-md
  text-gray-300
    w-[580px] 
    ml-[00px]
  bg-black
    mt-10 
    p-2 
    cursor-pointer 
  hover:bg-green-950">
      Get Exchange Rate
  </button>
</div>

<div className="
  flex
  justify-center
  rounded-md
text-gray-300
  mt-10
  z-[1]
  relative
  before:opacity-[.4] 
  before:z-[-1]">
  <p>
    Results
  </p>
</div>
</div>
  </form>
  </div>
</>
  );
}