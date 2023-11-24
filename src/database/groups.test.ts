import { describe, expect, it } from 'vitest';
import groups from './groups';

describe('Groups', () => {
	it('Should be any groups', () => {
		expect(groups.length).toBeGreaterThan(0);
	});

	it('Should be any groups have properties', () => {
		for (const group of groups) {
			expect(group).toHaveProperty('id');
			expect(group).toHaveProperty('name');
		}
	});
});
