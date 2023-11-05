using Microsoft.EntityFrameworkCore;
using Muthu.Infrastructure.Peristence.Models;
using Muthu.MicroService.Repositories.IRepositories;
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
            catch (DbException ex)
            {
                throw new Exception("Database error occurred", ex);
            }

        }

        public async Task<int> DeleteCustomer(int id)
        {
            var toDeleteCustomer = _muthuStoreContext.Customers.FindAsync(id);

            int recordsAffected = 0;
            if (toDeleteCustomer != null)
            {
                _muthuStoreContext.Customers.Remove(toDeleteCustomer.Result);
                recordsAffected = await _muthuStoreContext.SaveChangesAsync();
            }
            return recordsAffected;
        }

        public Task<IEnumerable<Customer>> GetCustomerAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Customer>> GetCustomersAsync()
        {
            return _muthuStoreContext.Customers.ToList();
        }

        public async Task<int> UpdateCustomer(Customer customer)
        {
            try
            {
                _muthuStoreContext.Entry(customer).State = EntityState.Modified;
                int recordsAffected = await _muthuStoreContext.SaveChangesAsync();
                return recordsAffected;
            }
            catch (DbException ex)
            {
                throw new Exception("Database error occurred", ex);
            }

        }
    }
}
