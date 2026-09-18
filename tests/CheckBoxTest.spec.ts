import { test, expect } from '@playwright/test';
import { CheckBoxPage } from '../pages/CheckBoxPage';
test ('Verify check box correctly', async({ page }) => {
    const checkBoxPage = new CheckBoxPage(page);
    await page.goto('checkbox');
    expect (checkBoxPage.isHomeChecked(checkBoxPage.homeCheckBoxLoc)).toBeFalsy();
})