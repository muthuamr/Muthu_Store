namespace Muthu.MicroService.Models.Dtos
{
    public class ProductCreateDto
    {

        public string ProductName { get; set; } = null!;

        public decimal ProductPrice { get; set; }


    }

    public class ProductDto : ProductCreateDto
    {
        public int ProductId { get; set; }
    }
}
