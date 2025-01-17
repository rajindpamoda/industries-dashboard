import ItemsService from "../../services/items.service.ts";
import {useEffect, useMemo, useState} from "react";
import {IndustryItemsResponse, IndustryListItem} from "../../shared/types/shared.types.ts";
import {IndustryItemsDataHelper} from "../../util/industryitems.datahelper.ts";
import IndustryItemCard from "../../components/IndustryItemCard.tsx";
import Spinner from "../../shared/components/Spinner.tsx";

const Main = () => {
    const [industryItems, setIndustryItems] = useState<IndustryListItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchIndustryItems = async () => {
            const response = await ItemsService.get();
            const items = IndustryItemsDataHelper(response.data as IndustryItemsResponse);
            setIndustryItems(items);
            setIsLoading(false);
        };

        fetchIndustryItems();
    }, []);

    const cards = useMemo(() => {
        return industryItems.map((item, index) => (
                <IndustryItemCard key={index} industryListItem={item} maxCompanies={6} />
            )
        );
    }, [industryItems]);

    return (
        <div className="bg-gray-200 h-full w-screen">
            <div className="py-8 px-6">
                <h1 className="font-bold text-2xl">Industries overview</h1>
            </div>
            <div className="flex flex-wrap justify-center ">
                {isLoading ? <Spinner/> : cards}
            </div>
        </div>
    );
}

export default Main;
