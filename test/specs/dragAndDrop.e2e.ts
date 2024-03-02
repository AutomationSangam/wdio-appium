import HomePage from "../pageobjects/Home.page";
import congratulationsPage from "../pageobjects/congratulations.page";
import dragAndDropPage from "../pageobjects/dragAndDrop.page";
import commonUtils from "../utils/commonUtils";

describe("Drag and Drop", () => {
  it("Drag and Drop in wdio app", async function () {
    await HomePage.dragBtn.click();
    await dragAndDropPage.dragAndDropText.waitForDisplayed();
    let sourceElement = await dragAndDropPage.dragI2;
    let destinationElement = await dragAndDropPage.dropI2;
    await commonUtils.dragAndDrop(sourceElement, destinationElement);
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragR3;
    destinationElement = await dragAndDropPage.dropR3;
    await commonUtils.dragAndDrop(sourceElement, destinationElement);
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragR1;
    destinationElement = await dragAndDropPage.dropR1;
    await commonUtils.dragAndDrop(sourceElement, destinationElement);
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragC1;
    destinationElement = await dragAndDropPage.dropC1;
    await commonUtils.dragAndDrop(sourceElement, destinationElement);
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragC3;
    destinationElement = await dragAndDropPage.dropC3;
    await commonUtils.dragAndDrop(sourceElement, destinationElement);
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragR2;
    destinationElement = await dragAndDropPage.dropR2;
    await commonUtils.dragAndDrop(sourceElement, destinationElement);
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragC2;
    destinationElement = await dragAndDropPage.dropC2;
    await commonUtils.dragAndDrop(sourceElement, destinationElement);
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragI1;
    destinationElement = await dragAndDropPage.dropI1;
    await commonUtils.dragAndDrop(sourceElement, destinationElement);
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragI3;
    destinationElement = await dragAndDropPage.dropI3;
    await commonUtils.dragAndDrop(sourceElement, destinationElement);
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    await expect(congratulationsPage.congratulationText).toBeDisplayed();
    await expect(congratulationsPage.madeItText).toBeDisplayed();
    await expect(congratulationsPage.retryButton).toBeDisplayed();
  });

  it("Drag & Drop using touchAction", async function () {
    await HomePage.dragBtn.click();
    await dragAndDropPage.dragAndDropText.waitForDisplayed()
    let sourceElement = await dragAndDropPage.dragI2;
    let destinationElement = await dragAndDropPage.dropI2;
    await commonUtils.dragAndDropUsingTouchAction(
      sourceElement,
      destinationElement
    );
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragR3;
    destinationElement = await dragAndDropPage.dropR3;
    await commonUtils.dragAndDropUsingTouchAction(
      sourceElement,
      destinationElement
    );
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragR1;
    destinationElement = await dragAndDropPage.dropR1;
    await commonUtils.dragAndDropUsingTouchAction(
      sourceElement,
      destinationElement
    );
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragC1;
    destinationElement = await dragAndDropPage.dropC1;
    await commonUtils.dragAndDropUsingTouchAction(
      sourceElement,
      destinationElement
    );
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragC3;
    destinationElement = await dragAndDropPage.dropC3;
    await commonUtils.dragAndDropUsingTouchAction(
      sourceElement,
      destinationElement
    );
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragR2;
    destinationElement = await dragAndDropPage.dropR2;
    await commonUtils.dragAndDropUsingTouchAction(
      sourceElement,
      destinationElement
    );
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragC2;
    destinationElement = await dragAndDropPage.dropC2;
    await commonUtils.dragAndDropUsingTouchAction(
      sourceElement,
      destinationElement
    );
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragI1;
    destinationElement = await dragAndDropPage.dropI1;
    await commonUtils.dragAndDropUsingTouchAction(
      sourceElement,
      destinationElement
    );
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    sourceElement = await dragAndDropPage.dragI3;
    destinationElement = await dragAndDropPage.dropI3;
    await commonUtils.dragAndDropUsingTouchAction(
      sourceElement,
      destinationElement
    );
    await expect(sourceElement).not.toExist();
    await expect(destinationElement).not.toExist();

    await expect(congratulationsPage.congratulationText).toBeDisplayed();
    await expect(congratulationsPage.madeItText).toBeDisplayed();
    await expect(congratulationsPage.retryButton).toBeDisplayed();
  });
});
