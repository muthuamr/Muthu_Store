using AutoMapper;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.Repositories.IRepositories;
using Muthu.MicroService.Services.IServices;
using Muthu.MicroService.ViewModel;

namespace Muthu.MicroService.Services.BusinessLogicServices
{
    public class SaleService : ISaleService
    {
        private readonly ISaleRepository _saleRepository;
        private readonly IMapper _mapper;
        private ResponseDto _responseDto;
        private Sale _sale;
        private int _recordsAffected;
        public SaleService(ISaleRepository saleRepository, IMapper mapper)
        {
            _saleRepository = saleRepository;
            _mapper = mapper;
            _responseDto = new ResponseDto();
            _sale = new Sale();
        }

        public async Task<ResponseDto> GetSalesAsync()
        {
            IEnumerable<Sale> _saleList = await _saleRepository.GetSalesAsync();
            if (_saleList.Any())
            {
                //IEnumerable<SalesViewSummaryDto> lstProducts = null;
                //lstProducts = _saleList.Select(x => new SalesViewSummaryDto
                //{
                //    ProductName = x.Product.Name,
                //    ProductPrice = x.Product.Price,
                //    SalesId = x.Id
                //}).ToList();
                //_responseDto.Result = lstProducts;

                _responseDto.Result = _mapper.Map<IEnumerable<SalesViewDetailDto>>(_saleList);
                _responseDto.IsSuccess = true;
            }
            else
            {
                _responseDto.Message = "No sales record exists";
            }
            return _responseDto;
        }

        public async Task<ResponseDto> GetSalesByIdAsync(long salesId)
        {
            IEnumerable<Sale> _sale = await _saleRepository.GetSalesByIdAsync(salesId);
            if (_sale.Any())
            {
                _responseDto.Result = _mapper.Map<IEnumerable<SalesViewDetailDto>>(_sale);
                _responseDto.IsSuccess = true;
            }
            else
            {
                _responseDto.IsSuccess = false;
            }
            return _responseDto;
        }

        public async Task<ResponseDto> CreateSale(SalesCreateDto saleDto)
        {
            _sale = _mapper.Map<Sale>(saleDto);
            _sale = await _saleRepository.CreateSale(_sale);
            if (_sale.Id > 0)
            {
                _responseDto.Result = _sale.Id;
                _responseDto.IsSuccess = true;
                _responseDto.Message = "Sale record created successfully";
            }
            else
            {
                _responseDto.Message = "Sale record failed to create";
            }
            return _responseDto;
        }

        public async Task<ResponseDto> DeleteSale(long id)
        {
            var result = await _saleRepository.DeleteSale(id);
            if (result.records > 0)
            {
                _responseDto.Message = "Sales Deleted successfully";
                _responseDto.IsSuccess = true;
            }
            else
            {
                _responseDto.Message = "Sales failed to delete";
            }
            return _responseDto;
        }


        public async Task<ResponseDto> UpdateSale(SalesDto saleDto)
        {
            _sale = _mapper.Map<Sale>(saleDto);
            _sale.DateSold = DateTime.Now;
            _recordsAffected = await _saleRepository.UpdateSale(_sale);
            if (_recordsAffected > 0)
            {
                _responseDto.IsSuccess = true;
                _responseDto.Message = "Sales updated successfully";
            }
            else
            {
                _responseDto.Message = "Sales failed to update";
            }
            return _responseDto;
        }
    }
}
