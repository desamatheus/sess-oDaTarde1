// src/components/MovieFetcher.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './MovieFetcher.css'; // Estilos personalizados para os cards

const MovieFetcher = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token =
      ' eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGRhNDcxN2EwZmQ3ZDQzZTAxMmYwNjZlNDY1MGU2YyIsIm5iZiI6MTcxOTQyMTgzNS4zNjY2MDIsInN1YiI6IjY2N2M0YWJhYzY0ZWMwMTVmYTU1N2NmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZzQnRX0QAuVotwT_gXlpcOY-Rm0NRO_AZjxg1YdECc'; // Substitua pela sua chave de leitura de API
    const url =
      'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMovies(response.data.results.slice(0, 14)); // Limita a 14 filmes
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar dados: {error.message}</p>;
  }

  return (
    <div>
      <h1>Filmes Populares</h1>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className='card'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='card-image'
            />
            <div className='card-title'>{movie.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieFetcher;
