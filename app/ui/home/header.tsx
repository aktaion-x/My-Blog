import Image from "next/image";

export default function Header() {
  return (
    <header className='flex flex-wrap md:flex-nowrap justify-center gap-10 lg:px-20 mx-auto'>
      <div className='flex flex-col md:w-3/5'>
        <h1 className="xl:text-6xl lg:text-4xl text-3xl font-extrabold">Hello My Name is <span className="header my-name">Aktaion</span></h1>
        <h2 className='mt-3 header my-work'>Full-Stack Web Developer</h2>
        <p className='mt-3 text-neutral-400'>Hi 👋🏻 I`m Maxime, and this is my blog. Here, I share through my writing my experience as a frontend engineer and everything I`m learning about on React, Shaders, React Three Fiber, Framer Motion, and more.</p>
      </div>
      <div className='relative w-fit h-fit hidden md:block'>
        <Image src='/me.jpg' className='rounded-full relative z-10' alt='my image' width={250} height={250} />
        <div className='bg-neutral-950 rounded-full w-full h-full absolute -top-3 -right-2'></div>
        <div className='bg-neutral-900 rounded-full w-full h-full absolute -top-1.5 -right-1.5'></div>
        <div className='bg-neutral-800 rounded-full w-full h-full absolute -top-1 -right-1'></div>
      </div>
    </header>
  );
}
