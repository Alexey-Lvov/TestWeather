import type { NextPage } from 'next';
import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import bem from 'utils/bem';
import cities from 'cities.json';
import { getWeatherStart } from 'redux/weather/reducer';
import Popup from 'components/Popup';
import styles from './index.module.scss';

const b = bem('home-page', styles);

const citiesList : any[] = cities as any;

const HomePage: NextPage = memo(() => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [isShowPopup, setShowPopup] = useState(false);

  const onSubmit = () => {
    const selectedCity = citiesList.find(({ name }: {
      name: string }) => name.toLowerCase() === inputValue.toLowerCase());
    dispatch(getWeatherStart(selectedCity));
    setShowPopup(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const closePopup = () => {
    setShowPopup(false);
    setInputValue('');
  };

  return (
    <div className={b('')}>
      <input
        className={b('input')}
        value={inputValue}
        onChange={handleChange}
        placeholder="City"
      />
      <button
        className={b('btn')}
        onClick={onSubmit}
        type="button"
      >
        Info temperature
      </button>
      <Popup show={isShowPopup} close={closePopup} />
    </div>
  );
});

export default HomePage;
