using Muthu.MicroService.ViewModel;

namespace Muthu.MicroService.Services.IServices
{
    public interface ISaleService
    {
        public Task<ResponseDto> GetSalesAsync();
        public Task<ResponseDto> GetSalesByIdAsync(long salesId);
        public Task<ResponseDto> CreateSale(SalesCreateDto salesCreateDto);
        public Task<ResponseDto> UpdateSale(SalesDto salesDto);
        public Task<ResponseDto> DeleteSale(long id);
    }
}
