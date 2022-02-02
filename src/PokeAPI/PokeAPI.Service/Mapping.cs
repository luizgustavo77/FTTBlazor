using AutoMapper;
using FTTBlazor.Common.PokeAPI;
using PokeAPI.Data.Entities;
using System;

namespace PokeAPI.Service
{
    public static class Mapping
    {
        private static readonly Lazy<IMapper> Lazy = new Lazy<IMapper>(() =>
        {
            MapperConfiguration config = new MapperConfiguration(cfg =>
            {
                // This line ensures that internal Propertys are also mapped over.
                cfg.ShouldMapProperty = p => p.GetMethod.IsPublic || p.GetMethod.IsAssembly;
                cfg.AddProfile<MappingProfile>();
            });
            IMapper mapper = config.CreateMapper();
            return mapper;
        });

        public static IMapper Mapper => Lazy.Value;
    }

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Pokemon, PokemonDTO>().ReverseMap();

        }
    }
}
