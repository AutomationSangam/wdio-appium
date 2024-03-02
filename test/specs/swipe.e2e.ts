import swipeConstants from "../constants/swipe.constants";
import HomePage from "../pageobjects/Home.page";
import SwipePage from "../pageobjects/Swipe.page";
import commonUtils from "../utils/commonUtils";

describe("Swipe Functionality", async function () {
  it("Swipe for Android", async function () {
    await HomePage.swipeBtn.click();
    await SwipePage.swipeHorizontalText.waitForDisplayed();
    const fullyOpenSourceElement = await SwipePage.fullyOpenSourceText;
    await commonUtils.swipeGesture(fullyOpenSourceElement)
    await expect(SwipePage.greatCommunity).toBeDisplayed()
    await expect(SwipePage.communityDescriptionText).toHaveText(swipeConstants.communityDescriptionText)
    await browser.pause(1000)
    const greatCommunityElement=await SwipePage.greatCommunity
    await commonUtils.swipeGesture(greatCommunityElement)
    await expect(SwipePage.jsFoundation).toBeDisplayed()
    await expect(SwipePage.jsFoundationDescriptionText).toHaveText(swipeConstants.jsFoundationDescriptionText)

    await browser.pause(1000)
    const jsFoundationElement=await SwipePage.jsFoundation
    await commonUtils.swipeGesture(jsFoundationElement)
    await expect(SwipePage.supportVideos).toBeDisplayed()
    await expect(SwipePage.supportVideosDescriptionText).toHaveText(swipeConstants.supportVideosDescriptionText)

    await browser.pause(1000)
    const supportVideoElement=await SwipePage.supportVideos
    await commonUtils.swipeGesture(supportVideoElement)
    await expect(SwipePage.extendable).toBeDisplayed()
    await expect(SwipePage.extendableDescriptionText).toHaveText(swipeConstants.extendableDescriptionText)

    await browser.pause(1000)
    const extendableElement=await SwipePage.extendable
    await commonUtils.swipeGesture(extendableElement)
    await expect(SwipePage.compatible).toBeDisplayed()
    await expect(SwipePage.compatibleDescriptionText).toHaveText(swipeConstants.compatibleDescriptionText)

  });
});
