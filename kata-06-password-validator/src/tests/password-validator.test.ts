import {isStrongPassword} from "../core/password-validator";

describe('Password Validator', () => {
   it('considers a password to be strong when all requirements are met', () => {
       expect(isStrongPassword('StRonG_92bC')).toBe(true);
   });

   it('fails when the password is too short', () => {
       expect(isStrongPassword('abc')).toBe(false);
   });

   it('fails when the password is missing a number', () => {
      expect(isStrongPassword('ABCdef_')).toBe(false);
   });

   it('fails when the password is missing a lowercase', () => {
      expect(isStrongPassword('ABCDEF_1')).toBe(false);
   });

   it('fails when the password is missing an uppercase', () => {
      expect(isStrongPassword('abcdef_1')).toBe(false);
   });

   it('fails when the password is missing an underscore', () => {
      expect(isStrongPassword('Abcdef1')).toBe(false);
   });
});