import { JustOf } from "../../utils";

const BASE = "http://localhost:4500/order"

export const getOrdersPath = JustOf(BASE);
export const createOrderPath = JustOf(BASE);