using Microsoft.AspNetCore.Http;
using Muthu.Infrastructure.Peristence.Models;

namespace Muthu.Infrastructure.Utility
{
    public class DbContextCheckMiddleware
    {
        private readonly RequestDelegate _requestDelegate;

        public DbContextCheckMiddleware(RequestDelegate requestDelegate)
        {
            _requestDelegate = requestDelegate;
        }

        public async Task Invoke(HttpContext context, MuthuStoreContext storeContext)
        {
            if (storeContext == null)
            {
                context.Response.StatusCode = StatusCodes.Status500InternalServerError;
                await context.Response.WriteAsync("Database context is not available");
            }
            else
            {
                await _requestDelegate(context);
            }
        }


        //private readonly RequestDelegate _next;

        //public DbContextCheckMiddleware(RequestDelegate next)
        //{
        //    _next = next;
        //}

        //public async Task Invoke(HttpContext context, MuthuStoreContext dbContext)
        //{
        //    if (dbContext == null)
        //    {
        //        context.Response.StatusCode = StatusCodes.Status500InternalServerError;
        //        await context.Response.WriteAsync("Database context is not available.");
        //    }
        //    else
        //    {
        //        await _next(context);
        //    }
        //}
    }
}
