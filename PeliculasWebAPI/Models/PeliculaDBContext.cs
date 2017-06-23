using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace PeliculasWebAPI.Models
{
    public class PeliculaDBContext : DbContext
    {
        public DbSet Pelicula { get; set; }
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public System.Data.Entity.DbSet<PeliculasWebAPI.Models.Pelicula> Peliculas { get; set; }
        
    }
}