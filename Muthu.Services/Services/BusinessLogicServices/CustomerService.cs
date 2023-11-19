using AutoMapper;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.Repositories.IRepositories;
using Muthu.MicroService.Services.IServices;
using Muthu.MicroService.ViewModel;

namespace Muthu.MicroService.Services.BusinessLogicServices
{
    public class CustomerService : ICustomerService
    {

        private readonly ICustomerRepository _customerRepository;
        private readonly IMapper _mapperCustomer;
        private ResponseDto _responseDto;
        private int recordsAffected = 0;
        public CustomerService(ICustomerRepository customerRepository, IMapper mapperCustomer)
        {
            _customerRepository = customerRepository;
            _mapperCustomer = mapperCustomer;
            _responseDto = new ResponseDto();
        }

        public async Task<ResponseDto> CreateCustomer(CustomerCreateDto customerDto)
        {
            int recordsAffected = 0;
            Customer customer = _mapperCustomer.Map<Customer>(customerDto);
            if (customer != null)
            {
                customer.IsActive = true;
                recordsAffected = await _customerRepository.CreateCustomer(customer);
            }
            if (recordsAffected > 0)
            {
                CustomerDto customerDtos = _mapperCustomer.Map<CustomerDto>(customer);
                _responseDto.Result = customerDtos;
                _responseDto.IsSuccess = true;
                _responseDto.Message = "Customer Added Successfully!";
            }
            else
            {
                _responseDto.IsSuccess = false;
                _responseDto.Message = "Customer Failed to Add!";
            }
            return _responseDto;
        }

        public async Task<ResponseDto> UpdateCustomer(CustomerDto customerDto)
        {
            recordsAffected = 0;
            Customer customer = _mapperCustomer.Map<Customer>(customerDto);
            if (customer != null)
            {
                customer.IsActive = true;
                recordsAffected = await _customerRepository.UpdateCustomer(customer);
            }
            if (recordsAffected > 0)
            {
                _responseDto.IsSuccess = true;
                _responseDto.Message = "Customer Updated Successfully!";
            }
            else
            {
                _responseDto.IsSuccess = false;
                _responseDto.Message = "Customer Failed to Update!";
            }
            return _responseDto;
        }

        public async Task<ResponseDto> DeleteCustomer(int Id)
        {
            bool isReferenced = _customerRepository.IsParentReferenced(Id);
            if (!isReferenced)
            {
                recordsAffected = 0;
                recordsAffected = await _customerRepository.DeleteCustomer(Id);

                if (recordsAffected > 0)
                {
                    _responseDto.IsSuccess = true;
                    _responseDto.Message = "Customer Deleted Successfully!";
                }
                else
                {
                    _responseDto.IsSuccess = false;
                    _responseDto.Message = "Customer Failed to Delete!";
                }
            }
            else
            {
                _responseDto.IsSuccess = false;
                _responseDto.Message = "The selected customer already have referenced with some other data. So the record is unable to delete.";
            }
            return _responseDto;
        }

        public async Task<ResponseDto> GetCustomersAsync()
        {
            IEnumerable<Customer> objCustomerLit = await _customerRepository.GetCustomersAsync();
            if (objCustomerLit != null)
            {
                IEnumerable<CustomerDto> objCustomerDtoLit = _mapperCustomer.Map<IEnumerable<CustomerDto>>(objCustomerLit);
                _responseDto.Result = objCustomerDtoLit;
                _responseDto.IsSuccess = true;
            }
            else
            {
                _responseDto.Result = null;
                _responseDto.Message = "No Customer exists!";
            }

            return _responseDto;

        }



    }
}
