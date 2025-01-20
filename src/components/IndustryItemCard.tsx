import React, {useMemo, useState} from "react";
import {IndustryListItem} from "../shared/types/shared.types.ts";

type IndustryItemCardProps = {
    industryListItem: IndustryListItem;
    showInitialCompanies: number;
};

const styles = {
    companyLogo: {
        maxWidth: "24px",
    },
    arrow: {
        textAlign: "center" as const,
        cursor: "pointer",
    },
};

const IndustryItemCard = ({industryListItem, showInitialCompanies}: IndustryItemCardProps) => {
    const [companiesLength, setCompaniesLength] = useState(showInitialCompanies);

    const isExpanded = companiesLength > showInitialCompanies;

    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "./assets/img/logo-placeholder.jpg";
    };

    const toggleShowAllCompanies = () => {
        setCompaniesLength(
            industryListItem.companies.length === companiesLength
                ? showInitialCompanies
                : industryListItem.companies.length
        );
    };

    const companiesList = useMemo(() => {
        return industryListItem.companies
            .slice(0, companiesLength)
            .map((company) => {
                return (
                    <div key={company.id} className={`flex items-center w-full text-xs pb-1 ${isExpanded ? "pr-2" : ""}`}>
                        <div className="flex my-1 items-center w-1/2">
                            <img
                                src={company.images["32x32"]}
                                alt="logo"
                                className="mr-2"
                                style={styles.companyLogo}
                                onError={handleImgError}
                            />
                            <div className="font-medium">{company.name ?? "Undefined"}</div>
                        </div>
                        <div className="text-right w-1/2">
                            <div className="font-medium">{company.total_jobs_available ?? "Undefined"}</div>
                        </div>
                    </div>
                );
            });
    }, [industryListItem.companies, companiesLength]);

    return (
        <div
            className={`bg-white rounded m-4 p-4 transition-all duration-300 ease-out ${
                isExpanded ? "w-full max-w-3xl" : "w-full sm:max-w-full md:max-w-lg lg:max-w-sm"
            }`}
        >
            <div className="flex justify-between mb-3">
                <div className="font-medium text-base capitalize">
                    {industryListItem.industry.name ?? "Undefined"}
                </div>
                <div className="text-gray-500 font-medium">
                    {industryListItem.companies.length ?? "Undefined"}
                </div>
            </div>
            <div className="flex w-full text-xs pb-2 border-b border-gray-300 mb-4 text-gray-500">
                <div className="w-1/2 font-medium">Name</div>
                <div className="w-1/2 text-right font-medium">Total jobs available</div>
            </div>

            <div className={`grid gap-2 gap-x-40 ${isExpanded ? "grid-cols-2" : "grid-cols-1"} transition-all duration-300`}>
                {companiesList}
            </div>

            {showInitialCompanies < industryListItem.companies.length && (
                <div
                    style={styles.arrow}
                    className="mt-4 text-gray-500 font-light text-sm"
                    onClick={toggleShowAllCompanies}
                >
                    {isExpanded ? "collapse" : "expand"} card
                </div>
            )}
        </div>
    );
};

export default IndustryItemCard;