"use client"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Home() {
  const circle = useRef()
  const tl1 = useRef()
  const secondDiv = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(circle.current, {
      y: 1000,
      x: -100,
      duration: 3,
      delay: 1,
      rotation: 360,
      scrollTrigger: {
        trigger: ".con1",
        scroller: ".main",
        markers: true,
        start: "top 5%",
        end:"top 60%",
        scrub: 6,
      }
    })
  })


  return (
    // <main className="main1 flex items-center justify-center min-h-screen mx-auto text-white font-sans">
    <main className="main bg-gray-800 pl-60 h-screen relative w-screen p-10 overflow-auto flex flex-col gap-10">

      <div className='box'>
        {/* Animated circle */}
        <div className="circle1 rounded-full w-48 h-48 absolute top-36 right-[50%] bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500" ref={circle}></div>

        {/* Other content */}
        <div className="con1 w-96 bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-sm p-10 rounded-lg shadow-lg mb-20">
          <div className="text-6xl">70%</div>
          <p className="mt-2">Holdwork has increased the add to cart rate up to 70% in the sports and entertainment marketplace.</p>
        </div>
        <div className="w-5/6 flex justify-end">
          <div className="w-96 bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-sm p-10 rounded-lg shadow-lg mb-20">
            <div className="text-6xl">70%</div>
            <p className="mt-2">Holdwork has increased the add to cart rate up to 70% in the sports and entertainment marketplace.</p>
          </div>
        </div>
        <div className="w-96 bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-sm p-10 rounded-lg shadow-lg mb-20">
          <div className="text-6xl">70%</div>
          <p className="mt-2">Holdwork has increased the add to cart rate up to 70% in the sports and entertainment marketplace.</p>
        </div>
        <div className="w-5/6 flex justify-end">
          <div className="w-96 right-0 bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-sm p-10 rounded-lg shadow-lg mb-20">
            <div className="text-6xl">70%</div>
            <p className="mt-2">Holdwork has increased the add to cart rate up to 70% in the sports and entertainment marketplace.</p>
          </div>
        </div>
      </div>

    </main>
  );
}
