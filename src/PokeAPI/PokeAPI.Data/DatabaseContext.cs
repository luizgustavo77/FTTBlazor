using Microsoft.EntityFrameworkCore;
using PokeAPI.Data.Entities;
using System.Collections.Generic;

namespace PokeAPI.Data
{
    public class DatabaseContext : Microsoft.EntityFrameworkCore.DbContext
    {
        #region Contructor
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
                : base(options)
        {
            Database.EnsureCreated();
        }
        #endregion

        #region Public properties
        public DbSet<Pokemon> Pokemon { get; set; }
        #endregion

        #region Overidden methods
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pokemon>().HasData(GetProducts());
            base.OnModelCreating(modelBuilder);
        }
        #endregion

        #region Private methods
        private List<Pokemon> GetProducts()
        {
            return new List<Pokemon>
            {
                new Pokemon { Id = 1, Name = "Pikachu"},
                new Pokemon { Id = 2, Name = "Bulbasaur"},
                new Pokemon { Id = 3, Name = "Charmander"},
                new Pokemon { Id = 4, Name = "Squirtle"}
            };
        }
        #endregion
    }
}
