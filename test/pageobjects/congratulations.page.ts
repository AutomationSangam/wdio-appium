import Page from "./page";

class CongratulationsPage extends Page{


    get congratulationText(){
        const iosSelector='**/XCUIElementTypeStaticText[`label == "Congratulations"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByText('Congratulations')
    }
    get madeItText(){
        const text='You made it, click retry if you want to try it again.'
        const iosSelector=`**/XCUIElementTypeStaticText[\`label == "${text}"\`]`
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByText(text)
    }
    get retryButton(){
        return driver.isIOS?$('~button-Retry'):$('~button-Retry')
    }


}
export default new CongratulationsPage()