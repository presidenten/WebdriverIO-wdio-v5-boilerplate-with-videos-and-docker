import config from '@/config/gui.js';
import selectors from '@/helpers/selectors.js';

describe('User interactions', () => {
  beforeEach(() => {
    browser.url(config.url);
  });
  
  it('should be able edit input', () => {
    $(selectors.basicExamples).click();
    $(selectors.getExampleButton('basic-first-form-demo')).click();
    
    $('body #get-input input').setValue('Presidenten');
    $('body #get-input button').click();
    
    let name = $('body #user-message #display').getText();
    
    expect(name).toBe('Presidenten');
  });


  it('should be able to move slider (fails by design to show video)', () => {
    $(selectors.advancedExamples).click();
    $(selectors.getExampleButton('drag-drop-range')).click();

    $('body #slider1 input').moveTo(10, 10);
    browser.positionClick();
    $('body #slider1 input').moveTo(100, 10);
    browser.positionClick();

    let range = $('body #slider1 #range').getText();
    expect(range).toBe(30);
  });


  it('should be able to multi-select in dropdown (fails by design to show video)', () => {
    $(selectors.basicExamples).click();
    $(selectors.getExampleButton('basic-select-dropdown')).click();

    const modifierKey = process.platform == 'darwin' ? 'Meta' : 'Control';
    browser.keys(modifierKey);
    $('body #multi-select option[value="Florida"]').click();
    $('body #multi-select option[value="Ohio"]').click();
    $('body #multi-select option[value="Texas"]').click();

    $('body #printAll').click();

    $('body #printAll').scrollIntoView();
    const values = $('.getall-selected').getText();

    expect(values.includes('Florida')).toBe(true);
    expect(values.includes('Ohio')).toBe(true);
    expect(values.includes('Texas')).toBe(true);
  });
});

