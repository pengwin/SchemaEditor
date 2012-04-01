using System.Web.Mvc;

namespace SchemaEditor.Areas.Editor
{
    public class EditorAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Editor";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Editor_default",
                "Editor/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );

            context.MapRoute(
               "Editor_home",
               "Editor/{action}/{id}",
               new { action = "Index",controller = "Home",  id = UrlParameter.Optional }
           );
        }
    }
}
