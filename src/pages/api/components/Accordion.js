import React, { useEffect, useRef } from 'react';
import minus from "./minus.svg";
import plus from "./plus.svg";

const Accordion = ({ question, answer, turn, setTurn, idx }) => {

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = turn[idx] ? `${contentRef.current.scrollHeight}px` : "0px";
    }

  }, [contentRef, turn, idx]);

  const toggleAccordion = () => {
    let newTurn = [...turn];
    newTurn[idx] = !newTurn[idx];
    setTurn(newTurn);
  }

  return (
    <div className='flex flex-col  items-center justify-center w-full px-2 text-lg  pt-4 lg:text-base'>
      <button onClick={toggleAccordion}
        className={`bg-white px-5 shadow rounded-lg  cursor-pointer w-full h-full ${turn[idx]}`}>
        <div className='py-3'>
          <div className='flex items-center justify-between h-14  text-left'>
            <span className='mx-2 font-semibold  lg:font-semibold lg:text-xl text-base  text-sky-600'>{question}</span>
            <div>
              {turn[idx] ? <img src="https://i.postimg.cc/KzFfq1hW/minus.png" alt="" width={25} height={25} /> :
                <img src="https://i.postimg.cc/k5Wwvxz8/plus.png" alt="" width={25} height={25} />}

            </div>
          </div>
          <div ref={contentRef} className='mx-4 overflow-hidden mt-3 text-left transition-all duration-500 h-full'>
            <p className='py-1  text-stone-700  font-normal  tracking-wide leading-normal  whitespace-pre-line text-base lg:text-lg'>
              {answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion;
