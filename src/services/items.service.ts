import BaseService from "./base.service.ts";
import {IndustryItemsResponse} from "../shared/types/shared.types.ts";

type ItemServiceResponse = {
    data: IndustryItemsResponse
}

function get(): Promise<ItemServiceResponse> {
    return BaseService.get("data", {}, {"Accept-Encoding":"gzip, compress, br"});
}

const ItemsService = {
    get,
}

export default ItemsService;
