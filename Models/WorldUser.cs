using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;

namespace TheWorld.Models
{
    public class WorldUser : IdentityUser
    {
        public DateTime FirstTrip { get; set; }
    }
}