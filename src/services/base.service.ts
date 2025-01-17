import axios from "axios";
import {AppConfig} from "../config/app.config.ts";

const API_PATH = `${AppConfig.API.BASE_URL}${AppConfig.API.VERSION}`;

/**
 * Constructs the full API path by appending the provided path to the base API path.
 */
function getAPIPath(path: string): string {
    return `${API_PATH}/${path}`;
}

/**
 * Sends a GET request to the specified URL with the provided query parameters and headers.
 */
function get(url: string, params: Record<string, string | number> = {}, headers: Record<string, string | number> = {}): Promise<any> {
    return axios.get(getAPIPath(url), {params, headers});
}

const BaseService = {
    getAPIPath,
    get,
}

export default BaseService;
