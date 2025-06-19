import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import Header from './components/Header/Header';
import SponsoredSection from './components/SponsoredSection/SponsoredSection';
import DataTable from './components/DataTable/DataTable';
import { generateMockData } from './utils/mockData';
import './styles/App.css';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      const mockData = generateMockData(100);
      setData(mockData);
      setFilteredData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 8,
        },
      }}
    >
      <div className="App">
        <Header onSearch={handleSearch} />
        <SponsoredSection />
        <DataTable data={filteredData} loading={loading} />
      </div>
    </ConfigProvider>
  );
}

export default App;