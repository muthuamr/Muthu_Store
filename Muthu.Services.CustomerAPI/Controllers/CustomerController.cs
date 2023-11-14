using Microsoft.AspNetCore.Mvc;
using Muthu.MicroService.Services.IServices;
using Muthu.MicroService.ViewModel;

namespace Muthu.Services.CustomerAPI.Controllers
{
    [Route("api/customers")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private ResponseDto _responseDto;
        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
            _responseDto = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<ResponseDto>> GetCustomers()
        {
            _responseDto = await _customerService.GetCustomersAsync();
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return NotFound(_responseDto);
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<ResponseDto>> CreateCustomer([FromBody] CustomerCreateDto customerCreateDto)
        {
            _responseDto = await _customerService.CreateCustomer(customerCreateDto);
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return BadRequest(_responseDto);
            }
        }

        [HttpPut("{customerId}")]
        public async Task<ActionResult<ResponseDto>> UpdateCustomer([FromBody] CustomerDto customerDto)
        {
            _responseDto = await _customerService.UpdateCustomer(customerDto);
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return BadRequest(_responseDto);
            }
        }

        [HttpDelete("{customerId}")]
        public async Task<ActionResult<ResponseDto>> DeleteCustomer(int customerId)
        {
            _responseDto = await _customerService.DeleteCustomer(customerId);
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return NotFound(_responseDto);
            }
        }


    }
}
