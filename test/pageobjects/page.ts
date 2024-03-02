/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  findElementByClassChain(selector: string) {
    return $(`-ios class chain:${selector}`);
  }

  findElementByText(text: string) {
    return $(`android=text("${text}")`);
  }
  findElementByTextContains(partialText: string) {
    return $(`android=textContains("${partialText}")`);
  }
  findElementByResourceId(resourceId: string) {
    return $(`android=resourceId("${resourceId}")`);
  }

  
}
