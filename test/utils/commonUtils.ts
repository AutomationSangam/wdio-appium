class CommonUtils {
  async getCorrectCoordinate(element: WebdriverIO.Element) {
    const getX = await element.getLocation("x");
    const getY = await element.getLocation("y");
    const width = await element.getSize("width");
    const height = await element.getSize("height");
    const x = width / 2 + getX;
    const y = height / 2 + getY;
    const map = { getX: x, getY: y };
    return map;
  }
  async dragAndDrop(
    sourceElement: WebdriverIO.Element,
    destinationElement: WebdriverIO.Element
  ) {
    const map = await this.getCorrectCoordinate(destinationElement);
    const endX = map.getX;
    const endY = map.getY;
    await driver.execute("mobile: dragGesture", {
      elementId: await sourceElement.elementId,
      endX: endX,
      endY: endY,
    });
  }

  async dragAndDropUsingTouchAction(
    sourceElement: WebdriverIO.Element,
    destinationElement: WebdriverIO.Element
  ) {
    await driver.touchAction([
      {
        action: "press",
        element: await sourceElement,
      },
      {
        action: "moveTo",
        element: await destinationElement,
      },
      {
        action: "wait",
        ms: 1000,
      },
      "release",
    ]);
  }
  async swipeGesture(element: WebdriverIO.Element, direction: string = "left") {
    const elementId = await element.elementId;
    await driver.execute("mobile: swipeGesture", {
      elementId: elementId,
      direction: direction,
      percent: 1.0,
    });
  }
}
export default new CommonUtils();
