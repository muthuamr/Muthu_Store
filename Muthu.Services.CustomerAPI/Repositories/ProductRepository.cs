using Microsoft.EntityFrameworkCore;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.Repositories.IRepositories;

namespace Muthu.MicroService.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly MuthuStoreContext _muthuStoreContext;
        public ProductRepository(MuthuStoreContext storeContext)
        {
            _muthuStoreContext = storeContext;
        }
        public async Task<int> CreateProduct(Product product)
        {
            try
            {
                _muthuStoreContext.Products.Add(product);
                return await _muthuStoreContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                throw new Exception($"Products failed to add and error is {ex}");
            }
            catch (DbUpdateException ex)
            {
                throw new Exception($"Products failed to add and error is {ex}");
            }
            catch (Exception ex)
            {
                throw new Exception($"Products failed to add and error is {ex}");
            }
        }

        public async Task<(int recordsAffected, string ProductDesc)> DeleteProduct(int productId)
        {
            try
            {
                int noofrecordsaffected = 0;
                var toDeleteProduct = _muthuStoreContext.Products.FirstOrDefault(x => x.Id == productId);
                if (toDeleteProduct != null)
                {
                    _muthuStoreContext.Products.Remove(toDeleteProduct);
                    noofrecordsaffected = await _muthuStoreContext.SaveChangesAsync();
                    return (noofrecordsaffected, toDeleteProduct.Description);
                }
                else
                    return (noofrecordsaffected, string.Empty);

            }
            catch (DbUpdateConcurrencyException ex)
            {
                throw new Exception($"Products failed to delete and error is {ex}");
            }
            catch (DbUpdateException ex)
            {
                throw new Exception($"Products failed to delete and error is {ex}");
            }
            catch (Exception ex)
            {
                throw new Exception($"Products failed to delete and error is {ex}");
            }

        }

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            return await _muthuStoreContext.Products.ToListAsync();
        }

        public async Task<int> UpdateProduct(Product product)
        {
            try
            {
                int noofrecordsaffected = 0;
                var toUpdateProduct = _muthuStoreContext.Products.FirstOrDefault(x => x.Id == product.Id);
                if (toUpdateProduct != null)
                {
                    toUpdateProduct.Description = product.Description;
                    toUpdateProduct.Price = product.Price;

                    _muthuStoreContext.Entry(toUpdateProduct).State = EntityState.Modified;
                    noofrecordsaffected = await _muthuStoreContext.SaveChangesAsync();
                }
                return noofrecordsaffected;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                throw new Exception($"Produts failed to update and error is {ex}");
            }
            catch (DbUpdateException ex)
            {
                throw new Exception($"Produts failed to update and error is {ex}");
            }
            catch (Exception ex)
            {
                throw new Exception($"Produts failed to update and error is {ex}");
            }
        }
    }
}
