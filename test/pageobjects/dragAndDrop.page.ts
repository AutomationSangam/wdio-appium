import Page from "./page";

class DragAndDropPage extends Page{

    get dragAndDropText(){
        const iosSelector='**/XCUIElementTypeStaticText[`label == "Drag and Drop"`]'
        return driver.isIOS?this.findElementByClassChain(iosSelector):this.findElementByText('Drag and Drop')
    }

    get renewButton(){
        return driver.isIOS?$('~renew'):$('~renew')
    }
    get dropI1(){
        return driver.isIOS?$('~drop-l1'):$('~drop-l1')
    }
    get dropI2(){
        return driver.isIOS?$('~drop-l2'):$('~drop-l2')
    }
    get dropI3(){
        return driver.isIOS?$('~drop-l3'):$('~drop-l3')
    }

    get dropC1(){
        return driver.isIOS?$('~drop-c1'):$('~drop-c1')
    }
    get dropC2(){
        return driver.isIOS?$('~drop-c2'):$('~drop-c2')
    }
    get dropC3(){
        return driver.isIOS?$('~drop-c3'):$('~drop-c3')
    }
    get dropR1(){
        return driver.isIOS?$('~drop-r1'):$('~drop-r1')
    }
    get dropR2(){
        return driver.isIOS?$('~drop-r2'):$('~drop-r2')
    }
    get dropR3(){
        return driver.isIOS?$('~drop-r3'):$('~drop-r3')
    }
    get dragI1(){
        return driver.isIOS?$('~drag-l1'):$('~drag-l1')
    }
    get dragI2(){
        return driver.isIOS?$('~drag-l2'):$('~drag-l2')
    }
    get dragI3(){
        return driver.isIOS?$('~drag-l3'):$('~drag-l3')
    }
    get dragR1(){
        return driver.isIOS?$('~drag-r1'):$('~drag-r1')
    }
    get dragR2(){
        return driver.isIOS?$('~drag-r2'):$('~drag-r2')
    }
    get dragR3(){
        return driver.isIOS?$('~drag-r3'):$('~drag-r3')
    }
    get dragC1(){
        return driver.isIOS?$('~drag-c1'):$('~drag-c1')
    }
    get dragC2(){
        return driver.isIOS?$('~drag-c2'):$('~drag-c2')
    }
    get dragC3(){
        return driver.isIOS?$('~drag-c3'):$('~drag-c3')
    }
    

}
export default new DragAndDropPage()