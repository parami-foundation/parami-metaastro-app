import React, { useEffect, useState } from 'react';
import styles from '@/style/common.less';
import style from './style.less';
import Background from './components/Background';
import GetChart from './components/GetChart';
import { useModel } from 'umi';
import BreedFrom from './components/BreedFrom';
import Intro from './components/Intro';
import Better from './components/Better';
import Feature from './components/Feature';
import BreedPrice from './components/BreedPrice';
import SNS from './components/SNS';

const Astro: React.FC = () => {
    const { metaMaskAccount } = useModel('metaMask');
    const { walletConnectAccount } = useModel('walletconnect');
    const [GEN, setGEN] = useState<number>(1);

    const {
        MintContract
    } = useModel('astroContracts');

    const getSalesTime = async () => {
        const timeRange = await MintContract?.getSalesTimes();
        const now = await Math.floor(Date.now() / 1000);
        if (now >= timeRange[0].toNumber() && now <= timeRange[1].toNumber()) {
            setGEN(1);
        } else {
            setGEN(2);
        }
    }

    useEffect(() => {
        if (MintContract && metaMaskAccount && metaMaskAccount !== '') {
            getSalesTime();
        }
        if (MintContract && walletConnectAccount && walletConnectAccount !== '') {
            getSalesTime();
        }
    }, [MintContract, metaMaskAccount, walletConnectAccount]);

    const sloganTopArr = 'LINK YOUR SOUL'.split('');
    const sloganBottomArr = 'INTO METAVERSE'.split('');
    const sloganCopyArr = 'WITH ASTROLOGY POWER'.split('');

    return (
        <>
            <div className={styles.mainContainer}>
                <Background />
                <div className={style.centerContainer}>
                    <div className={style.firstContainer}>
                        {(metaMaskAccount || walletConnectAccount) ? (
                            <>
                                {GEN === 1 && (
                                    <GetChart />
                                )}
                                {GEN === 2 && (
                                    <BreedFrom />
                                )}
                                <BreedPrice />
                            </>
                        ) : (
                            <div className={style.slogan}>
                                <p className={style.sloganTop}>
                                    {sloganTopArr.map((char, index) => (
                                        <span
                                            // className={style.isAnimation}
                                            key={char}
                                            style={{
                                                animationDelay: `${Math.random() * (index + 1)}s`,
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </p>
                                <p className={style.sloganBottom}>
                                    {sloganBottomArr.map((char, index) => (
                                        <span
                                            // className={style.isAnimation}
                                            key={char}
                                            style={{
                                                animationDelay: `${Math.random() * (index + 1)}s`,
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </p>
                                <p className={style.copy}>
                                    {sloganCopyArr.map((char, index) => (
                                        <span
                                            // className={style.isAnimation}
                                            key={char}
                                            style={{
                                                animationDelay: `${Math.random() * (index + 1)}s`,
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        )}
                        <SNS />
                    </div>
                    <Intro />
                    <Feature />
                    <Better />
                </div>
            </div>
        </>
    )
}

export default Astro;
