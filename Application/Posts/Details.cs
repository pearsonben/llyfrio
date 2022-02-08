using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Posts
{
    /// <summary>
    /// Returns details of an individual post with provided ID
    /// </summary>
    public class Details
    {

        /// <summary>
        /// Queries RETURN data
        /// </summary>
        public class Query : IRequest<Post>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Post>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Post> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Posts.FindAsync(request.Id);
            }
        }

    }
}
