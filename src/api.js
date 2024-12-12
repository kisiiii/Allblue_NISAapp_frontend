import axios from 'axios';
import { BASE_URL } from './config';

export const fetchBalance = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/balance/${userId}`);
    return response.data.sum_appraised_value; // sum_appraised_valueプロパティにアクセス
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};

export const fetchIncome = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/income/${userId}`);
    return response.data.income; // incomeプロパティにアクセス
  } catch (error) {
    console.error('Error fetching income:', error);
    throw error;
  }
};

export const fetchPersonalRanking = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/personal-ranking/${userId}`);
    console.log('API Response:', response.data); // ここでデータを確認
    return response.data; // myRankingとparameterプロパティにアクセス
  } catch (error) {
    console.error('Error fetching personal ranking:', error);
    throw error;
  }
};

export const fetchRankingData = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/ranking-data/${userId}`);
      const data = response.data;
  
      // データのフォーマットを調整
      const formattedData = data.map(item => ({
        rank: item.rank,
        fundName: item.fundName,
        price: item.price.toLocaleString(), // 価格をカンマ区切りにフォーマット
        priceChange: item.priceChange >= 0 ? `+${item.priceChange}` : item.priceChange.toString() // 価格変動に符号を追加
      }));
  
      return formattedData;
    } catch (error) {
      console.error('Error fetching ranking data:', error.response ? error.response.data : error.message);
      throw error;
    }
  };