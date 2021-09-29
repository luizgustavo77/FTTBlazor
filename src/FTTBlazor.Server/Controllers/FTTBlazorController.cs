using FTTBlazor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace FTTBlazor.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FTTBlazorController : ControllerBase
    {
        string[] Summaries = new[]
        {
            "",
            "Pikachu",
            "Bulbasaur",
            "Charmander",
            "Squirtle"
        };

        private readonly ILogger<FTTBlazorController> _logger;

        public FTTBlazorController(ILogger<FTTBlazorController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<EndpointPokemon> Get()
        {
            var result = Enumerable.Range(1, 4).Select(index => new EndpointPokemon
            {
                Id = index.ToString(),
                Name = Summaries[index]
            })
            .ToArray();

            return result;
        }
    }
}
