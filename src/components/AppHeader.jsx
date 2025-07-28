

import gifLogo from "../assets/gif.png";

export const AppHeader = ({ children, appName }) => {
  return (
    <div className="flex flex-wrap px-4 gap-4 navbar bg-base-100">
      <div className="flex justify-center flex-1 sm:justify-start">
        <img className="w-8" src={gifLogo} />
        <h2 className="text-xl font-bold">{appName}</h2>
      </div>
      <div className="block w-full sm:flex sm:w-fit text-center">
        {children}
      </div>
    </div>
  )
}
