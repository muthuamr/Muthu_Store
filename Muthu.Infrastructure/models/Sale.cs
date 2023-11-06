using System;
using System.Collections.Generic;

namespace Muthu.Infrastructure.Models;

public partial class Sale
{
    public long Id { get; set; }

    public int ProductId { get; set; }

    public int CustomerId { get; set; }

    public byte StoreId { get; set; }

    public DateTime DateSold { get; set; }

    public virtual Customer Customer { get; set; }

    public virtual Product Product { get; set; }

    public virtual Store Store { get; set; }
}
