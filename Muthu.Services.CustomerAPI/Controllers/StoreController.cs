using Microsoft.AspNetCore.Mvc;
using Muthu.MicroService.Services.IServices;
using Muthu.MicroService.ViewModel;

namespace Muthu.MicroService.Controllers
{
    [Route("api/store")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly IStoreService _storeService;
        private ResponseDto _responseDto;

        public StoreController(IStoreService storeService)
        {
            _storeService = storeService;
            _responseDto = new ResponseDto();
        }
        [HttpGet]
        public async Task<ActionResult<ResponseDto>> GetStores()
        {
            _responseDto = await _storeService.GetStoresAsync();
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
        public async Task<ActionResult<ResponseDto>> CreateStore([FromBody] StoreCreateDto storeCreateDto)
        {
            _responseDto = await _storeService.CreateStore(storeCreateDto);
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return BadRequest(_responseDto);
            }
        }

        [HttpPut("{storeId}")]
        public async Task<ActionResult<ResponseDto>> UpdateStore([FromBody] StoreDto storeDto)
        {
            _responseDto = await _storeService.UpdateStore(storeDto);
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return BadRequest(_responseDto);
            }
        }

        [HttpDelete("{storeId}")]
        public async Task<ActionResult<ResponseDto>> DeleteProduct(int storeId)
        {
            _responseDto = await _storeService.DeleteStore(storeId);
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
