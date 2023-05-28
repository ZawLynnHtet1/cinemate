import { Link } from "react-router-dom";


export const Footer = () => {
  return (
      
<footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://facebook.com/z.htet.ss" rel="noreferrer" target="_blank" className="mr-4 hover:underline md:mr-6">Facebook</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/zaw-lynn-htet-a5b58914b/" rel="noreferrer" target="_blank" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://instagram.com/zaw_lynn_htet?igshid=ZGUzMzM3NWJiOq==Instagram" rel="noreferrer" target="_blank" className="mr-4 hover:underline md:mr-6">Instagram</a>
        </li>
        <li>
            <a href="https://github.com/ZawLynnHtet1" rel="noreferrer" target="_blank" className="hover:underline">Git Hub</a>
        </li>
    </ul>
</footer>

  )
}
