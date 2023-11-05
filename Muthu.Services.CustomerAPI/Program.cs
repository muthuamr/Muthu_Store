using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Muthu.Infrastructure.Peristence.Models;
using Muthu.Infrastructure.Utility;
using Muthu.MicroService.Mapper;
using Muthu.MicroService.Repositories;
using Muthu.MicroService.Repositories.IRepositories;
using Muthu.MicroService.Services.BusinessLogicServices;
using Muthu.MicroService.Services.IServices;

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

IMapper mapper = CustomerMappingConfig.RegisterMaps().CreateMapper();
builder.Services.AddSingleton(mapper);
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

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
