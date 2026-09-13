import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
test ('Submit successfully', async({ page }) => {
    const textBoxPage: TextBoxPage= new TextBoxPage(page);
    const fullName:string = 'Thu';
    const email:string ='thu@example.com';
    const currentAddress:string = '123 Main St';
    const permanentAddress:string = '456 Elm St';
    await textBoxPage.goto();
    await textBoxPage.inputData(fullName, email, currentAddress, permanentAddress);
    const actualFullName:string = await textBoxPage.getActuralResult(textBoxPage.nameLocator);
    expect(actualFullName).toBe(fullName);
    const actualEmail:string = await textBoxPage.getActuralResult(textBoxPage.emailResultLocator);
    expect(actualEmail).toBe(email);
    const actualCurrentAddress:string = await textBoxPage.getActuralResult(textBoxPage.currentAddressResultLocator);
    expect(actualCurrentAddress).toBe(currentAddress);
    const actualPermanentAddress:string = await textBoxPage.getActuralResult(textBoxPage.permanentAddressResultLocator);
    expect(actualPermanentAddress).toBe(permanentAddress);
  });
test ('Email format is wrong (without "@")', async({ page }) => {
    const textBoxPage: TextBoxPage= new TextBoxPage(page);
    const fullName:string = 'Thu';
    const email:string ='thuexample.com';
    const currentAddress:string = '123 Main St';
    const permanentAddress:string = '456 Elm St';
    await textBoxPage.goto();
    await textBoxPage.inputData(fullName, email, currentAddress, permanentAddress);
    await expect(textBoxPage.emailLocator).toHaveClass(/field-error/);
    
});
test ('Email format is wrong (without domain name)', async({ page }) => {
    const textBoxPage: TextBoxPage= new TextBoxPage(page);
    const fullName:string = 'Thu';
    const email:string ='thu@';
    const currentAddress:string = '123 Main St';
    const permanentAddress:string = '456 Elm St';
    await textBoxPage.goto();
    await textBoxPage.inputData(fullName, email, currentAddress, permanentAddress);
    await expect(textBoxPage.emailLocator).toHaveClass(/field-error/);
});
