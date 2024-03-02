import HomePage from "../pageobjects/Home.page";
import LoginPage from "../pageobjects/Login.page";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await HomePage.wdioRobotLogo.waitForDisplayed();
    await HomePage.loginBtn.click();
    await LoginPage.emailField.setValue("test@gmail.com");
    await LoginPage.passwordField.setValue("Test@123");
    await LoginPage.loginBtn.click();
    await expect(LoginPage.successMsg).toBeDisplayed();
    await expect(LoginPage.loggedInMsg).toBeDisplayed();
    await LoginPage.okBtn.click();
    await expect(LoginPage.successMsg).not.toBeDisplayed();
  });
});
