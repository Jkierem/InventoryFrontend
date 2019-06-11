import { JustOf } from "../../utils";

const BASE = `http://localhost:4500`;
const USER_BASE = `${BASE}/user`;
export const createUserPath = JustOf(USER_BASE)
export const loginUserPath = JustOf(`${USER_BASE}/login`);
export const getUserPath = (id) => `${USER_BASE}/${id}`;
export const getCollectionPath = JustOf(USER_BASE)
