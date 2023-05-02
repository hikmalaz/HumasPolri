import React from 'react'
import Logo from "../../assets/Logo_Humas_Polri.svg.png";

export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-3xl font-bold text-white mb-4">
        This web is under Maintenance
      </h1>
      <img
        src={Logo}
        alt="Under construction"
        className="max-w-max h-64 mb-8"
      />
      <p className="text-base text-white text-center">
        We're sorry, this page is currently being worked on and will be
        available soon. Thank you for your patience.
      </p>
    </div>
  )
}
export default LandingPage;