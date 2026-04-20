import React, { useState, useEffect } from 'react';
import { NavbarMenu } from '../../mockData/data';
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMenu, MdClose } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Effet pour changer le fond au scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
                scrolled 
                ? "bg-noir/80 backdrop-blur-md border-b border-white/10 py-2" 
                : "bg-transparent py-5"
            }`}>
                <div className="container mx-auto flex items-center justify-between px-6">
                    
                    {/* LOGO : Style Massif & Italic */}
                    <div className='text-3xl font-black italic uppercase tracking-tighter cursor-pointer group'>
                        <span className="text-blanc transition-colors duration-300 group-hover:text-rouge">MED</span>
                        <span className="text-rouge text-outline group-hover:!text-rouge transition-all duration-300">GYM</span>
                    </div>

                    {/* MENU DESKTOP : Liens avec barre dynamique */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {NavbarMenu.map((item) => (
                                <li key={item.id} className="relative group">
                                    <a href={item.link} className='text-sm font-bold uppercase italic tracking-widest text-blanc/80 transition-all duration-300 group-hover:text-rouge'>
                                        {item.name}
                                    </a>
                                    {/* Barre de soulignement animée */}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rouge transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RÉSEAUX & CTA */}
                    <div className='hidden md:flex items-center gap-6'>
                        <div className='flex items-center gap-3 border-r border-white/20 pr-6'>
                            {[
                                { icon: <FaInstagram />, link: "https://instagram.com" },
                                { icon: <FaTiktok />, link: "https://tiktok.com" },
                                { icon: <FaXTwitter />, link: "https://twitter.com" }
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.link} 
                                    target="_blank" 
                                    className='w-8 h-8 flex items-center justify-center border border-white/10 text-blanc/60 hover:border-rouge hover:text-rouge transition-all duration-300'
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        {/* Bouton de contact rapide dans la navbar */}
                        <button className="bg-rouge px-5 py-2 text-xs font-black uppercase italic text-blanc hover:bg-blanc hover:text-noir transition-all duration-300">
                            Rejoindre
                        </button>
                    </div>

                    {/* MOBILE MENU ICON */}
                    <div className='md:hidden z-[110]' onClick={() => setOpen(!open)}>
                        {open ? (
                            <MdClose className='text-4xl text-rouge cursor-pointer' />
                        ) : (
                            <MdMenu className='text-4xl text-blanc cursor-pointer hover:text-rouge transition-colors' />
                        )}
                    </div>
                </div> 
            </nav>

            {/* responsive menu */}
            <ResponsiveMenu open={open} setOpen={setOpen} />
        </>
    );
}