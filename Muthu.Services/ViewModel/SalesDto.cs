namespace Muthu.MicroService.ViewModel
{
    public class SalesCreateDto
    {

        public int ProductId { get; set; }
        public int CustomerId { get; set; }
        public int StoreId { get; set; }

    }

    public class SalesDto : SalesCreateDto
    {
        public long SalesId { get; set; }

    }


    public class SalesViewDetailDto : SalesDto
    {
        public string CustomerName { get; set; } = null!;
        public string StoreName { get; set; } = null!;
        public string ProductName { get; set; } = null!;
        public decimal ProductPrice { get; set; }
        public string OrderDateTime { get; set; }
    }

    //public class SalesViewSummaryDto
    //{
    //    public long SalesId { get; set; }
    //    public string ProductName { get; set; } = null!;
    //    public decimal ProductPrice { get; set; }
    //}


}



