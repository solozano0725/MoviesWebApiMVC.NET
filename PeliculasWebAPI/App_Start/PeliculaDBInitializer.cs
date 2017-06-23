using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using PeliculasWebAPI.Models;

namespace PeliculasWebAPI.App_Start
{
    public class PeliculaDBInitializer : DropCreateDatabaseAlways<PeliculaDBContext>
    {
        protected override void Seed(PeliculaDBContext context)
        {
            var peliculas = new List<Pelicula>
            {
                new Pelicula { nombre = "Sportlight", actor = "Michael Keaton", genero = "Misterio", año = "2016" },
                new Pelicula { nombre = "Capitan America: Civil War", actor = "Joe Russo", genero = "Ficcion", año = "2016"},
                new Pelicula { nombre = "Deadpool", actor = "Tim Miller", genero = "Ficcion", año = "2016"},
                new Pelicula { nombre = "Inception", actor = "Leonardo DiCaprio", genero = "Ficcion", año = "2010"},
                new Pelicula { nombre = "Avatar", actor = "Sam Worthington", genero = "Ficcion", año = "2009"}
            };
            
            peliculas.ForEach(c => context.Peliculas.Add(c));
            context.SaveChanges();
        }
    }
}