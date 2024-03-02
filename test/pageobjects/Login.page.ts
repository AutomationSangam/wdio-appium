import Page from "./page";

class LoginPage extends Page{

    get loginSignupFormText(){
        const text="Login / Sign up Form"
        const iosSelector=`**/XCUIElementTypeStaticText[\`label == "${text}"\`]`
        return driver.isIOS?this.findElementByClassChain(iosSelector):$(`//android.widget.TextView[@text="${text}"]`)
    }
    get loginTab(){
        const text="Login"
        const iosSelector=`**/XCUIElementTypeStaticText[\`label == "${text}"\`]`
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByText(text)
    }

    get emailField(){
        return driver.isIOS?$('~input-email'):$('~input-email')
    }
    get emailLogo(){
        const iosSelector='**/XCUIElementTypeOther[$type=="XCUIElementTypeOther" and label == "Email"$]/XCUIElementTypeOther/XCUIElementTypeStaticText[-1]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):$('//android.widget.EditText[@content-desc="input-email"]/preceding-sibling::android.widget.TextView')
    }

    get passwordField(){
        return driver.isIOS?$('~input-password'):$('~input-password')
    }

    get passwordIcon(){
        const iosSelector='**/XCUIElementTypeOther[$type=="XCUIElementTypeOther" and label == "Password"$]/XCUIElementTypeOther/XCUIElementTypeStaticText[-1]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):$('//android.widget.EditText[@content-desc="input-password"]/preceding-sibling::android.widget.TextView')
    }

    get touchIdText(){
        const iosSelector='**/XCUIElementTypeStaticText[`label BEGINSWITH "When the device"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByTextContains('When the device')
    }

    get loginBtn(){
        return driver.isIOS?$('~button-LOGIN'):$('~button-LOGIN')
    }
    get successMsg(){
        const iosSelector='**/XCUIElementTypeStaticText[`label == "Success"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByResourceId('android:id/alertTitle')
    }
    get loggedInMsg(){
        const text="You are logged in!"
        const iosSelector=`**/XCUIElementTypeStaticText[\`label == "${text}"\`]`
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByText(text)
    }
    get okBtn(){
        return driver.isIOS?$('~OK'):this.findElementByText('OK')
    }

}
export default new LoginPage()