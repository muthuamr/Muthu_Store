using AutoMapper;
using Muthu.Infrastructure.Peristence.Models;
using Muthu.MicroService.Models.Dtos;
using Muthu.MicroService.Repositories.IRepositories;
using Muthu.MicroService.Services.IServices;


namespace Muthu.MicroService.Services.BusinessLogicServices
{
    public class CustomerService : ICustomerService
    {

        private readonly ICustomerRepository _customerRepository;
        private readonly IMapper _mapper;
        private ResponseDto _responseDto;
        private int recordsAffected = 0;
        public CustomerService(ICustomerRepository customerRepository, IMapper mapper)
        {
            _customerRepository = customerRepository;
            _mapper = mapper;
            _responseDto = new ResponseDto();
        }

        public async Task<ResponseDto> CreateCustomer(CustomerCreateDto customerDto)
        {
            int recordsAffected = 0;
            Customer customer = _mapper.Map<Customer>(customerDto);
            if (customer != null)
            {
                customer.IsActive = true;
                recordsAffected = await _customerRepository.CreateCustomer(customer);
            }
            if (recordsAffected > 0)
            {
                CustomerDto customerDtos = _mapper.Map<CustomerDto>(customer);
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
            Customer customer = _mapper.Map<Customer>(customerDto);
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
            return _responseDto;
        }

        public async Task<ResponseDto> GetCustomersAsync()
        {
            IEnumerable<Customer> objCustomerLit = await _customerRepository.GetCustomersAsync();
            if (objCustomerLit != null)
            {
                IEnumerable<CustomerDto> objCustomerDtoLit = _mapper.Map<IEnumerable<CustomerDto>>(objCustomerLit);
                _responseDto.Result = objCustomerDtoLit;
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
