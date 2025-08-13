namespace Api.models.Dto;

public class PaginatedCoursesResult
{
    public List<Course> Items { get; set; }
    public int TotalCount { get; set; }
}
