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
    public  class Create
    {
        /// <summary>
        /// Commands do NOT return any data
        /// </summary>
        public class Command : IRequest
        {
            public Post Post { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Posts.Add(request.Post);

                await _context.SaveChangesAsync();

                // this is equivalent to nothing
                // its just a way to let the APi controller know that the request has finished
                return Unit.Value;
            }
        }

    }
}
