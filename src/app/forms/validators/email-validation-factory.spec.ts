import { EmailValidationFactory } from './email-validation-factory';

describe('EmailValidationFactory', () => {
  it('should create an instance', () => {
    expect(new EmailValidationFactory()).toBeTruthy();
  });
});
