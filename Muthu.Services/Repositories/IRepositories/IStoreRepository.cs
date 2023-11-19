using Muthu.Infrastructure.Models;

namespace Muthu.MicroService.Repositories.IRepositories
{
    public interface IStoreRepository
    {
        public Task<IEnumerable<Store>> GetStoresAsync();
        public Task<Store> CreateStore(Store store);
        public Task<int> UpdateStore(Store store);
        public Task<(int records, Store store)> DeleteStore(int id);
        public bool IsParentReferenced(int parentId);

    }
}
