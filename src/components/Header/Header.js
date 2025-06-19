import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Header.css';

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    // Real-time search
    onSearch(value);
  };

  return (
    <header className="header">
      <div className="search">
        <Input.Group compact>
          <Input
            placeholder="Search data..."
            value={searchValue}
            onChange={handleInputChange}
            onPressEnter={handleSearch}
            suffix={<SearchOutlined />}
          />
          <Button 
            type="primary" 
            icon={<SearchOutlined />}
            onClick={handleSearch}
          />
        </Input.Group>
      </div>
    </header>
  );
};

export default Header;