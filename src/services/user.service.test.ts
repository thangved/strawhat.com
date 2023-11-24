import { describe, expect, it } from 'vitest';
import userService from './user.service';

describe('User Service', () => {
	it('Should be get all users', () => {
		const users = userService.getAll();
		expect(users.length).toBeGreaterThan(0);
	});

	it('Should be get user by id', () => {
		const user = userService.getById(1);

		expect(user.id).equal(1);
	});

	it('Throw error when user not found', () => {
		expect(() => userService.getById(999)).toThrowError('User with id 999 not found');
	});
});
