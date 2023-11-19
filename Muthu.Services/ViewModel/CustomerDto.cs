namespace Muthu.MicroService.ViewModel
{
    public class CustomerCreateDto
    {
        public string CustomerName { get; set; } = null!;

        public string? CustomerAddress { get; set; }

    }

    public class CustomerDto : CustomerCreateDto
    {
        public int CustomerId { get; set; }

    }
}
