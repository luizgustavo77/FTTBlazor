using FTTBlazor.Common.PokeAPI;
using PokeAPI.Data;
using PokeAPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PokeAPI.Service
{
    public class PokemonService
    {
        #region Private members
        private readonly DatabaseContext _dbContext;
        #endregion

        #region Constructor
        public PokemonService(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }
        #endregion

        #region Public methods
        public PokemonDTO Get(long Id)
        {
            PokemonDTO result = new PokemonDTO();

            try
            {
                result = _dbContext.Pokemon.Where(x => x.Id == Id)
                                                .Select(x => Mapping.Mapper.Map<PokemonDTO>(x))
                                                .FirstOrDefault(); ;
            }
            catch (Exception)
            {

            }

            return result;
        }

        public List<PokemonDTO> GetAll(int pagesize, int currentpage)
        {
            List<PokemonDTO> result = new List<PokemonDTO>();

            try
            {
                IQueryable<Pokemon> query = _dbContext.Pokemon;

                if (currentpage > 0)
                {
                    query = query.Skip(currentpage * pagesize);
                }

                if (pagesize != 0)
                {
                    query = query.Take(pagesize);
                }

                List<Pokemon> list = query.ToList();

                result = list.Select(x => Mapping.Mapper.Map<PokemonDTO>(x)).ToList();
            }
            catch (Exception)
            {

            }

            return result;
        }

        public void Add(PokemonDTO dto)
        {
            try
            {
                long newId = _dbContext.Pokemon.OrderBy(x => x.Id).Select(x => x.Id).LastOrDefault();

                dto.Id = (newId + 1).ToString();

                _dbContext.Pokemon.Add(Mapping.Mapper.Map<Pokemon>(dto));
                _dbContext.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Edit(PokemonDTO dto)
        {
            try
            {
                _dbContext.Update(Mapping.Mapper.Map<Pokemon>(dto));
                _dbContext.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Delete(long Id)
        {
            try
            {
                Pokemon pokemon = _dbContext.Pokemon.Where(x => x.Id == Id).FirstOrDefault(); ;
                _dbContext.Pokemon.Remove(Mapping.Mapper.Map<Pokemon>(pokemon));
                _dbContext.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion
    }
}
