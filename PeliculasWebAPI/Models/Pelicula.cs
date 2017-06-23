using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PeliculasWebAPI.Models
{
    public class Pelicula
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string actor { get; set; }
        public string genero { get; set; }
        public string año { get; set; }
    }
}