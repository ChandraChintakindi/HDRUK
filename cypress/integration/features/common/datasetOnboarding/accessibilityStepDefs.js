import { When } from "cypress-cucumber-preprocessor/steps";
import AccessibilityPage from "../../PageObjects/datsetOnboarding/AccessibilityPage";

const accessibilityPage = new AccessibilityPage();

When('I fill details in accessibility', () => {
    accessibilityPage.usage();
    accessibilityPage.acess();
    accessibilityPage.formatsAndStandards();
});

When('I verify error messages on accessibility', () => {
    accessibilityPage.accessNegative();
    accessibilityPage.formatsAndStandardsNegative();
});