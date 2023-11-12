using Muthu.MicroService.Models.Dtos;

namespace Muthu.MicroService.Services.IServices
{
    public interface IStoreService
    {

        public Task<ResponseDto> GetStoresAsync();
        public Task<ResponseDto> CreateStore(StoreCreateDto storeCreateDto);

        public Task<ResponseDto> UpdateStore(StoreDto storeDto);

        public Task<ResponseDto> DeleteStore(int id);

    }
}
