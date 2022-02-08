using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {

        private IMediator _mediator;

        // this assigns mediator to _mediator if its not null. otherwise, check for the mediator service from the DI container
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>(); 

    }
}
