using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Post
    {

        // GUID over ID because is that it works if you create an ID on server side or client sides
        public Guid Id { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public int Rating { get; set; }

    }
}
