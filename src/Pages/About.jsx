import React from 'react'
import {useLocation , useNavigate} from 'react-router-dom';
const About = () => {
  
  const location =useLocation()
  const { movie } = location.state;
  
  const navigate=useNavigate();
  const handleClick = (movie) => {
    navigate("/Booking", { state: { movie:movie } });
  };
  
  const summary = movie.summary.replace(/(<([^>]+)>)/gi, "");  
  return (
    <>
      <div className="container flex justify-center items-center w-full h-screen">
        <div className=" w-10/12 mx-auto my-auto h-fit bg-slate-100 rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 movie-image w-full sm:w-1/2">
              <img className="h-full w-full object-cover " src={movie.image?.medium} />
            </div>
            <div className="p-8 details flex flex-col gap-2">
              <a href={movie.url}>
              <h3 className="block mt-1 text-5xl leading-tight font-medium text-black hover:underline title">{movie.name}</h3>
              </a>
              <h1 className="uppercase tracking-wide text-lg text-indigo-500 font-semibold genres">{movie.genres.join(', ')}</h1>
              <p className='Language text-xl'>Language: {movie.language}</p>
              <p className='Launch text-xl'>Premier: {movie.premiered}</p>
              <p className='Duration text-xl'>{movie.duration}</p>
              <p className='schedule gap-2 sm:justify-between sm:flex'>
              <p className='Rating text-xl'>Rating: {movie.rating.average}</p>
              <p className='Status text-xl'>Status: {movie.status}</p>
              </p>
              <p className='schedule gap-2 sm:flex sm:justify-between'>
                <div className="time text-xl">Time: {movie.schedule.time}</div>
                <div className="date text-xl">Days: {movie.schedule.days.join(', ')}</div>
              </p>
              <p className="mt-2 text-zinc-700 plot text-xl">{summary}</p>
              <a href={movie.officialSite}>
              <button className="bg-transparent my-2 w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                WATCH NOW
              </button>
              </a>
              <button onClick={() => handleClick(movie)} className="bg-transparent my-2 w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                BOOK TICKETS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
