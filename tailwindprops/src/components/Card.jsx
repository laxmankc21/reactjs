import React from "react";

function Card({ username, btnText }) {
  console.log(username); // Use `username` directly, not `props.username`
  return (
    <>
      <div>
        <span className="text-2xl font-medium">{username}</span>{" "}
        {/* Use `username` instead of `title` */}
        <img
          className="size-48 shadow-xl rounded-md" // Use `className` instead of `class`
          alt=""
          src="https://images.pexels.com/photos/29631730/pexels-photo-29631730/free-photo-of-charming-boutique-entrance-in-guilin-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>

      <div className="flex items-center md:items-start">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400"></span>
        <button>{btnText}</button>
        <div>{btnText}</div>
      </div>
    </>
  );
}

export default Card;
