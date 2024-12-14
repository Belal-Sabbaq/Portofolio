import aboutImg from "../assets/AboutMe.jpeg"
import { ABOUT_TEXT } from "../constants"
const about = () => {
  return (
    <div className="border-b border-natural-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About 
        <span className="text-yellow-300"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="About_ME_Pic" className= "rounded-2xl"/>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default about