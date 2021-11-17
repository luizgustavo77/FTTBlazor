using FTTBlazor.Common.PokeAPI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PokeAPI.Data;
using PokeAPI.Service;
using System.Collections.Generic;

namespace PokeAPI.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PokemonController
    {
        private readonly ILogger<PokemonController> _logger;
        private DatabaseContext _dbContext;

        public PokemonController(ILogger<PokemonController> logger, DatabaseContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public PokemonDTO Get([FromRoute] string id)
        {
            if (string.IsNullOrWhiteSpace(id))
                return null;

            return new PokemonService(_dbContext).Get(long.Parse(id));
        }

        [HttpGet]
        public IEnumerable<PokemonDTO> Get()
        {
            return new PokemonService(_dbContext).GetAll();
        }

        [HttpPost]
        public void Post(PokemonDTO item)
        {
            new PokemonService(_dbContext).Add(item);
        }

        [HttpPut]
        public void Put(PokemonDTO item)
        {
            new PokemonService(_dbContext).Edit(item);
        }

        [HttpDelete("{id}")]
        public void Delete([FromRoute] string id)
        {
            if (string.IsNullOrWhiteSpace(id))
                return;

            new PokemonService(_dbContext).Delete(long.Parse(id));
        }
    }
}
