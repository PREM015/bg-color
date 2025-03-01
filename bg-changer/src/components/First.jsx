import React, { useState, useEffect } from "react";

const First = () => {
  const [bgColor, setBgColor] = useState("white"); // Default background color

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); // Apply color change whenever bgColor updates

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[100px] border-4 border-gray-800 rounded-xl shadow-lg bg-black flex justify-center items-center">
      <div className="flex space-x-4 p-3">
        <button
          type="button"
          className="bg-red-500 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 hover:bg-red-600"
          onClick={() => setBgColor("red")}
        >
          Red
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 hover:bg-blue-600"
          onClick={() => setBgColor("blue")}
        >
          Blue
        </button>
        <button
          type="button"
          className="bg-yellow-500 text-black px-6 py-2 rounded-lg transition-all hover:scale-105 hover:bg-yellow-600"
          onClick={() => setBgColor("yellow")}
        >
          Yellow
        </button>
        <button
          type="button"
          className="bg-green-500 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 hover:bg-green-600"
          onClick={() => setBgColor("green")}
        >
          Green
        </button>
        <button
          type="button"
          className="bg-indigo-800 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 hover:bg-green-600"
          onClick={() => setBgColor("indigo")}
        >
          indigo
        </button>
        <button
          type="button"
          className="bg-fuchsia-800 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 hover:bg-green-600"
          onClick={() => setBgColor("fuchsia")}
        >
          pink
        </button>
      </div>
    </div>
  );
};

export default First;