// import avatar from "./public/avatar.png"
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "./util/useMediaQuery";

const navMotion = {
    visible: {
        opacity: 1,

        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
    hidden: {
        opacity: 0,
    },
}

const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}

const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: 0 },
}


export default function Nav() {
    const [toggle, setToggle] = useState(false)
    const matches = useMediaQuery("(min-width: 1024px)")

    return (
        <nav
            className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
            <svg
                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                width='250'
                height={4}
                viewBox='0 0 250 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M2 2L428 2'
                    strokeWidth={2}
                    stroke='#282828'
                    strokeLinecap='round' />
            </svg>
            <div>
                <img
                    src='/avatar.png'
                    alt="Hua profile picture" />
            </div>

            {/* Title */}

            <h1
                className='text-lg font-bold'>
                <a href='/'>Hua</a>
            </h1>

            {/* Check if we are on mobile or not */}

            {matches && (
                <div
                    className='flex gap-12'>
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
            )}

            {!matches && (
                <div
                    className='space-y-1 cursor-pointer z-50'
                    onClick={() => setToggle((prevToggle) => !prevToggle)}>
                    <motion.span
                        animate={{
                            rotateZ: toggle ? 45 : 0,
                            y: toggle ? 8 : 0
                        }}
                        className='block h-0.5 w-8 bg-black'></motion.span>
                    <motion.span
                        animate={{
                            // width: toggle ? 0 : 24,
                            rotateZ: toggle ? 45 : 0,
                            opacity: toggle ? 0 : 1
                        }}
                        className='block h-0.5 w-6 bg-black'></motion.span>
                    <motion.span
                        animate={{
                            rotateZ: toggle ? -45 : 0,
                            y: toggle ? -4 : 0,
                            width: toggle ? 32 : 16
                        }}
                        className='block h-0.5 w-4 bg-black'></motion.span>
                </div>
            )}

            {toggle && !matches && (
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 25 }}
                    className='fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center z-40'>
                    <motion.div
                        variants={navMotion}
                        animate='visible'
                        initial='hidden'
                        className='flex flex-col gap-24 text-lg'>
                        <motion.a
                            variants={itemMotion}
                            href="/">Home</motion.a>
                        <motion.a
                            variants={itemMotion}
                            href="/services">Services</motion.a>
                        <motion.a
                            variants={itemMotion}
                            href="/contact">Contact</motion.a>
                    </motion.div>
                </motion.div>
            )}
        </nav>
    )
}