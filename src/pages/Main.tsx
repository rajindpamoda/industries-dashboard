import ItemsService from "../services/items.service.ts";
import {useEffect, useMemo, useState} from "react";
import {IndustryItemsResponse, IndustryListItem} from "../shared/types/shared.types.ts";
import {transformAndOrganizeIndustryData} from "../util/industryitems.datahelper.ts";
import IndustryItemCard from "../components/IndustryItemCard.tsx";
import Spinner from "../shared/components/Spinner.tsx";

const Main = () => {
    const [industryItems, setIndustryItems] = useState<IndustryListItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchIndustryItems = async () => {
            try {
                const response = await ItemsService.get();
                const items = transformAndOrganizeIndustryData(response.data as IndustryItemsResponse);
                setIndustryItems(items);
            } catch (e) {
                setError("Failed to load industry items. Please try again.");
                console.error(`Error! ${e}`)
            } finally {
                setIsLoading(false);
            }
        };

        fetchIndustryItems();
    }, []);

    const cards = useMemo(() => {
        return industryItems.map((item) => (
                <IndustryItemCard key={item.industry.id} industryListItem={item} showInitialCompanies={6} />
            )
        );
    }, [industryItems]);

    return (
        <div className="bg-gray-200 h-full w-screen p-3">
            <div className="py-8 px-6">
                <h1 className="font-bold text-2xl">Industries</h1>
            </div>
            <div className="flex flex-wrap justify-center ">
                {isLoading && <Spinner />}
                {error && (
                    <div className="bg-red-100 text-red-800 border border-red-300 rounded-md p-3 mb-4">
                        {error}
                    </div>
                )}
                {!isLoading && !error && cards}
            </div>
        </div>
    );
}

export default Main;
