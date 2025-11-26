using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace backend_devops.Controllers
{
    [Route("api/[Controller]/")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        private readonly IConfiguration _config;

        public HelloController(IConfiguration config)
        {
            _config = config;
        }

        [Route("greeting")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { message = "Greeting from backend. Great it's working!!!" });
        }

        [Route("dbcheck")]
        [HttpGet]
        public IActionResult TestDb()
        {
            var connString = _config.GetConnectionString("DefaultConnection");

            using var conn = new NpgsqlConnection(connString);
            conn.Open();

            using var cmd = new NpgsqlCommand("SELECT version();", conn);
            var version = cmd.ExecuteScalar()?.ToString();

            return Ok(new { dbVersion = version });
        }
    }
}
