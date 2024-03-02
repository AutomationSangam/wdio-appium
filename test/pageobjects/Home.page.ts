import Page from "./page"

class HomePage extends Page {


        get homeBtn(){
            return $('~Home')
        }
        get webViewBtn(){
            return $('~Webview')
        }
        get loginBtn(){
            return $('~Login')
        }
        get formsBtn(){
            return $('~Forms')
        }
        get swipeBtn(){
            return $('~Swipe')
        }
        get dragBtn(){
            return $('~Drag')
        }
        get wdioRobotLogo(){
            const iosSelector='**/XCUIElementTypeOther[`label == "WEBDRIVER Demo app for the appium-boilerplate"`]/XCUIElementTypeOther/XCUIElementTypeImage'
            return driver.isIOS?this.findElementByClassChain(iosSelector):$('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView')
        }
        get webdriverText(){
            const iosSelector='**/XCUIElementTypeStaticText[`label == "WEBDRIVER"`]'
            return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByText("WEBDRIVER")
        }
        get ioLogo(){
            const iosSelector='**/XCUIElementTypeOther[`label == "WEBDRIVER"`]/XCUIElementTypeOther/XCUIElementTypeImage'
            return driver.isIOS?this.findElementByClassChain(iosSelector):$('//android.widget.TextView[@text="WEBDRIVER"]/following-sibling::android.widget.ImageView')
        }
        get demoText(){
            const text='Demo app for the appium-boilerplate'
            return driver.isIOS?$(`~${text}`):$(`//android.widget.TextView[@text="${text}"]`)
        }
        get supportText(){
            return driver.isIOS?$('~Support'):this.findElementByText('Support')
        }

}
export default new HomePage()