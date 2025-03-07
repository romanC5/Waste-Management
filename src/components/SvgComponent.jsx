import React from 'react';

const SvgComponent = () => (
    <svg 
    className="w-full h-auto"
    viewBox="0 0 800 452"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Varela+Round&display=swap');
      
      text {
        font-family: 'Fredoka One', cursive;
      }
      tspan {
        font-family: 'Varela Round', sans-serif;
      }
    `}</style>

    {/* Connecting Lines */}
    <g className="stroke-[#A5A4A4] stroke-[3px]">
      {/* Left lines */}
      <path d="M146.45 219.754l3.038 4.226M155.035 232.037l53.494 76.344M211.302 312.475l3.038 4.359" 
            strokeDasharray="7.43"/>
      
      {/* Right lines */}
      <path d="M371.914 218.565l-2.906 4.359M362.932 231.509L306.137 313.928M303.099 318.287l-2.906 4.358" 
            strokeDasharray="7.98"/>
      
      {/* More connecting paths... */}
    </g>

    {/* Step 1 - Sort Your Trash */}
    <g transform="translate(27.86 419.846)">
      <circle cx="111.184" cy="163.619" r="67.494" className="fill-white"/>
      <path className="fill-[#19A163]" d="M111.184,233.226c-9.378,0-18.491-1.849-27.077-5.415..."/>
      {/* Other paths and elements */}
      <text className="text-[80px] fill-[#19A163]" x="54.257" y="80.607">1</text>
      <text x="99.328" y="40.322" className="text-[14px] fill-[#929292]">
        <tspan x="0" dy="0">SORT </tspan>
        <tspan x="0" dy="16.8">YOUR </tspan>
        <tspan x="0" dy="16.8">TRASH</tspan>
      </text>
    </g>

    {/* Step 2 - Schedule Pickup */}
    <g transform="translate(27.8601 419.8461)">
      <text className="text-[80px] fill-[#19A163]" x="27.86" y="419.846">2</text>
      <text x="85.297" y="388.158" className="text-[14px] fill-[#929292]">
        <tspan x="0" dy="0">SCHEDULE</tspan>
        <tspan x="0" dy="16.8">A PICKUP</tspan>
      </text>
      {/* Bin graphics... */}
    </g>

    {/* Step 3 - Notification */}
    <g transform="translate(333.865 80.607)">
      <circle cx="255.946" cy="373.233" r="67.494" className="fill-white"/>
      <path className="fill-[#19A163]" d="M255.946,442.84c-9.378,0-18.491-1.849-27.077-5.415..."/>
      {/* Recycling bin graphics... */}
      <text className="text-[80px] fill-[#19A163]" x="333.865" y="80.607">3</text>
      <text x="389.621" y="36.025" className="text-[14px] fill-[#929292]">
        <tspan x="0" dy="0">KHAALISISI</tspan>
        <tspan x="0" dy="17.143">FRIEND GETS </tspan>
        <tspan x="0" dy="17.142">NOTIFIED</tspan>
      </text>
    </g>

    {/* Step 4 - Sell/Donate */}
    <g transform="translate(639.238 413.127)">
      <circle cx="554.054" cy="374.025" r="67.494" className="fill-white"/>
      <path className="fill-[#19A163]" d="M554.054,443.632c-9.378,0-18.491-1.849-27.077-5.415..."/>
      {/* Money graphics... */}
      <text className="text-[80px] fill-[#19A163]" x="639.238" y="413.127">4</text>
      <text x="694.124" y="370.591" className="text-[14px] fill-[#929292]">
        <tspan x="0" dy="0">SELL </tspan>
        <tspan x="0" dy="17.143">OR</tspan>
        <tspan x="0" dy="17.142">DONATE</tspan>
      </text>
    </g>

    {/* Step 5 - Become Recycler */}
    <g transform="translate(645.674 82.858)">
      <circle cx="704.627" cy="95.069" r="67.494" className="fill-white"/>
      <path className="fill-[#19A163]" d="M704.627,232.169c-9.378,0-18.491-1.849-27.077-5.415..."/>
      {/* Trophy graphics... */}
      <text className="text-[80px] fill-[#19A163]" x="645.674" y="82.858">5</text>
      <text x="694.56" y="40.322" className="text-[14px] fill-[#929292]">
        <tspan x="0" dy="0">BECOME</tspan>
        <tspan x="0" dy="17.143">A PROUD</tspan>
        <tspan x="0" dy="17.142">RECYCLER</tspan>
      </text>
    </g>
  </svg>
);

export default SvgComponent;