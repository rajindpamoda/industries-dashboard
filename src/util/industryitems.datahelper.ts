import {Company, Industry, IndustryItemsResponse, IndustryListItem} from "../shared/types/shared.types.ts";

export const IndustryItemsDataHelper = (data: IndustryItemsResponse): IndustryListItem[] => {
    const map = new Map<number, { industry: Industry; companies: Map<string, Company> }>();

    data.items.forEach((item) => {
        const company: Company = {
            id: item.uuid,
            name: item.name,
            tagline: item.tagline,
            images: item.images,
            total_jobs_available: item.total_jobs_available,
        };

        item.industries.forEach((industry: Industry) => {
            // Initialize industry if the industry is not defined
            if (!map.has(industry.id)) {
                map.set(industry.id, { industry, companies: new Map() });
            }

            // Handle data duplications
            const content = map.get(industry.id)!;
            if (!content.companies.has(company.id)) {
                content.companies.set(company.id, company)
            }
        });
    });

    // Sort companies alphabetically
    return Array.from(map.values()).map((item) => {
        return {
            industry: item.industry,
            companies: Array.from(item.companies.values()).sort((a, b) => a.name.localeCompare(b.name)),
        };
    });
};