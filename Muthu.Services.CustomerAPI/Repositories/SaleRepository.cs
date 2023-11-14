using Microsoft.EntityFrameworkCore;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.Repositories.IRepositories;

namespace Muthu.MicroService.Repositories
{
    public class SaleRepository : ISaleRepository
    {
        private readonly MuthuStoreContext _storeContext;
        public SaleRepository(MuthuStoreContext muthuStoreContext)
        {
            _storeContext = muthuStoreContext;
        }

        public async Task<Sale> CreateSale(Sale sale)
        {
            _storeContext.Sales.Add(sale);
            await _storeContext.SaveChangesAsync();
            return sale;
        }

        public async Task<(int records, Sale? sale)> DeleteSale(long id)
        {
            int recordsAffected = 0;
            Sale? toDeleteSaleRecord = _storeContext.Sales.FirstOrDefault(x => x.Id == id);
            if (toDeleteSaleRecord != null)
            {
                _storeContext.Sales.Remove(toDeleteSaleRecord);
                recordsAffected = await _storeContext.SaveChangesAsync();
                return (recordsAffected, toDeleteSaleRecord);
            }
            else
                return (recordsAffected, null);

        }

        public async Task<IEnumerable<Sale>> GetSalesAsync()
        {
            //return await _storeContext.Sales.
            //     Include(sale => sale.Product).
            //     ToListAsync();

            return await _storeContext.Sales.
               Include(sale => sale.Product).
               Include(sale => sale.Store).
               Include(sale => sale.Customer).
               ToListAsync();
        }

        public async Task<IEnumerable<Sale>> GetSalesByIdAsync(long saleId)
        {
            return await _storeContext.Sales.Where(x => x.Id == saleId).
                Include(sale => sale.Product).
                Include(sale => sale.Store).
                Include(sale => sale.Customer).
                ToListAsync();
        }

        public async Task<int> UpdateSale(Sale sale)
        {
            var saletoUpdate = _storeContext.Sales.FirstOrDefault(x => x.Id == sale.Id);
            if (saletoUpdate != null)
            {
                saletoUpdate.StoreId = sale.StoreId;
                saletoUpdate.CustomerId = sale.CustomerId;
                saletoUpdate.ProductId = sale.ProductId;
                saletoUpdate.DateSold = sale.DateSold;
                _storeContext.Entry(saletoUpdate).State = EntityState.Modified;
                return await _storeContext.SaveChangesAsync();
            }
            return 0;


        }
    }
}
