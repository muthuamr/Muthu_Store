namespace Muthu.MicroService.ViewModel
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
