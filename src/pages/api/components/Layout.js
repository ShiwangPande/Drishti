import React from 'react';
import down from './down.svg';
import Accordion from './Accordion';

const Layout = ({ handleClick, isSomeActive, data, turn, setTurn }) => {
    return (
        <>
            <div className='items-center flex flex-col lg:w-7/12 lg:mt-7 w-full my-5 px-4'>
                <div className='flex items-center justify-between w-full mb-6 lg:justify-end'>
                    <h3 className="text-3xl font-semibold mt-6  mb-8 hidden lg:block text-white"> FREQUENTLY ASKED QUESTIONS </h3>
                    <h1 className="text-3xl font-bold mb-8 block lg:hidden text-white"> FAQ</h1>
                    <button
                        className="flex items-center mr-3 space-x-1 text-sm font-bold lg:text-base lg:space-x-2 py-2 lg:py-1 px-4 lg:px-3 bg-slate-50 rounded-lg"
                        onClick={handleClick}
                    >
                        <span className="text-sky-500 min-w-fit text-ellipsis"> {!isSomeActive ? "Open All" : "Close All"}</span>
                        <div
                            className={
                                "relative transition-all ease-in-out duration-200 " +
                                (isSomeActive ? " rotate-180" : "rotate-0")
                            }
                        >
                            <img src="https://i.postimg.cc/Ssrrwmyx/down.png" alt="" width={40} height={40} />
                        </div>
                    </button>
                </div>

                {data.map((el, i) => {
                    return (
                        <div className='w-full' key={"questions" + i}>
                            <Accordion
                                question={el.question}
                                answer={el.answer}
                                turn={turn}
                                setTurn={setTurn}
                                idx={el.idx}
                            />
                        </div>
                    );
                })}
                <style jsx global > {` 
               .faq{
                width: 25rem;
                margin-top: 3rem;
                height: 1.5rem;
               }
               .faq2{
                width: 8rem;
                margin-left: 0.5rem;
                margin-top: 2rem;
                height: 2.4rem;
               }
               `}</style >
            </div>
        </>
    );
}

export default Layout;
