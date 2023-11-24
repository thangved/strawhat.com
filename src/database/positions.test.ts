import { describe, expect, it } from 'vitest';
import positions from './positions';

describe('Potisions', () => {
	it('Should be any positions', () => {
		expect(positions.length).toBeGreaterThan(0);
	});

	it('Should be any positions have properties', () => {
		for (const group of positions) {
			expect(group).toHaveProperty('id');
			expect(group).toHaveProperty('name');
		}
	});
});
