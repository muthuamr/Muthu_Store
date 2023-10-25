using Microsoft.AspNetCore.Mvc;
using Muthu.Services.CustomerAPI.Service;
using Muthu.StoreDB.Models;

namespace Muthu.Services.CustomerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        [HttpGet]
        public Task<IEnumerable<Customer>> GetCustomers()
        {
            CustomerService customerService = new CustomerService();
            return customerService.GetCustomers();

            //return new[] { new Customer() };
        }

        [HttpPost]
        public Task<ActionResult> CreateCustomer(Customer customer)
        {
            CustomerService customerService = new CustomerService();
            return customerService.CreateCustomer(customer);
        }


    }
}
