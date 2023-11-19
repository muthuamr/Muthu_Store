using Microsoft.AspNetCore.Mvc;
using Muthu.MicroService.Services.IServices;
using Muthu.MicroService.ViewModel;

namespace Muthu.MicroService.Controllers
{
    [Route("api/sale")]
    [ApiController]


    public class SaleController : ControllerBase
    {
        private readonly ISaleService _saleService;
        private ResponseDto _responseDto;
        public SaleController(ISaleService saleService)
        {
            _responseDto = new ResponseDto();
            _saleService = saleService;
        }

        [HttpGet]
        public async Task<ActionResult<ResponseDto>> GetSales()
        {
            _responseDto = await _saleService.GetSalesAsync();
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return NotFound(_responseDto);
            }

        }

        [HttpGet("{salesId}")]
        public async Task<ActionResult<ResponseDto>> GetSalesByIdAsync(long salesId)
        {
            _responseDto = await _saleService.GetSalesByIdAsync(salesId);
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
        public async Task<ActionResult<ResponseDto>> CreateSale([FromBody] SalesCreateDto salesCreateDto)
        {

            _responseDto = await _saleService.CreateSale(salesCreateDto);
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return BadRequest(_responseDto);
            }
        }

        [HttpPut("{update}")]
        public async Task<ActionResult<ResponseDto>> UpdateSale([FromBody] SalesDto salesDto)
        {
            _responseDto = await _saleService.UpdateSale(salesDto);
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return Ok(BadRequest(_responseDto));
            }
        }

        [HttpDelete("{salesId}")]
        public async Task<ActionResult<ResponseDto>> DeleteSale(long salesId)
        {
            _responseDto = await _saleService.DeleteSale(salesId);
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return BadRequest(_responseDto);
            }
        }
    }
}
