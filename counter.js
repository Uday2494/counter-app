import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [sortDesc, setSortDesc] = useState(true);

  const addToList = () => {
    if (count !== 0) {
      setList([...list, count]);
      setCount(0);
    }
  };

  const resetList = () => {
    setList([]);
  };

  const toggleSort = () => {
    const sorted = [...list].sort((a, b) => (sortDesc ? b - a : a - b));
    setList(sorted);
    setSortDesc(!sortDesc);
  };

  const removeItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-blue-100
        to-blue-300
        flex
        flex-col
        items-center
        p-6
      "
    >
      <h1
        className="
          text-4xl
          font-extrabold
          text-blue-800
          mb-8
          drop-shadow
        "
      >
        Counter & List App
      </h1>

      <div
        className="
          bg-white
          shadow-xl
          rounded-2xl
          p-6
          w-80
          mb-6
          transition-all
          hover:shadow-2xl
        "
      >
        <div
          className="
            flex
            justify-center
            items-center
            gap-4
            mb-4
          "
        >
          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
            className={`
              rounded-full
              w-10
              h-10
              flex
              items-center
              justify-center
              text-lg
              font-bold
              transition-all
              ${
                count === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              }
            `}
          >
            -
          </button>

          <span
            className="
              text-3xl
              font-bold
              text-blue-700
            "
          >
            {count}
          </span>

          <button
            onClick={() => setCount(count + 1)}
            className="
              bg-blue-100
              hover:bg-blue-200
              text-blue-600
              rounded-full
              w-10
              h-10
              flex
              items-center
              justify-center
              text-lg
              font-bold
              transition-all
            "
          >
            +
          </button>
        </div>

        <button
          onClick={addToList}
          className="
            bg-blue-500
            hover:bg-blue-600
            text-white
            py-2
            px-4
            rounded-lg
            w-full
            font-medium
            shadow-md
            transition-all
          "
        >
          Add to List
        </button>
      </div>

      <div
        className="
          bg-white
          shadow-xl
          rounded-2xl
          p-6
          w-80
          transition-all
          hover:shadow-2xl
        "
      >
        <div
          className="
            flex
            justify-between
            mb-4
          "
        >
          <h2
            className="
              font-semibold
              text-lg
              text-blue-800
            "
          >
            Numbers List
          </h2>

          <div
            className="
              flex
              gap-2
            "
          >
            <button
              onClick={resetList}
              className="
                bg-red-100
                hover:bg-red-200
                text-red-600
                px-3
                py-1
                rounded-md
                text-sm
                font-medium
                transition-all
              "
            >
              Reset
            </button>

            <button
              onClick={toggleSort}
              className="
                bg-blue-100
                hover:bg-blue-200
                text-blue-600
                px-3
                py-1
                rounded-md
                text-sm
                font-medium
                transition-all
              "
            >
              Sort {sortDesc ? "↓" : "↑"}
            </button>
          </div>
        </div>

        {list.length > 0 ? (
          list.map((num, idx) => (
            <div
              key={idx}
              className="
                flex
                justify-between
                items-center
                bg-gray-50
                rounded-lg
                px-3
                py-2
                mb-2
                hover:bg-gray-100
                transition-all
              "
            >
              <span
                className="
                  text-blue-700
                  font-medium
                "
              >
                {num}
              </span>

              <button
                onClick={() => removeItem(idx)}
                className="
                  text-gray-400
                  hover:text-red-500
                  transition-all
                "
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <p
            className="
              text-gray-400
              text-sm
            "
          >
            No numbers added yet
          </p>
        )}

        <div
          className="
            text-blue-700
            text-sm
            mt-4
            font-medium
          "
        >
          Total numbers: {list.length}
        </div>
      </div>
    </div>
  );
}