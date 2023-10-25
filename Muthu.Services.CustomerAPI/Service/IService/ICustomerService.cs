using Microsoft.AspNetCore.Mvc;
using Muthu.StoreDB.Models;
namespace Muthu.Services.CustomerAPI.Service.IService
{
    public interface ICustomerService
    {
        Task<IEnumerable<Customer>> GetCustomers();
        Task<ActionResult> CreateCustomer(Customer customer);
        Task<ActionResult> UpdateCustomer(Customer customer);
        Task<ActionResult> DeleteCustomer(int Id);
    }
}
