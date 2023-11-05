using AutoMapper;
using Muthu.Infrastructure.Peristence.Models;
using Muthu.MicroService.Models.Dtos;

namespace Muthu.MicroService.Mapper
{
    public class CustomerMappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<Customer, CustomerCreateDto>().
                ForMember(dest => dest.CustomerName, src => src.MapFrom(src => src.Name)).
                ForMember(dest => dest.CustomerAddress, src => src.MapFrom(src => src.Address)).
                ReverseMap();

                config.CreateMap<Customer, CustomerDto>().
                ForMember(dest => dest.CustomerId, src => src.MapFrom(src => src.Id)).
                IncludeBase<Customer, CustomerCreateDto>().
                ReverseMap();
            });

            return mappingConfig;
        }
    }


}
