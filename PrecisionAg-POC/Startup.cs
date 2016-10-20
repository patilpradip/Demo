using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PrecisionAg_POC.Startup))]
namespace PrecisionAg_POC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Test Comments
            // Code Goes Here
            // Test Comment End
            ConfigureAuth(app);
        }
    }
}
