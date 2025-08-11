using Microsoft.AspNetCore.Identity;

namespace Api.models;

public class ApplicationUser : IdentityUser
{
    public string Name { get; set; }
}
