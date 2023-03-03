using Microsoft.AspNetCore.Mvc;

namespace WindowsAuth.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public string? Get()
        {
            return HttpContext.User.Identity?.Name;
        }
    }
}
