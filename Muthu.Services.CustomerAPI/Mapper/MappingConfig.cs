using AutoMapper;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.ViewModel;

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
                ForMember(dest => dest.ProductId, src => src.MapFrom(src => src.Id)).
                IncludeBase<Product, ProductCreateDto>().
                ReverseMap();

                //Store
                config.CreateMap<Store, StoreCreateDto>().
                ForMember(dest => dest.StoreName, src => src.MapFrom(src => src.Name)).
                ForMember(dest => dest.StoreAddress, src => src.MapFrom(src => src.Address)).
                ReverseMap();

                config.CreateMap<Store, StoreDto>().
                ForMember(dest => dest.StoreId, src => src.MapFrom(src => src.Id)).
                IncludeBase<Store, StoreCreateDto>().
                ReverseMap();

                //Sale
                config.CreateMap<Sale, SalesDto>().
                ForMember(dest => dest.SalesId, src => src.MapFrom(src => src.Id)).
                IncludeBase<Sale, SalesCreateDto>().
                ReverseMap();

                config.CreateMap<Sale, SalesCreateDto>().
                ForMember(dest => dest.ProductId, src => src.MapFrom(src => src.ProductId)).
                ForMember(dest => dest.StoreId, src => src.MapFrom(src => src.StoreId)).
                ForMember(dest => dest.CustomerId, src => src.MapFrom(src => src.CustomerId)).
                //ForMember(dest => dest.OrderDateTime, src => src.MapFrom(src => src.DateSold)).
                ReverseMap();

                //config.CreateMap<Sale, SalesViewSummaryDto>().
                //ForMember(dest => dest.SalesId, src => src.MapFrom(src => src.Id)).
                //ForMember(dest => dest.ProductName, src => src.MapFrom(src => src.Product.Name)).
                //ForMember(dest => dest.ProductPrice, src => src.MapFrom(src => src.Product.Price)).
                //ReverseMap();

                config.CreateMap<Sale, SalesViewDetailDto>().
                ForMember(dest => dest.CustomerName, src => src.MapFrom(src => src.Customer.Name)).
                ForMember(dest => dest.StoreName, src => src.MapFrom(src => src.Store.Name)).
                ForMember(dest => dest.ProductName, src => src.MapFrom(src => src.Product.Name)).
                ForMember(dest => dest.SalesId, src => src.MapFrom(src => src.Id)).
                ForMember(dest => dest.OrderDateTime, src => src.MapFrom(src => src.DateSold.ToString("dd/MM/yyyy HH:mm:ss"))).
                ReverseMap();

            });

            return mappingConfig;
        }
    }


}
