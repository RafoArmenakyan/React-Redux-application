import axios from "axios";

import { GET_ALL_CATEGORY_URL } from "../constants/api";

export const getAllCategory = async () => {
    try {
        const res = await axios.get(GET_ALL_CATEGORY_URL);
        return res?.data;
    } catch{}
};
