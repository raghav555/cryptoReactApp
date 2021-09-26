import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
const { Title, Text } =  Typography;
const { Option } = Select;

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, settimePeriod] = useState('7d');
    //const { data, isFetching } = useGetCryptoDetailsQuery(coinId);

    //console.log(data);
    return (
        <div>
            CryptoDetails {coinId}
        </div>
    )
}

export default CryptoDetails;
