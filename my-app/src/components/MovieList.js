import React from 'react'; 
import Movie from './Movie'; 

//MovieList maps through the movies array and creates movie component for each movie. 
function MovieList({ movies, updateRating }) {
     return (
        <div className='movie-list'>
        {movies.map((movie) => (
            <Movie key={movie.id}
            movie={movie}
            
            updateRating={updateRating}
            />
        ))}
        </div>
     );
    
}
 export default MovieList;