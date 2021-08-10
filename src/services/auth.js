import { sleep } from "../utils/sleep";

export const doSignin = async (users, email, password) => {
	const isAuthenticated = users.find((user) => {
		return user.email === email && user.password === password;
	});

	await sleep(1000);
	if (!isAuthenticated) {
		return Promise.reject("Email y/o contraseña incorrectos");
	}
	//si llega hasta acá signifíca que la promesa se resolvió bien
};

export const doSignup = async (users, setUsers, user) => {
	const fieldsRequired = ["email", "password"];
	const errors = [];

	Object.entries(user).forEach((element) => {
		const [key, value] = element;
		const isFieldRequired = fieldsRequired.includes(key);

		if (!value && isFieldRequired) {
			const error = `${key} is required`;
			errors.push(error);
		}
	});

	if (errors.length > 0) {
		await sleep(1000);
		return Promise.reject(errors);
	} else {
		await sleep();
		setUsers([...users, user]);
	}
};
