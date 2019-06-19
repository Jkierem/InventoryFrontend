import { JustOf } from "../../utils";

const BASE = "http://localhost:4500/plate"

export const createPlatePath = JustOf(BASE)
export const getCollectionPath = JustOf(BASE);
export const updatePlatePath = (id) => `${BASE}/${id}`
export const deletePlatePath = (id) => `${BASE}/${id}`