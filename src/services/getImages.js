import axios from "axios"

import { GET_SPECIFIC_CATEGORY_BASE_URL } from "../constants/api";

export const getImages = async (page, id, limit = 10) => {
    try {
        const res = await axios.get(`${GET_SPECIFIC_CATEGORY_BASE_URL}?limit=${limit}&page=${page}&category_ids=${id}`)
        return res?.data
    } catch{}
};
