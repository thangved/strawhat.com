import { describe, expect, it } from 'vitest';
import users from './users';

describe('Users', () => {
	it('Should be any users', () => {
		expect(users.length).toBeGreaterThan(0);
	});

	it('Should be any users have properties', () => {
		for (const user of users) {
			expect(user).toHaveProperty('id');
			expect(user).toHaveProperty('fullName');
			expect(user).toHaveProperty('username');
			expect(user).toHaveProperty('description');
			expect(user).toHaveProperty('image');

			expect(user.group).not.toBeUndefined();
			expect(user.position).not.toBeUndefined();
		}
	});
});
