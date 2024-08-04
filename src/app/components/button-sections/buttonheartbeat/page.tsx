// Add this keyframes and animation to your tailwind.config.ts
//   keyframes: {
//         buttonheartbeat: {
//           "0%": {
//             "box-shadow": '0 0 0 0 theme("colors.blue.500")',
//             transform: "scale(1)",
//           },
//           "50%": {
//             "box-shadow": '0 0 0 7px theme("colors.blue.500/0")',
//             transform: "scale(1.05)",
//           },
//           "100%": {
//             "box-shadow": '0 0 0 0 theme("colors.blue.500/0")',
//             transform: "scale(1)",
//           },
//         },
//         },
//       },

//       animation: {
//         buttonheartbeat: "buttonheartbeat 2s infinite ease-in-out",
//         "border-spin": "border-spin 9s linear infinite",
//       },

export default function ButtonHeartBeat() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className=" mb-8 flex justify-center">
        <div className="relative  animate-buttonheartbeat rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 dark:text-white ring-gray-900/10 hover:ring-gray-900/20">
          <span className="absolute  inset-0" />
          Introducing React Tailwind
        </div>
      </div>
    </div>
  );
}
