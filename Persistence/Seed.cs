using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {

        public static async Task SeedData(DataContext context)
        {
            // if data already exists, dont do anything
            if (context.Posts.Any()) return;

            var posts = new List<Post>
            {
                new Post
                {
                    Description = "The Book of Mormon",
                    Date = DateTime.Now,
                    Rating = 1
                },
                new Post
                {
                    Description = "Lord of the Rings",
                    Date = DateTime.Now,
                    Rating = 9
                },
                new Post
                {
                    Description = "Harry Potter",
                    Date = DateTime.Now,
                    Rating = 6
                },
                new Post
                {
                    Description = "Hidden Hand",
                    Date = DateTime.Now,
                    Rating = 2
                },
                new Post
                {
                    Description = "Dark Matter",
                    Date = DateTime.Now,
                    Rating = 7
                },
            };


            await context.Posts.AddRangeAsync(posts);
            await context.SaveChangesAsync();

        }
    }
}
