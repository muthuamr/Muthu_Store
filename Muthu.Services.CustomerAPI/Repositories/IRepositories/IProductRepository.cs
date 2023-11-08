using Muthu.Infrastructure.Models;

namespace Muthu.MicroService.Repositories.IRepositories
{
    public interface IProductRepository
    {
        public Task<IEnumerable<Product>> GetProductsAsync();
        public Task<int> CreateProduct(Product product);
        public Task<int> UpdateProduct(Product product);
        public Task<(int recordsAffected, string ProductDesc)> DeleteProduct(int productId);


    }
}
