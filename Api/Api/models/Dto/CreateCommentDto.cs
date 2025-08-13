namespace Api.models.Dto;

public class CreateCommentDto
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string subject { get; set; }
    public string Message { get; set; }
}
