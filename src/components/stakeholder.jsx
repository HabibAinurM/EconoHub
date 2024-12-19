import React from "react";
import logo1 from '../assets/kominfo.png'; // Ganti dengan path yang sesuai
import logo2 from "../assets/naker 1.png"; // Ganti dengan path yang sesuai

function Stakeholder() {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h1 className="text-4xl font-extrabold mb-4 text-blue-700 leading-tight text-center"style={{ color: 'rgb(0, 96, 158)' }}>
                Stakeholder      
            </h1>
                <div className="mt-1">
                    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                        {/* LOGO 1 */}
                        <li>
                            <img src={logo1} alt="Logo 1" className="w-36" />
                        </li>

                        {/* LOGO 2 */}
                        <li>
                            <img src={logo2} alt="Logo 2" className="w-48" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Stakeholder;
