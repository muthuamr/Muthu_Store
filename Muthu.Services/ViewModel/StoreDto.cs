namespace Muthu.MicroService.ViewModel
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
