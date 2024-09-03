export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between w-full text-white bg-black py-8 px-10">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-lg font-semibold">
                    &copy; {new Date().getFullYear()} Yash Tibrewal
                </p>
                <p className="text-sm text-gray-400">
                    Creating with passion and purpose
                </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-right">
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
        </footer>
    );
}
