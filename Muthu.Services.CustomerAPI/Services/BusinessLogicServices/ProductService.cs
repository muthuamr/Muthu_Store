using AutoMapper;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.Models.Dtos;
using Muthu.MicroService.Repositories.IRepositories;
using Muthu.MicroService.Services.IServices;

namespace Muthu.MicroService.Services.BusinessLogicServices
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepoitory;
        private readonly IMapper _mapperProduct;
        private ResponseDto _responseDto;
        private int recordsAffected = 0;
        public ProductService(IProductRepository productRepoitory, IMapper mapperProduct)
        {
            _productRepoitory = productRepoitory;
            _mapperProduct = mapperProduct;
            _responseDto = new ResponseDto();

        }
        public async Task<ResponseDto> GetProductsAsync()
        {
            try
            {
                IEnumerable<Product> productList = await _productRepoitory.GetProductsAsync();
                if (productList != null && productList.Count() > 0)
                {
                    IEnumerable<ProductDto> productsListDto = _mapperProduct.Map<IEnumerable<ProductDto>>(productList);
                    _responseDto.Result = productsListDto;
                    _responseDto.IsSuccess = true;
                }
                else
                {
                    _responseDto.Result = null;
                    _responseDto.Message = "No products exists";
                }
            }
            catch (Exception ex)
            {
                _responseDto.Result = null;
                _responseDto.Message = $"Error is occurred while fetching products and error is {ex}";
            }
            return _responseDto;

        }
        public async Task<ResponseDto> CreateProduct(ProductCreateDto productDto)
        {
            Product objProduct = null;
            try
            {
                objProduct = _mapperProduct.Map<Product>(productDto);
                if (objProduct != null)
                {
                    objProduct.IsActive = true;
                    int affectedRecords = await _productRepoitory.CreateProduct(objProduct);
                    if (affectedRecords > 0)
                    {
                        _responseDto.IsSuccess = true;
                        _responseDto.Message = $"Product '{objProduct.Description}' Added successfully";
                    }
                    else
                    {
                        _responseDto.Message = $"Product '{objProduct.Description}' failed to add";
                    }

                }
                else
                {
                    _responseDto.Message = $"Product failed to map";
                }
                return _responseDto;

            }
            catch (Exception ex)
            {
                _responseDto.Message = $"Error is occured while creating a new product {(objProduct != null ? objProduct.Description : string.Empty)} {ex}";

            }
            return _responseDto;
        }

        public async Task<ResponseDto> UpdateProduct(ProductDto productDto)
        {
            Product objProduct = null;
            try
            {
                objProduct = _mapperProduct.Map<Product>(productDto);
                if (objProduct != null)
                {
                    objProduct.IsActive = true;
                    recordsAffected = await _productRepoitory.UpdateProduct(objProduct);
                    if (recordsAffected > 0)
                    {
                        _responseDto.IsSuccess = true;
                        _responseDto.Message = $"Product '{objProduct.Description}' updated successfully";
                    }
                    else
                    {
                        _responseDto.Message = $"Product '{objProduct.Description}' failed to update";
                    }
                }
                else
                {
                    _responseDto.Message = "Product mapping failed";
                }
            }
            catch (Exception ex)
            {
                _responseDto.Message = $"Product '{(objProduct != null ? objProduct.Description : string.Empty)}' failed to update and error is {ex}";
            }

            return _responseDto;
        }
        public async Task<ResponseDto> DeleteProduct(int productId)
        {
            string productDesc = string.Empty;
            var result = (recordsAffected, productDesc);
            try
            {
                result = await _productRepoitory.DeleteProduct(productId);
                if (result.recordsAffected > 0)
                {
                    _responseDto.IsSuccess = true;
                    _responseDto.Message = $"Product '{result.productDesc}' deleted successfully";
                }
                else
                {
                    _responseDto.Message = $"No product exists";
                }
            }

            catch (Exception ex)
            {
                _responseDto.Message = $"Product {(!string.IsNullOrEmpty(result.productDesc) ? result.productDesc : string.Empty)} failed to update and error is {ex}";
            }

            return _responseDto;
        }
    }
}
