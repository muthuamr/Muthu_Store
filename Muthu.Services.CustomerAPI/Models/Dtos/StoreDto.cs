namespace Muthu.MicroService.Models.Dtos
{
    public class StoreCreateDto
    {
        public string StoreName { get; set; } = null!;
        public string? StoreAddress { get; set; }
    }
    public class StoreDto : StoreCreateDto
    {
        public int StoreId { get; set; }
    }
}
