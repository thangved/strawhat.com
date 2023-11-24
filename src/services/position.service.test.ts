import { describe, expect, it } from 'vitest';
import positionService from './position.service';

describe('Position Service', () => {
	it('Should be get all positions', () => {
		const positions = positionService.getAll();
		expect(positions.length).toBeGreaterThan(0);
	});

	it('Should be get position by id', () => {
		const position = positionService.getById(1);

		expect(position.id).equal(1);
	});

	it('Throw error when position not found', () => {
		expect(() => positionService.getById(999)).toThrowError('Position with id 999 not found');
	});
});
