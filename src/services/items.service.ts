import BaseService from "./base.service.ts";

function get(): Promise<any> {
    return BaseService.get("data");
}

const ItemsService = {
    get,
}

export default ItemsService;
