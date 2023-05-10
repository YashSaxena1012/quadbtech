import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setMovieList(data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (movie) => {
    console.log(movie);
    navigate("/about", { state: { movie:movie.show } });
  };

  return (
    <>
      <h1 className="sm:text-4xl text-2xl text-center border-b-2 w-1/3 mx-auto my-2">
        CINETIME
      </h1>
      <div className="p-2">
        <div className="flex flex-col sm:flex-row w-full flex-wrap justify-center gap-x-8 gap-y-4">
          {movieList &&
            movieList.map((movie) => {
              return (

                <div
                  key={movie.show.id}
                  className="bg-gray-200 h-full w-fit mx-auto flex md:w-2/5 my-4 align-middle"
                >
                  <div className="w-2/5">
                    <img
                      src={movie.show.image?.medium}
                      alt="movie image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-1/3 p-4 my-auto text-slate-800 flex flex-col justify-center align-middle gap-4">
                    <div className="text-xl sm:text-3xl font-medium">
                      {movie.show.name}
                    </div>
                    <button
                      onClick={() => handleClick(movie)}
                      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    >
                      Show More
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
