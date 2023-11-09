using AutoMapper;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.Models.Dtos;

namespace Muthu.MicroService.Mapper
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                //Customer
                config.CreateMap<Customer, CustomerCreateDto>().
                ForMember(dest => dest.CustomerName, src => src.MapFrom(src => src.Name)).
                ForMember(dest => dest.CustomerAddress, src => src.MapFrom(src => src.Address)).
                ReverseMap();

                config.CreateMap<Customer, CustomerDto>().
                ForMember(dest => dest.CustomerId, src => src.MapFrom(src => src.Id)).
                IncludeBase<Customer, CustomerCreateDto>().
                ReverseMap();

                //Product
                config.CreateMap<Product, ProductCreateDto>().
                ForMember(dest => dest.ProductName, src => src.MapFrom(src => src.Name)).
                ForMember(dest => dest.ProductPrice, src => src.MapFrom(src => src.Price)).ReverseMap();

                config.CreateMap<Product, ProductDto>().
                ForMember(dest => dest.ProductId, src => src.MapFrom(src => src.Id)).IncludeBase<Product, ProductCreateDto>().
                ReverseMap();
            });

            return mappingConfig;
        }
    }


}
