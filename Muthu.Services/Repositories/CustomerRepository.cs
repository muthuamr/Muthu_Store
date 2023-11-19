using Microsoft.EntityFrameworkCore;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.Repositories.IRepositories;
using System.Data;
using System.Data.Common;

namespace Muthu.MicroService.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly MuthuStoreContext _muthuStoreContext;

        public CustomerRepository(MuthuStoreContext muthuStoreContext)
        {
            _muthuStoreContext = muthuStoreContext;
        }

        public async Task<int> CreateCustomer(Customer customer)
        {
            try
            {
                _muthuStoreContext.Customers.Add(customer);
                int recordsAffected = await _muthuStoreContext.SaveChangesAsync();
                return recordsAffected;
            }
            catch (DBConcurrencyException ex)
            {
                throw new Exception($"Create customer failed and error is {ex}");
            }
            catch (DbException ex)
            {
                throw new Exception($"Create customer failed and error is {ex}");
            }
            catch (Exception ex)
            {
                throw new Exception($"Create customer failed and error is {ex}");
            }

        }

        public async Task<int> DeleteCustomer(int id)
        {
            try
            {
                var toDeleteCustomer = await _muthuStoreContext.Customers.FirstOrDefaultAsync(x => x.Id == id);

                int recordsAffected = 0;
                if (toDeleteCustomer != null)
                {
                    _muthuStoreContext.Customers.Remove(toDeleteCustomer);
                    recordsAffected = await _muthuStoreContext.SaveChangesAsync();
                }
                return recordsAffected;
            }
            catch (DBConcurrencyException ex)
            {
                throw new Exception($"Create customer failed and error is {ex}");
            }
            catch (DbUpdateException ex)
            {
                throw new Exception($"Create customer failed and error is {ex}");
            }
            catch (Exception ex)
            {
                throw new Exception($"Create customer failed and error is {ex}");
            }
        }

        public Task<IEnumerable<Customer>> GetCustomerAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Customer>> GetCustomersAsync()
        {
            return await _muthuStoreContext.Customers.ToListAsync();
        }

        public async Task<int> UpdateCustomer(Customer customer)
        {
            try
            {
                _muthuStoreContext.Entry(customer).State = EntityState.Modified;
                int recordsAffected = await _muthuStoreContext.SaveChangesAsync();
                return recordsAffected;
            }
            catch (DBConcurrencyException ex)
            {
                throw new Exception($"Create customer failed and error is {ex}");
            }
            catch (DbUpdateException ex)
            {
                throw new Exception($"Create customer failed and error is {ex}");
            }
            catch (Exception ex)
            {
                throw new Exception($"Create customer failed and error is {ex}");
            }
        }

        public bool IsParentReferenced(int parentId)
        {
            // Check if there are any Child entities referencing the specified ParentId
            bool isReferenced = _muthuStoreContext.Sales.Any(c => c.CustomerId == parentId);

            return isReferenced;
        }
    }

}


