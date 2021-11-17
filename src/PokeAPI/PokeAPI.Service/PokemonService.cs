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
        private DatabaseContext _dbContext;
        #endregion

        #region Constructor
        public PokemonService(DatabaseContext dbContext)
        {
            this._dbContext = dbContext;
        }
        #endregion

        #region Public methods
        public PokemonDTO Get(long Id)
        {
            var result = new PokemonDTO();

            try
            {
                result = _dbContext.Pokemon.Where(x => x.Id == Id)
                                                .Select(x => Mapping.Mapper.Map<PokemonDTO>(x))
                                                .FirstOrDefault(); ;
            }
            catch (Exception e)
            {

            }

            return result;
        }

        public List<PokemonDTO> GetAll()
        {
            var result = new List<PokemonDTO>();

            try
            {
                var list = _dbContext.Pokemon.ToList();

                result = list.Select(x => Mapping.Mapper.Map<PokemonDTO>(x)).ToList();
            }
            catch (Exception e)
            {

            }

            return result;
        }

        public void Add(PokemonDTO dto)
        {
            try
            {
                var newId = _dbContext.Pokemon.OrderBy(x => x.Id).Select(x => x.Id).LastOrDefault();

                dto.Id = (newId + 1).ToString();

                _dbContext.Pokemon.Add(Mapping.Mapper.Map<Pokemon>(dto));
                _dbContext.SaveChanges();
            }
            catch (Exception e)
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
                var pokemon = _dbContext.Pokemon.Where(x => x.Id == Id).FirstOrDefault(); ;
                _dbContext.Pokemon.Remove(Mapping.Mapper.Map<Pokemon>(pokemon));
                _dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        #endregion
    }
}
