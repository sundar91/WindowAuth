using Microsoft.AspNetCore.Authentication.Negotiate;
using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);

ConfigurationManager configuration = builder.Configuration;

var origins = builder.Configuration.GetValue<string>("Origins");

// Add services to the container.

builder.Services.AddCors((options)=> {
    options.AddDefaultPolicy(policy => {
        if (origins != null)
        {
            policy.WithOrigins(origins)
                   .AllowAnyMethod()
                   .AllowAnyHeader()
                   .AllowCredentials();
        }
    });
 });


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme)
   .AddNegotiate();

builder.Services.AddAuthorization(options =>
{
    // By default, all incoming requests will be authorized according to the default policy.
    options.FallbackPolicy = options.DefaultPolicy;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
