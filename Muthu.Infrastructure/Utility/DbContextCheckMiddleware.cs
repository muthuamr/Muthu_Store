using Microsoft.AspNetCore.Http;
using Muthu.Infrastructure.Models;

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


    }
}
