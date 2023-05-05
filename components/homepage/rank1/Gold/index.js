import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from '../lineClamp.module.css';
import dynamic from 'next/dynamic';
import { useNewsLatest } from '@services/news/useNews';
import Link from 'next/link';
import NameHeader from './NameHeader';
import ExchangeRate from '../Usd/ExchangeRate';
import Reference from './Reference';

const ChartGold = dynamic(() => import('./ChartGold'), {
	ssr: false,
});

function Rank1Gold({ rank1WithChartData }) {
	const {
		data: latestList,
		isLoading,
		isError,
		error,
		isFetching,
	} = useNewsLatest();
	return (
		<div>
			<NameHeader rank1WithChartData={rank1WithChartData} />
			<div className="h-[1px] border border-grey-border w-[calc(95%)] mx-auto my-[1rem]"></div>
			<div className="flex w-full flex-col-reverse sm:flex-row">
				<div className="w-[calc(100%)] sm:w-[calc(40%)] sm:mr-[20px]">
					<ExchangeRate />
				</div>
				<div className="w-[calc(100%)] sm:w-[calc(60%)] ">
					{rank1WithChartData && (
						<ChartGold stock={rank1WithChartData} />
					)}
				</div>
			</div>
			<Reference rank1WithChartData={rank1WithChartData} />
		</div>
	);
}

export default Rank1Gold;
