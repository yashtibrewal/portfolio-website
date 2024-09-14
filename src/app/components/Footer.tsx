import Link from 'next/link'

// text-xs md:text-sm lg:text-base  tracking-tight;

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between w-full text-white bg-black py-8 px-10">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p className="text-xs md:text-sm lg:text-base  tracking-tight font-semibold">
                    &copy; {new Date().getFullYear()} Yash Tibrewal
        </p>
        <p className="text-xs md:text-sm lg:text-base  tracking-tight text-gray-400">
                    Creating with passion and purpose
        </p>
      </div>
      <div className='flex-col'>
        <div className='flex justify-between'>
          <div className='hover:underline hover:underline-offset-2'>
            <Link className="text-xs md:text-sm lg:text-base  tracking-tight font-semibold"
              href="/services">
                            Services
            </Link>
          </div>
          <div className='hover:underline hover:underline-offset-2'>
            <Link className="text-xs md:text-sm lg:text-base  tracking-tight font-semibold"
              href="/">
                            Portfolio
            </Link>
          </div>
        </div>
        <div className="text-xs md:text-sm lg:text-base  tracking-tight flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-right">
          <a
            className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
            href="mailto:yashtibrewal.in@gmail.com">
                        yashtibrewal.in@gmail.com
          </a>
          <a
            className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/yash-tibrewal/">
                        LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}
