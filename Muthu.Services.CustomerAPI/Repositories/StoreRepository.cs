using Microsoft.EntityFrameworkCore;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.Repositories.IRepositories;
using System.Data.Common;

namespace Muthu.MicroService.Repositories
{

    public class StoreRepository : IStoreRepository
    {
        private MuthuStoreContext _muthuStoreContext;

        public StoreRepository(MuthuStoreContext context)
        {
            _muthuStoreContext = context;
        }
        public async Task<Store> CreateStore(Store store)
        {
            try
            {
                await _muthuStoreContext.Stores.AddAsync(store);
                await _muthuStoreContext.SaveChangesAsync();
                return store;
            }
            catch (DbException ex)
            {
                throw new Exception($"Error occurred while creating a new store record: {ex}");
            }
            catch (Exception ex)
            {
                throw new Exception($"Error occurred while creating a new store record: {ex}");
            }
        }

        public async Task<(int records, Store store)> DeleteStore(int id)
        {
            try
            {
                Store toDeleteStore = await _muthuStoreContext.Stores.FirstAsync(x => x.Id == id);

                _muthuStoreContext.Stores.Remove(toDeleteStore);
                int recordsAffected = await _muthuStoreContext.SaveChangesAsync();
                return (recordsAffected, toDeleteStore);

            }
            catch (DbException ex)
            {
                throw new Exception($"The Store record not exists {ex}");
            }

        }

        public async Task<IEnumerable<Store>> GetStoresAsync()
        {
            try
            {
                return await _muthuStoreContext.Stores.ToListAsync();
            }
            catch (DbException ex)
            {
                throw new Exception($"while fetching Store information from Database, encountered error: {ex}");
            }
        }

        public async Task<int> UpdateStore(Store store)
        {
            try
            {
                _muthuStoreContext.Entry(store).State = EntityState.Modified;
                return await _muthuStoreContext.SaveChangesAsync();
            }
            catch (DbException ex)
            {
                throw new Exception($"Error occurred while updating Store record {ex}");
            }

        }

        public bool IsParentReferenced(int parentId)
        {
            // Check if there are any Child entities referencing the specified ParentId
            bool isReferenced = _muthuStoreContext.Sales.Any(c => c.StoreId == parentId);

            return isReferenced;
        }
    }
}
