using AutoMapper;
using Muthu.Infrastructure.Models;
using Muthu.MicroService.Repositories.IRepositories;
using Muthu.MicroService.Services.IServices;
using Muthu.MicroService.ViewModel;

namespace Muthu.MicroService.Services.BusinessLogicServices
{
    public class StoreService : IStoreService
    {
        private readonly IStoreRepository _storeRepository;
        private readonly IMapper _mapper;
        private ResponseDto _responseDto;
        private Store _store;
        private int _recordAffected;
        public StoreService(IStoreRepository storeRepository, IMapper mapper)
        {
            _storeRepository = storeRepository;
            _mapper = mapper;
            _responseDto = new ResponseDto();
            _store = new Store();
            _recordAffected = 0;

        }
        public async Task<ResponseDto> CreateStore(StoreCreateDto storeCreateDto)
        {
            try
            {
                if (storeCreateDto == null)
                {
                    _responseDto.Result = false;
                    _responseDto.Message = "Store information is empty!";
                    return _responseDto;
                }

                _store = _mapper.Map<Store>(storeCreateDto);
                _store = await _storeRepository.CreateStore(_store);
                if (_store != null)
                {
                    _responseDto.Result = _mapper.Map<StoreDto>(_store);
                    _responseDto.IsSuccess = true;
                    _responseDto.Message = $"Store '{_store.Name}' created successfully";
                }
            }
            catch
            {
                _responseDto.Message = "Create Store Failed!";
            }
            return _responseDto;
        }

        public async Task<ResponseDto> DeleteStore(int id)
        {
            try
            {
                bool isReferenced = _storeRepository.IsParentReferenced(id);
                if (!isReferenced)
                {
                    var result = await _storeRepository.DeleteStore(id);
                    if (result.Item1 > 0)
                    {
                        _responseDto.IsSuccess = true;
                        _responseDto.Message = $"Store '{result.Item2.Name}' deleted successfully";
                    }
                    else
                    {
                        _responseDto.Message = $"Store '{result.Item2.Name}' delete failed";
                    }
                }
                else
                {
                    _responseDto.IsSuccess = false;
                    _responseDto.Message = "The selected store already have referenced with some other data. So the record is unable to delete.";
                }
            }
            catch
            {
                _responseDto.Message = "Delete store failed";
            }
            return _responseDto;
        }

        public async Task<ResponseDto> GetStoresAsync()
        {
            try
            {
                IEnumerable<Store> storelist = await _storeRepository.GetStoresAsync();
                if (storelist.Any())
                {
                    _responseDto.IsSuccess = true;
                    _responseDto.Result = _mapper.Map<IEnumerable<StoreDto>>(storelist);
                }
                else
                {
                    _responseDto.Message = "No record exists!";
                }
            }
            catch
            {
                _responseDto.Message = "Failed to retrieve!";
            }
            return _responseDto;
        }

        public async Task<ResponseDto> UpdateStore(StoreDto storeDto)
        {
            try
            {
                if (storeDto == null)
                {
                    _responseDto.Result = false;
                    _responseDto.Message = "Store information is empty!";
                    return _responseDto;
                }
                _store = _mapper.Map<Store>(storeDto);
                _store.IsActive = true;
                _recordAffected = await _storeRepository.UpdateStore(_store);
                if (_recordAffected > 0)
                {
                    _responseDto.IsSuccess = true;
                    _responseDto.Message = $"Store '{storeDto.StoreName}' updated successfully";
                }
                else
                {
                    _responseDto.Message = $"Store '{storeDto.StoreName}' failed to update";
                }
            }
            catch
            {
                _responseDto.Message = $"Store '{storeDto.StoreName}' failed to update";
            }
            return _responseDto;

        }
    }
}
