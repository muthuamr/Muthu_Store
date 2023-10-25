using Microsoft.AspNetCore.Mvc;
using Muthu.Services.CustomerAPI.Service.IService;
using Muthu.StoreDB.Models;

namespace Muthu.Services.CustomerAPI.Service
{
    public class CustomerService : ICustomerService
    {

        private readonly MuthuStoreContext _muthuStoreContext;
        public CustomerService(MuthuStoreContext muthuStoreContext)
        {
            _muthuStoreContext = muthuStoreContext;
        }
        public Task<ActionResult> CreateCustomer(Customer customer)
        {
            _muthuStoreContext.Customers.ToList();
            throw new NotImplementedException();
        }

        public Task<ActionResult> DeleteCustomer(int Id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Customer>> GetCustomers()
        {
            throw new NotImplementedException();
        }

        public Task<ActionResult> UpdateCustomer(Customer customer)
        {
            throw new NotImplementedException();
        }
    }
}
