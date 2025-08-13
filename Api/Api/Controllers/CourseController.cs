using Api.data;
using Api.models.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CourseController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CourseController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<PaginatedCoursesResult>> GetCourses([FromQuery] CourseQueryParams query)
    {
        var queryable = _context.courses.AsQueryable();

        if (!string.IsNullOrWhiteSpace(query.Search))
        {
            var searchLower = query.Search.ToLower();
            queryable = queryable.Where(x => x.Name.ToLower().Contains(searchLower));
        }

        int totalItem = await queryable.CountAsync();

        var items = await queryable
            .Skip((query.PageNumber - 1) * query.PageSize)
            .Take(query.PageSize)
            .ToListAsync();

        var result = new PaginatedCoursesResult
        {
            Items = items,
            TotalCount = totalItem
        };

        return Ok(result);
    }


    [HttpGet("{id}")]
    public async Task<IActionResult> GetCourses(int id)
    {
        var course = await _context.courses.FirstOrDefaultAsync(x => x.Id == id);

        if (course == null)
            return NotFound("Not Found");

        return Ok(course);
    }
}
