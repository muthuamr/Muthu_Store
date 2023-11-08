using Muthu.MicroService.Models.Dtos;

namespace Muthu.MicroService.Services.IServices
{
    public interface IProductService
    {
        public Task<ResponseDto> GetProductsAsync();
        public Task<ResponseDto> CreateProduct(ProductCreateDto productDto);
        public Task<ResponseDto> UpdateProduct(ProductDto productDto);
        public Task<ResponseDto> DeleteProduct(int productId);
    }
}
