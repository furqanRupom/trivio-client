import { jwtDecode } from "jwt-decode";

import { authKey } from "@/constants/constant";
import { getLocalStorage } from "@/localStorage";

export const decodeToken = () => {
    if (!authKey || typeof window == 'undefined') {
        return "";
    };
    const token = getLocalStorage(authKey);
    return jwtDecode(token as string)
}