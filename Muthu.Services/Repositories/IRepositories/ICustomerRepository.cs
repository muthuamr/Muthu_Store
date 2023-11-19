using Muthu.Infrastructure.Models;

namespace Muthu.MicroService.Repositories.IRepositories
{
    public interface ICustomerRepository
    {
        public Task<IEnumerable<Customer>> GetCustomersAsync();
        public Task<IEnumerable<Customer>> GetCustomerAsync(int id);

        public Task<int> CreateCustomer(Customer customer);
        public Task<int> UpdateCustomer(Customer customer);
        public Task<int> DeleteCustomer(int id);
        public bool IsParentReferenced(int parentId);

    }
}
