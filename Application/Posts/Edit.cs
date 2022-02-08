using AutoMapper;
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
    public class Edit
    {

        public class Command : IRequest
        {
            public Post Post { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                // fetches the activity that matches the ID of the put request
                var post = await _context.Posts.FindAsync(request.Post.Id);

                // an instance like this is why you use automapper
                // instead of writing this:
                //post.Description = request.Post.Description ?? post.Description;
                // youd have to do this for every property which is ridiculous,
                // this is where automapper comes in


                // AutoMapper implementation. this basically assigns the properties from
                // the put method into the DB in one line
                _mapper.Map(request.Post, post);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}
