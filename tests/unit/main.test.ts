import "jest";
declare let window: any;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

import {DynaFastClick} from '../../src/index';

// help: https://facebook.github.io/jest/docs/expect.html

describe('Simple unit test', () => {
  it('should import the component', () => {
		expect(DynaFastClick).not.toBe(undefined);
	});
});
