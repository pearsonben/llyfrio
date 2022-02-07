using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            
            var host = CreateHostBuilder(args).Build();


            // as soon as the application is ended, the services within the scope are disposed of
            using(var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                // on Application startup, applies any pending migrations. If no DB exists, create one and apply the migrations.
                try
                {
                    var context = services.GetRequiredService<DataContext>();

                    await context.Database.MigrateAsync();
                    await Seed.SeedData(context);

                }
                catch (Exception ex)
                {

                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occured during migration");
                }


                // starts the application
                await host.RunAsync();
            }

        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
