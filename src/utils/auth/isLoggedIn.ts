import { authKey } from "@/constants/constant";

export const isLoggedIn = (): boolean => {
    if (!authKey || typeof window === 'undefined') {
        return false;
    }
    const token = localStorage.getItem(authKey);
    return !!token;
}
