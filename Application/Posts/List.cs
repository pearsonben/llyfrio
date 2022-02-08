using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    /// <summary>
    /// provides a list of all posts
    /// </summary>
    public class List
    {

        public class Query : IRequest<List<Post>> { }

        public class Handler : IRequestHandler<Query, List<Post>>
        {
            private readonly DataContext _datacontext;
            

            public Handler(DataContext datacontext)
            {
               _datacontext = datacontext;
                
            }

            public async Task<List<Post>> Handle(Query request, CancellationToken cancellationToken)
            {


                return await _datacontext.Posts.ToListAsync();
            }
        }
    }
}
