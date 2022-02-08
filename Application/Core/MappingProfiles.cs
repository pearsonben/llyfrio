using AutoMapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {

        public MappingProfiles()
        {

            // were setting up the mapper for using PUT http request, updates a post from a post
            CreateMap<Post, Post>();
        }
    }
}
