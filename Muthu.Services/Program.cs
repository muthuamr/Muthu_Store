using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Muthu.Infrastructure.Models;
using Muthu.Infrastructure.Utility;
using Muthu.MicroService.Mapper;
using Muthu.MicroService.Repositories;
using Muthu.MicroService.Repositories.IRepositories;
using Muthu.MicroService.Services.BusinessLogicServices;
using Muthu.MicroService.Services.IServices;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string strConnection = builder.Configuration.GetConnectionString("MuthuStoreConnection");
builder.Services.AddDbContext<MuthuStoreContext>(options => options.UseSqlServer(strConnection));

builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
builder.Services.AddScoped<ICustomerService, CustomerService>();

builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();

builder.Services.AddScoped<IStoreRepository, StoreRepository>();
builder.Services.AddScoped<IStoreService, StoreService>();

builder.Services.AddScoped<ISaleRepository, SaleRepository>();
builder.Services.AddScoped<ISaleService, SaleService>();

IMapper mapper = MappingConfig.RegisterMaps().CreateMapper();
builder.Services.AddSingleton(mapper);
builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("CorsPolicy",
//        builder => builder.AllowAnyOrigin()
//        .AllowAnyMethod()
//        .AllowAnyHeader());
//});

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

//builder.Services.CorsConfiguration();

var app = builder.Build();
app.UseCors("corsapp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseMiddleware<DbContextCheckMiddleware>();

app.Run();
