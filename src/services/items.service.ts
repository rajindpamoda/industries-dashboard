import BaseService from "./base.service.ts";
import {IndustryItemsResponse} from "../shared/types/shared.types.ts";

function get(): Promise<{ data: IndustryItemsResponse }> {
    return BaseService.get("data", {}, {"Accept-Encoding":"gzip, compress, br"});
}

const ItemsService = {
    get,
}

export default ItemsService;
