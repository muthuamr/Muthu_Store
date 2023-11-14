using Muthu.MicroService.ViewModel;

namespace Muthu.MicroService.Services.IServices
{
    public interface ICustomerService
    {
        Task<ResponseDto> GetCustomersAsync();
        Task<ResponseDto> CreateCustomer(CustomerCreateDto customerCreateDto);
        Task<ResponseDto> UpdateCustomer(CustomerDto customer);
        Task<ResponseDto> DeleteCustomer(int id);
    }
}
