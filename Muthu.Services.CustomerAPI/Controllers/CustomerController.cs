using Microsoft.AspNetCore.Mvc;
using Muthu.MicroService.Models.Dtos;
using Muthu.MicroService.Services.IServices;

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

        [HttpPost("Create")]
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

        [HttpPut("{CustomerId}")]
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

        [HttpDelete("{Id}")]
        public async Task<ActionResult<ResponseDto>> DeleteCustomer(int Id)
        {
            _responseDto = await _customerService.DeleteCustomer(Id);
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
