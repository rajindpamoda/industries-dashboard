import { IndustryItemsResponse, IndustryListItem, Industry, Company } from "../shared/types/shared.types.ts";

export const IndustryItemsDataHelper = (data: IndustryItemsResponse): IndustryListItem[] => {
    const map = new Map<number, { industry: Industry; companies: Company[] }>();

    data.items.forEach((item) => {
        const company: Company = {
            name: item.name,
            tagline: item.tagline,
            images: item.images,
            total_jobs_available: item.total_jobs_available,
        };

        item.industries.forEach((industry) => {
            // Initialize industry if the industry is not defined
            if (!map.has(industry.id)) {
                map.set(industry.id, { industry, companies: [] });
            }

            map.get(industry.id)?.companies.push(company);
        });
    });

    return Array.from(map.values());
};