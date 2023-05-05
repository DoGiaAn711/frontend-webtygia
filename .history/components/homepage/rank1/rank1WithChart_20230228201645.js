import React, { useEffect, useState } from 'react';
// import ExchangeRate from './Usd/ExchangeRate';
import ExchangeRate from './Coin/ExchangeRate';
import NameHeader from './Coin/NameHeader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './lineClamp.module.css';
import dynamic from 'next/dynamic';
import { useNewsLatest } from '@services/news/useNews';
import Link from 'next/link';
import Reference from './Usd/Reference';
import Rank1Coin from './Coin';
const ChartUsd = dynamic(() => import('./Usd/ChartUsd'), {
	ssr: false,
});
const ChartCoin = dynamic(() => import('./Coin/ChartCoin'), {
	ssr: false,
});

function Rank1WithChart({ data }) {
	return <Rank1Coin data={data} />;
}

export default Rank1WithChart;
