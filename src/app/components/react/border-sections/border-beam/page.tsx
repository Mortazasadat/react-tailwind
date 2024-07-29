// Add this background conic gradient to you index.css file
// .wrapper::before {
//   background: conic-gradient(
//     rgba(233, 55, 120, 0.8) 0deg,
//     rgba(219, 38, 222, 0.8) 0deg,
//     transparent 90deg
//   );
// }

// Add this keyframe and animation to your tailwind.config.js and inside extends object.

// keyframes: {
//   "border-spin": {
//     "100%": {
//       transform: "rotate(-360deg)",
//     },
//   },
// },
// animation: {
//   "border-spin": "border-spin 9s linear infinite",
// },

function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white ">
      <div className="relative wrapper border-2 border-gray-300 rounded-2xl w-60 h-60 before:absolute  before:w-[150%] before:h-[150%] before:content-[''] before:animate-border-spin before:left-[-25%] before:top-[-25%] overflow-hidden ">
        <div className="flex items-center justify-center h-[calc(100%-2px)]  w-[calc(100%-2px)] absolute bg-white rounded-2xl left-[1px] top-[1px] ">
          <h1 className="font-semibold ">React Taliwind</h1>
        </div>
      </div>
    </div>
  );
}

export default Page;
