import {transformAndOrganizeIndustryData} from "../util/industryitems.datahelper.ts";
import {IndustryItemsResponse, IndustryListItem} from "../shared/types/shared.types.ts";

describe('IndustryItemsDataHelper', () => {
    it('should correctly transform data and sort companies alphabetically', () => {
        const mockData: IndustryItemsResponse = {
            items: [
                {
                    uuid: '1',
                    name: 'Company A',
                    tagline: 'Tagline A',
                    images: {
                        "32X32": ""
                    },
                    income_streams:[],
                    total_jobs_available: 10,
                    industries: [{ id: 1, name: 'Industry A' }]
                },
                {
                    uuid: '2',
                    name: 'Company B',
                    tagline: 'Tagline B',
                    images: {
                        "32X32": ""
                    },
                    income_streams:[],
                    total_jobs_available: 5,
                    industries: [{ id: 2, name: 'Industry B' }]
                },
                {
                    uuid: '3',
                    name: 'Company C',
                    tagline: 'Tagline C',
                    images: {
                        "32X32": ""
                    },
                    income_streams:[],
                    total_jobs_available: 8,
                    industries: [{ id: 1, name: 'Industry A' }, { id: 2, name: 'Industry B' }]
                }
            ],
            total: 3
        };

        const expectedTransformedData: IndustryListItem[] = [
            {
                industry: { id: 1, name: 'Industry A' },
                companies: [
                    { id: '1', name: 'Company A', tagline: 'Tagline A', images: {"32X32": ""}, total_jobs_available: 10 },
                    { id: '3', name: 'Company C', tagline: 'Tagline C', images: {"32X32": ""}, total_jobs_available: 8 }
                ]
            },
            {
                industry: { id: 2, name: 'Industry B' },
                companies: [
                    { id: '2', name: 'Company B', tagline: 'Tagline B', images: {"32X32": ""}, total_jobs_available: 5 },
                    { id: '3', name: 'Company C', tagline: 'Tagline C', images: {"32X32": ""}, total_jobs_available: 8 }
                ]
            }
        ];

        const transformedData = transformAndOrganizeIndustryData(mockData);
        expect(transformedData).toEqual(expectedTransformedData);
    });
});
