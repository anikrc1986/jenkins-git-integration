const {test,expect} = require("@playwright/test")

test('Test Practice 4', async({page})=>{
    await page.goto("https://www.demoblaze.com");
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill("anikrc");
    await page.locator('#loginpassword').fill("anik@1234");
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(await page.getByRole('link', { name: 'Welcome anikrc' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
    await page.close();
    console.log("End of the execution of Test Pracice 4")
})

test('Test Practice 5', async({page})=>{
    await page.goto("https://www.demoblaze.com");
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill("anikrc");
    await page.locator('#loginpassword').fill("anik@1234");
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(await page.getByRole('link', { name: 'Welcome anikrc' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
    await page.close();
    console.log("End of the execution of Test Pracice 5")
})

test('Test Practice 6', async({page})=>{
    await page.goto("https://www.demoblaze.com");
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill("anikrc");
    await page.locator('#loginpassword').fill("anik@1234");
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(await page.getByRole('link', { name: 'Welcome anikrc' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
    await page.close();
    console.log("End of the execution of Test Pracice 6")
})