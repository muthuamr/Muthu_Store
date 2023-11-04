using System;
using System.Collections.Generic;

namespace Muthu.Infrastructure.Peristence.Models;

public partial class Sale
{
    public long Id { get; set; }

    public int ProductId { get; set; }

    public int CustomerId { get; set; }

    public byte StoreId { get; set; }

    public DateTime DateSold { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;

    public virtual Store Store { get; set; } = null!;
}
