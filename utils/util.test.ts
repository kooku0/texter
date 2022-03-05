import { RefObject } from 'react';

import { checkRefNull, isDefined, isNotNull } from '.';

describe('isNotNull', () => {
  context('param이 null이면', () => {
    it('flase가 반환되어야 한다.', () => {
      const value = isNotNull(null);

      expect(value).toBeFalsy();
    });
  });

  context('param이 null이 아니면', () => {
    it('true가 반환되어야 한다.', () => {
      const value = isNotNull({});

      expect(value).toBeTruthy();
    });
  });
});

describe('isDefined', () => {
  context('param이 undefined면', () => {
    it('flase가 반환되어야 한다.', () => {
      const value = isDefined(undefined);

      expect(value).toBeFalsy();
    });
  });

  context('param이 undefined가 아니면', () => {
    it('true가 반환되어야 한다.', () => {
      const value = isDefined({});

      expect(value).toBeTruthy();
    });
  });
});

describe('checkRefNull', () => {
  context('ref.current가 null이면', () => {
    it('callback이 호출되지 않아야 한다.',() => {
      const callback = jest.fn();
      const ref = { current: null };

      checkRefNull(ref as RefObject<any>)(callback);

      expect(callback).not.toBeCalled();
    });
  });

  context('ref.current가 null이 아니면', () => {
    it('callback이 호출되어야 한다.',() => {
      const element = jest.fn();
      const callback = jest.fn();
      const ref = { current: element };

      checkRefNull(ref as RefObject<any>)(callback);

      expect(callback).toBeCalledWith(element);
    });
  });
});
