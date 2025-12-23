'use client'
import { NavLinks } from '@/constants/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

type NavProps = {
    openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };

        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

  return (
    <div className={`transition-all ${
        navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'
        }
     duration-200 h-[12vh] z-[10000] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='w-5 h-5 text-black'/>
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>Mehul Mathur</h1>
            </div>
            {/* Navigation Links */}
            <div className='hidden lg:flex items-center space-x-10'>
                {NavLinks.map((link) => (
                    <Link key={link.id} href={link.url} className='text-base hover:text-cyan-300 text-white 
                    font-medium transition-all duration-200'>
                        <p>
                            {link.label}
                        </p>
                    </Link>
                ))}
            </div>
            {/* CV Button */}
            <div className='flex items-center space-x-4'>
                <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg 
                bg-blue-800 text-blue-200 hover:bg-white hover:text-black transition-all duration-200 
                flex items-center space-x-2'>
                    <BiDownload className='w-5 h-5'/>
                    <a href="/Mehul_Mathur_CV.pdf" target="_blank" rel="noopener noreferrer">
                        Download CV
                    </a>
                </button>
                {/* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 text-white lg:hidden cursor-pointer'/>
                
            </div>
        </div>
    </div>
  )
}

export default Nav;
