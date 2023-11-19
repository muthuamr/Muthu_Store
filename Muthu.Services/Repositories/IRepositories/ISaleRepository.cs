using Muthu.Infrastructure.Models;

namespace Muthu.MicroService.Repositories.IRepositories
{
    public interface ISaleRepository
    {
        public Task<IEnumerable<Sale>> GetSalesAsync();

        public Task<IEnumerable<Sale>> GetSalesByIdAsync(long saleId);
        public Task<Sale> CreateSale(Sale sale);

        public Task<int> UpdateSale(Sale sale);
        public Task<(int records, Sale? sale)> DeleteSale(long id);

    }
}
