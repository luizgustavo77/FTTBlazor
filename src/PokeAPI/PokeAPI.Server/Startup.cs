namespace PokeAPI.Server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PokeAPI.Server", Version = "v1" });
            });

            services.AddDbContext<Data.DatabaseContext>(options =>
            {
                options.UseSqlite("Data Source = PokeAPI.db");
            });

            services.AddCors(Options =>
                            Options.AddPolicy("AllowOrigion",
                                    builder =>
                                    {
                                        builder.AllowAnyOrigin()
                                                .AllowAnyHeader()
                                                .AllowAnyMethod();
                                    }));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "FTTBlazor.Server v1"));
            }



            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("AllowOrigion");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
