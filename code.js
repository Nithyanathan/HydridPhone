using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;

namespace Website
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRouting();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var routeBuilder = new RouteBuilder(app);

            routeBuilder.MapGet("", async context =>
            {
                context.Response.ContentType = "text/html";

                using (var writer = new StreamWriter(context.Response.Body))
                {
                    writer.WriteLine("<!DOCTYPE html>");
                    writer.WriteLine("<html>");
                    writer.WriteLine("<head>");
                    writer.WriteLine("<title>Welcome to our new Cloud-Based Phone</title>");
                    writer.WriteLine("</head>");
                    writer.WriteLine("<body>");
                    writer.WriteLine("<h1>Welcome to our new Cloud-Based Phone</h1>");
                    writer.WriteLine("<p>Our new phone is fully modular and runs multiple operating systems.</p>");
                    writer.WriteLine("<p>Experience maximum flexibility and versatility with our modular phone</p>");
                    writer.WriteLine("</body>");
                    writer.WriteLine("</html>");
                }
            });

            routeBuilder.MapGet("features", async context =>
            {
                context.Response.ContentType = "text/html";

                using (var writer = new StreamWriter(context.Response.Body))
                {
                    writer.WriteLine("<!DOCTYPE html>");
                    writer.WriteLine("<html>");
                    writer.WriteLine("<head>");
                    writer.WriteLine("<title>Features of Our Cloud-Based Phone</title>");
                    writer.WriteLine("</head>");
                    writer.WriteLine("<body>");
                    writer.WriteLine("<h1>Features of Our Cloud-Based Phone</h1>");
                    writer.WriteLine("<ul>");
                    writer.WriteLine("<li>Fully modular design</li>");
                    writer.WriteLine("<li>Runs multiple operating systems</li>");
                    writer.WriteLine("<li>Cloud-based storage and processing</li>");
                    writer.WriteLine("<li>Customizable user interface</li>");
                    writer.WriteLine("<li>Frequent software updates</li>");
                    writer.WriteLine("</ul>");
                    writer.WriteLine("</body>");
                    writer.WriteLine("</html>");
                }
            });

            routeBuilder.MapGet("specifications", async context =>
            {
