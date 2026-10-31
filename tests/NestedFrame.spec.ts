import { test, expect } from '@playwright/test';
import { NestedFramePage } from "../pages/NestedFramePage";
import { TestBase } from "../common/TestBase";
test ('Nested Frame Test', async ({ page }) => {
    const nestedFramePage = new NestedFramePage(page);
    await page.goto('nestedframes');
    const testBase = new TestBase(page);
    const expectedChildFrameText = 'Child Iframe';
    const actualChildFrameText = await testBase.getNestedIframeText(page, ['#frame1','xpath=//*[@srcdoc='+'<p>Child Iframe</p>']);
    expect (actualChildFrameText).toBe(expectedChildFrameText);

})