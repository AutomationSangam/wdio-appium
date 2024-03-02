import Page from "./page";

class SwipePage extends Page{

    get swipeHorizontalText(){
        const text="Swipe horizontal"
        const iosSelector=`**/XCUIElementTypeStaticText[\`label == "${text}"\`]`
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByText(text)
    }

    get swipeVerticalText(){
        const text=`Or swipe vertical to find what I'm hiding.`
        return driver.isIOS?$(`~${text}`):this.findElementByText(text)
    }
    get fullyOpenSourceText(){
        const text='FULLY OPEN SOURCE'
        return driver.isIOS?$(`~${text}`):this.findElementByText(text)
    }
    get openSourceDescriptionText(){
        const iosSelector='**/XCUIElementTypeOther[`label ENDSWITH "found on GitHub" and name=="slideTextContainer"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):$$('//android.view.ViewGroup[@content-desc="slideTextContainer"]/android.widget.TextView')
    }

    get greatCommunity(){
        return driver.isIOS?$('~GREAT COMMUNITY'):this.findElementByText('GREAT COMMUNITY')
    }

    get communityDescriptionText(){
        const iosSelector='**/XCUIElementTypeStaticText[`label BEGINSWITH "WebdriverIO has a great community"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByTextContains('WebdriverIO has a great')
    }

    get jsFoundation(){
        return driver.isIOS?$('~JS.FOUNDATION'):this.findElementByText('JS.FOUNDATION')
    }
    get jsFoundationDescriptionText(){
        const iosSelector='**/XCUIElementTypeStaticText[`label BEGINSWITH "The JS Foundation"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByTextContains('The JS Foundation')
    }
    get supportVideos(){
        return driver.isIOS?$('~SUPPORT VIDEOS'):this.findElementByText('SUPPORT VIDEOS')
    }

    get supportVideosDescriptionText(){
        const iosSelector='**/XCUIElementTypeStaticText[`label BEGINSWITH "The community around WebdriverIO"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByTextContains('textContains("The community around WebdriverIO")')
    }
    get extendable(){
        return driver.isIOS?$('~EXTENDABLE'):this.findElementByText('EXTENDABLE')
    }
    get extendableDescriptionText(){
        const iosSelector='**/XCUIElementTypeStaticText[`label BEGINSWITH "Adding helper functions"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByTextContains('Adding helper functions')
    }
    get compatible(){
        return driver.isIOS?$('~COMPATIBLE'):this.findElementByText('COMPATIBLE')
    }
    get compatibleDescriptionText(){
        const iosSelector='**/XCUIElementTypeStaticText[`label BEGINSWITH "WebdriverIO works in combination"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByTextContains('WebdriverIO works in combination')
    }

    
//text("FULLY OPEN SOURCE").fromParent(new UiSelector(). descriptionContains("Carousel"))

}
export default new SwipePage()