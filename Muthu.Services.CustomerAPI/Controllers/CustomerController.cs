using Microsoft.AspNetCore.Mvc;
using Muthu.Infrastructure.Peristence.Models;

namespace Muthu.Services.CustomerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        [HttpGet]
        public Task<IEnumerable<Customer>> GetCustomers()
        {

            return null;
        }

        [HttpPost]
        public Task<ActionResult> CreateCustomer(Customer customer)
        {
            return null;
        }


    }
}
