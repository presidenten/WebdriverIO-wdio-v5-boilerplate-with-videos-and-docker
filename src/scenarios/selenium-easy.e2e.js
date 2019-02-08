import config from '@/config/gui.js';
import selectors from '@/helpers/selectors.js';

describe('User interactions', () => {
  beforeEach(() => {
    browser.url(config.url);
  });
  
  it ('should be able edit input (should pass)', () => {
    $(selectors.basicExamples).click();
    $(selectors.getExampleButton('basic-first-form-demo')).click();
    
    $('#get-input input').setValue('Presidenten');
    $('#get-input button').click();
    
    let name = $('#user-message #display').getText();
    
    expect(name).toBe('Presidenten');
  });


  it('should be able to move slider (fails by design to gen video)', () => {
    $(selectors.advancedExamples).click();
    $(selectors.getExampleButton('drag-drop-range')).click();

    $('#slider1 input').click();

    let range = $('#slider1 #range').getText();
    expect(range).toBe(30);
  });


  it('should be able to multi-select in dropdown (fails by design to gen video)', () => {
    $(selectors.basicExamples).click();
    $(selectors.getExampleButton('basic-select-dropdown')).click();

    const modifierKey = process.platform == 'darwin' ? 'Meta' : 'Control';
    browser.keys(modifierKey);
    $('#multi-select option[value="Florida"]').click();
    $('#multi-select option[value="Ohio"]').click();
    $('#multi-select option[value="Texas"]').click();

    $('#printAll').click();

    browser.execute(() => document.querySelector('.getall-selected').scrollIntoView());

    const values = $('.getall-selected').getText();

    expect(values.includes('Florida')).toBe(true);
    expect(values.includes('Ohio')).toBe(true);
    expect(values.includes('Texas')).toBe(true);
  });
});

