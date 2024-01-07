
import React, { useState } from 'react';
export default function Contact() {
  const [count, setCount] = useState(0);
  const [buttonColor, setButtonColor] = useState('bg-blue-500');

  const handleClick = () => {
    setCount(count + 1);
    setButtonColor('bg-green-500');
  };

  return (
    <>
     <div className='flex justify-center items-center'>
    <img src='contact us.jpg'></img>
   <div className=''>
    <p>Total click count: {count} times</p>
      <button
        onClick={handleClick}
        className={`px-4 py-2 rounded ${buttonColor} text-white`}
      >
        Click me
      </button></div>
      
      </div>

    </>
  );
}