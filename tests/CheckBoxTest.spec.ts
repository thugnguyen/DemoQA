import { test, expect } from '@playwright/test';
import { CheckBoxPage } from '../pages/CheckBoxPage';
test ('Verify check box correctly', async({ page }) => {
    const home: string = 'Home';
    const desktop: string = 'Desktop';
    const documents: string = 'Documents';
    const downloads: string = 'Downloads';
    const text: string = 'You have selected : home desktop documents downloads notes commands workspace office wordFile excelFile react angular veu public private classified general';
    const checkBoxPage = new CheckBoxPage(page);
    await page.goto('checkbox');
    const homeLocator = await checkBoxPage.getLocatorByXpath(home, checkBoxPage.chkXpath);
    const desktopLocator = await checkBoxPage.getLocatorByXpath(desktop, checkBoxPage.chkXpath);
    const documentsLocator = await checkBoxPage.getLocatorByXpath(documents, checkBoxPage.chkXpath);
    const downloadsLocator = await checkBoxPage.getLocatorByXpath(downloads, checkBoxPage.chkXpath);
    expect (checkBoxPage.isHomeChecked(homeLocator)).toBeFalsy();
    await homeLocator.click();
    expect (checkBoxPage.isHomeChecked(homeLocator)).toBeTruthy();
    expect (checkBoxPage.isHomeChecked(desktopLocator)).toBeTruthy();
    expect (checkBoxPage.isHomeChecked(documentsLocator)).toBeTruthy();
    expect (checkBoxPage.isHomeChecked(downloadsLocator)).toBeTruthy();
    const actualText: string = await checkBoxPage.getTextResult(checkBoxPage.lbText);
    expect (actualText).toBe(text);
})