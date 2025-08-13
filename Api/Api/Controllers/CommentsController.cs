using Api.data;
using Api.models;
using Api.models.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CommentsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CommentsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetComments()
    {
        var result = await _context.comments
            .OrderByDescending(c => c.Id)
            .ToListAsync();

        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> CreateComment([FromBody] CreateCommentDto model)
    {
        var comment = new Comments
        {
            FirstName = model.FirstName,
            LastName = model.LastName,
            Phone = model.Phone,
            subject = model.subject,
            Message = model.Message,
            Email = model.Email,
        };

        await _context.comments.AddAsync(comment);
        await _context.SaveChangesAsync();

        return Ok(comment);
    }
}
