using Microsoft.AspNetCore.Mvc;
using Muthu.MicroService.Models.Dtos;
using Muthu.MicroService.Services.IServices;

namespace Muthu.MicroService.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private ResponseDto _responseDto;
        public ProductController(IProductService productService)
        {
            _productService = productService;
            _responseDto = new ResponseDto();
        }
        [HttpGet]
        public async Task<ActionResult<ResponseDto>> GetProducts()
        {
            _responseDto = await _productService.GetProductsAsync();
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
        public async Task<ActionResult<ResponseDto>> CreateProduct([FromBody] ProductCreateDto productCreateDto)
        {
            if (productCreateDto == null)
            {
                return BadRequest(_responseDto);
            }

            _responseDto = await _productService.CreateProduct(productCreateDto);

            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
            {
                return BadRequest(_responseDto);
            }
        }

        [HttpPut("{productId}")]
        public async Task<ActionResult<ResponseDto>> UpdateProduct([FromBody] ProductDto productDto)
        {
            if (productDto == null)
            {
                return BadRequest(_responseDto);
            }
            _responseDto = await _productService.UpdateProduct(productDto);
            if (_responseDto.IsSuccess)
            {
                return Ok(_responseDto);
            }
            else
                return BadRequest(_responseDto);
        }

        [HttpDelete("{productId}")]
        public async Task<ActionResult<ResponseDto>> DeleteProduct(int productId)
        {
            _responseDto = await _productService.DeleteProduct(productId);
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
