import pageNotFoundLogo from '../assets/images/pagenotfound.png';
import { Link } from 'react-router-dom';
import {Button} from "../components/Button";
import { useEffect } from 'react';

export const PageNotFound = () => {

  useEffect(()=>{
    document.title="Page Not Found/Cinemate"
  })

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold dark:text-white my-10">404, Oops!</p>
          <div className="max-w-lg">
            <img className='rounded-lg' src={pageNotFoundLogo} alt="Page not found Logo" />
          </div>
        </div>

        <div className="flex justify-center mb-5">
        <Link to="/">
          <Button></Button>            
        </Link>

        </div>
      </section>
    </main>
  )
}
