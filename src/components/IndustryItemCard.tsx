import { IndustryListItem } from '../shared/types/shared.types.ts';
import React, {useMemo} from "react";

type IndustryItemCardProps = {
    industryListItem: IndustryListItem;
    maxCompanies: number;
};

const styles = {
    companyLogo : {
        maxWidth: '24px'
    }
}

const IndustryItemCard = ({ industryListItem, maxCompanies }: IndustryItemCardProps) => {
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = './assets/img/logo-placeholder.jpg';
    };

    const companiesList = useMemo(() => {
        return industryListItem.companies.slice(0, maxCompanies).map((company) => {
            return (
                <div key={company.id} className="flex flex-wrap w-full text-xs pb-1 ">
                    <div className="text-left w-1/2 flex my-2 items-center">
                        <img
                            src={company.images['32x32']}
                            alt="logo"
                            className="max mr-1"
                            style={styles.companyLogo}
                            onError={handleImgError}
                        />
                        <div className="font-medium">{company.name}</div>
                    </div>
                    <div className="text-right w-1/2">
                        <div className="font-medium">{company.total_jobs_available}</div>
                    </div>
                </div>
            );
        })
    }, [industryListItem.companies, maxCompanies]);

    return (
        <div className="w-full bg-white rounded m-4 sm:max-w-full md:max-w-lg lg:max-w-sm">
            <div className="px-6 py-4">
            <div className="flex w-full mb-3">
                    <div className="text-left w-1/2">
                        <div className="font-medium text-base" style={{textTransform: 'capitalize'}}>
                            {industryListItem.industry.name}
                        </div>
                    </div>
                    <div className="text-right w-1/2">
                        <div
                            className="font-medium text-base text-gray-500">{industryListItem.companies.length}</div>
                    </div>
                </div>
                <div className="flex w-full text-xs pb-1 mb-1 text-gray-500 border-b border-gray-300">
                    <div className="text-left w-1/2">
                        <div className="font-medium">Name</div>
                    </div>
                    <div className="text-right w-1/2">
                        <div
                            className="font-medium">Total jobs available
                        </div>
                    </div>
                </div>
                {companiesList}
            </div>
        </div>
    );
};

export default IndustryItemCard;