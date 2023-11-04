namespace Muthu.Infrastructure.Peristence.Models;

public partial class Customer
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Address { get; set; }

    public bool? IsActive { get; set; }

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
