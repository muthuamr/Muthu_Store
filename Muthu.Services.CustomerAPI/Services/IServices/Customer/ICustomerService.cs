using Microsoft.AspNetCore.Mvc;
using Muthu.Infrastructure.Peristence.Models;

namespace Muthu.Services.IServices
{
    public interface ICustomerService
    {
        Task<IEnumerable<Customer>> GetCustomers();
        Task<ActionResult> CreateCustomer(Customer customer);
        Task<ActionResult> UpdateCustomer(Customer customer);
        Task<ActionResult> DeleteCustomer(int Id);
    }
}
