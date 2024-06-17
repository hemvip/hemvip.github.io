import PageTemplateRenderer from "@/webmushra/business/PageTemplateRenderer"
import FinishPage from "@/webmushra/pages/FinishPage"
import GenericPage from "@/webmushra/pages/GenericPage"
import VideoPage from "@/webmushra/pages/VideoPage"

export function addPagesToPageManager(
  _pageManager,
  _pages,
  session,
  config,
  errorHandler,
  dataSender
) {
  for (var i = 0; i < _pages.length; ++i) {
    if (Array.isArray(_pages[i])) {
      if (_pages[i][0] === "random") {
        _pages[i].shift()
        shuffle(_pages[i])
      }
      addPagesToPageManager(_pageManager, _pages[i])
    } else {
      var pageConfig = _pages[i]
      if (pageConfig.type == "generic") {
        _pageManager.addPage(new GenericPage(_pageManager, pageConfig))
      } else if (pageConfig.type == "video") {
        var videoPage = new VideoPage(
          _pageManager,
          PageTemplateRenderer,
          session,
          config,
          pageConfig,
          errorHandler,
          config.language
        )
        _pageManager.addPage(videoPage)
      } else if (pageConfig.type == "finish") {
        var finishPage = new FinishPage(
          _pageManager,
          session,
          dataSender,
          pageConfig,
          config.language
        )
        _pageManager.addPage(finishPage)
      } else {
        errorHandler.sendError("Type not specified.")
      }
    }
  }
}
