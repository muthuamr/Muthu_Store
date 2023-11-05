namespace Muthu.MicroService.Extensions
{
    public static class ConfigureExtensions
    {
        public static void CorsConfiguration(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                builder => builder.AllowAnyOrigin().
                AllowAnyMethod().
                AllowAnyHeader());
            });
        }
    }
}
