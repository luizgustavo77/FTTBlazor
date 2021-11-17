using FTTBlazor.Common.PokeAPI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace FTTBlazor.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PokeAPIController : ControllerBase
    {
        string[] Summaries = new[]
        {
            "",
            "Pikachu",
            "Bulbasaur",
            "Charmander",
            "Squirtle"
        };

        private readonly ILogger<PokeAPIController> _logger;

        public PokeAPIController(ILogger<PokeAPIController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Pokemon> Get()
        {
            var result = Enumerable.Range(1, 4).Select(index => new Pokemon
            {
                Id = index.ToString(),
                Name = Summaries[index]
            })
            .ToArray();

            return result;
        }
    }
}
