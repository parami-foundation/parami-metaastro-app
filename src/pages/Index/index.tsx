/**
 * @ Author: Hikaru
 * @ Create Time: 2022-07-08 05:21:42
 * @ Modified by: Hikaru
 * @ Modified time: 2022-07-31 17:51:50
 * @ Description: i@rua.moe
 */

import Background from '@/components/Background';
import BigModal from '@/components/ParamiModal/BigModal';
import PrimeAbi from '@/config/abi/Prime.json';
import { contractAddresses } from '@/config/contract';
import { infuraProvider } from '@/config/web3provider';
import BasicLayout from '@/layout/BasicLayout';
import styles from '@/style/common.less';
import { todayYYYYMMDD } from '@/utils/common';
import { RightOutlined } from '@ant-design/icons';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { useIntl, useModel } from 'umi';
import Friend from './Friend';
import Intro from './Intro';
import Landing from './Landing';
import Partner from './Partner';
import Potential from './Potential';
import PreDayCountDown from './PreCountdown';
import Profit from './Profit';
import Stage from './Stage';
import StoryModal from './StoryModal';
import style from './style.less';
import User from './User';

const Index: React.FC = () => {
  const { ChainId, Account } = useModel('web3');
  const { initialState, setInitialState } = useModel('@@initialState');
  const [avavible, setAvavible] = useState<boolean>(false);
  const [popBottomBar, setPopBottomBar] = useState<boolean>(false);
  const [storyModal, setStoryModal] = useState<boolean>(false);
  const [PageScroll, setPageScroll] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [onSale, setOnSale] = useState<boolean>(false);
  const [leftDays, setLeftDays] = useState<number>();

  const intl = useIntl();

  const startDate: any = '2022-07-25';
  const preDate: any = '2022-08-01';

  const handleScroll = async () => {
    const pageScroll = document.documentElement.scrollTop;

    setPageScroll(pageScroll);
    if (pageScroll > 300) {
      setPopBottomBar(true);
    } else {
      setPopBottomBar(false);
    }
  };

  const getSalesTime = async () => {
    const provider = new ethers.providers.JsonRpcProvider(infuraProvider[1]);
    const MintContract = await new ethers.Contract(contractAddresses.prime[1], PrimeAbi, provider);

    const timeRange = await MintContract?.getSalesTimes();

    const date = new Date();
    const now = date.getTime() / 1000;
    const currentDay =
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) / 1000;

    setStartTime((timeRange[0].toNumber() + currentDay) * 1000);
    setEndTime((timeRange[1].toNumber() + currentDay) * 1000);

    if (
      now <= timeRange[0].toNumber() + currentDay ||
      now >= timeRange[1].toNumber() + currentDay
    ) {
      setOnSale(false);
    } else {
      setOnSale(true);
    }
  };

  const preDayCountDown = async () => {
    let leftDateSpan: number = 0;
    const preDateUnix = Date.parse(preDate);
    const startDateUnix = Date.parse(startDate);
    if (preDateUnix > startDateUnix) {
      const todayDateUnix = Date.parse(todayYYYYMMDD());
      if (todayDateUnix < preDateUnix) {
        leftDateSpan = todayDateUnix - preDateUnix;
        leftDateSpan = Math.abs(leftDateSpan);
        const iLeftDays = Math.floor(leftDateSpan / (24 * 3600 * 1000));
        setLeftDays(iLeftDays);
        setInitialState({
          ...initialState,
          leftDays: iLeftDays,
        });
      } else {
        setLeftDays(0);
        setInitialState({
          ...initialState,
          leftDays: 0,
        });
      }
    }
  };

  useEffect(() => {
    if (ChainId === 1) {
      setAvavible(true);
    } else {
      setAvavible(false);
    }
  }, [ChainId, Account, avavible]);

  useEffect(() => {
    preDayCountDown();
    getSalesTime();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BasicLayout>
      <div className={styles.mainContainer}>
        <Background leftDays={leftDays} complex={true} />
        {!!leftDays && leftDays !== 0 && (
          <PreDayCountDown preDate={preDate} setStoryModal={setStoryModal} />
        )}
        {(!leftDays || leftDays === 0) && (
          <Landing
            PageScroll={PageScroll}
            onSale={onSale}
            startTime={startTime}
            endTime={endTime}
            setStoryModal={setStoryModal}
          />
        )}
        <div className={styles.pageContainer}>
          <Intro />
          <Profit />
          <Potential />
          <User />
          <Friend />
          <Stage />
          <Partner />
          {(!leftDays || leftDays === 0) && (
            <div
              className={style.gotoMintContainer}
              style={{
                right: popBottomBar ? '2rem' : '-30rem',
              }}
              onClick={() => {
                window.location.href = '/mint';
              }}
            >
              <img
                src={'/images/background/astronomy.svg'}
                className={style.astronomyIcon}
                alt="MetaAstro"
              />
              <div className={style.title}>
                <p className={style.titleTop}>
                  {intl.formatMessage({
                    id: 'gotoMint.title1',
                    defaultMessage: 'Genesis god',
                  })}
                </p>
                <p className={style.titleBottom}>
                  {intl.formatMessage({
                    id: 'gotoMint.title2',
                    defaultMessage: 'Auction now',
                  })}
                  <RightOutlined className={style.rightIcon} />
                </p>
              </div>
            </div>
          )}
        </div>

        <BigModal
          visable={storyModal}
          title={undefined}
          bodyStyle={{
            backgroundColor: '#000',
            border: '2px solid #fff',
          }}
          content={<StoryModal />}
          width={1000}
          footer={false}
          close={() => {
            setStoryModal(false);
          }}
        />
      </div>
    </BasicLayout>
  );
};

export default Index;
