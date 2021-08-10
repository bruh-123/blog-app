import { useLocalStorageState } from "../hooks/useLocalStorage";
import * as Auth from "../services/auth";

export const useAuth = () => {
	const [users, setUsers] = useLocalStorageState("users", []);
	return {
		signin: (email, password) => Auth.doSignin(users, email, password),
		signup: (user) => Auth.doSignup(users, setUsers, user),
	};
};
