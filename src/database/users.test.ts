import { describe, expect, it } from 'vitest';
import users from './users';

describe('Users', () => {
	it('Should be any users', () => {
		expect(users.length).toBeGreaterThan(0);
	});

	it('Should be any users have properties', () => {
		for (const group of users) {
			expect(group).toHaveProperty('id');
			expect(group).toHaveProperty('fullName');
			expect(group).toHaveProperty('username');
			expect(group).toHaveProperty('description');
			expect(group).toHaveProperty('image');
			expect(group).toHaveProperty('group');
			expect(group).toHaveProperty('position');
		}
	});
});
