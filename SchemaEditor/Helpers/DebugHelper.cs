using System;
using System.Web.Mvc;

namespace SchemaEditor.Helpers
{
    /// <summary>
    /// Helper class
    /// Contains extensions for Html class
    /// Extensions help to determine debug constant from razor templates
    /// </summary>
    public static class DebugHelper
    {
        /// <summary>
        /// Extends HtmlHelper class
        /// </summary>
        /// <param name="helper"></param>
        /// <returns>true if this is release build (DEBUG constant isn't set in configuration)</returns>
        public static bool IsReleaseBuild(this HtmlHelper helper)
        {
#if DEBUG
            return false;
#else
            return true;
#endif
        }

        /// <summary>
        /// Extends HtmlHelper class
        /// </summary>
        /// <param name="helper"></param>
        /// <returns>true if this is debug version (DEBUG constant is set in configuration)</returns>
        public static bool IsDebugBuild(this HtmlHelper helper)
        {
#if DEBUG
            return true;
#else
            return false;
#endif
        }
    }
}