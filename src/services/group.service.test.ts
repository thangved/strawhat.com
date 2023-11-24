import { describe, expect, it } from 'vitest';
import groupService from './group.service';

describe('Group Service', () => {
	it('Should be get all groups', () => {
		const groups = groupService.getAll();
		expect(groups.length).toBeGreaterThan(0);
	});

	it('Should be get group by id', () => {
		const group = groupService.getById(1);

		expect(group.id).equal(1);
	});

	it('Throw error when group not found', () => {
		expect(() => groupService.getById(999)).toThrowError('Group with id 999 not found');
	});
});
