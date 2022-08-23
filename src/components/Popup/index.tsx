import React, { useEffect } from 'react';
import bem from 'utils/bem';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import closeIcon from 'img/close-icon.png';
import styles from './index.module.scss';

const b = bem('popup', styles);

type Props = {
  close: () => void,
  show: boolean,
};

function Popup({ close, show }: Props) {
  const weather = useSelector((state: RootState) => state.weather.weather);

  console.log(weather);

  const {
    hourly: {
      temperature_2m: temperatureList,
      dewpoint_2m: dewpoint,
      cloudcover,
      windspeed_10m: windspeed,
    },
    hourly_units: {
      temperature_2m: temperatureType,
    },
    name,
  } = weather;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, []);

  const stopEmersion = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={b('', { show })} onClick={close} role="button" tabIndex={0}>
      <div className={b('content')} onClick={stopEmersion} role="button" tabIndex={0}>
        <div className={b('title')}>{name}</div>
        <div className={b('item')}>{`Температура: ${temperatureList[temperatureList.length - 1]}${temperatureType}`}</div>
        <div className={b('item')}>{`Точка росы: ${dewpoint[dewpoint.length - 1]}`}</div>
        <div className={b('item')}>{`Облачность: ${cloudcover[cloudcover.length - 1]}`}</div>
        <div className={b('item')}>{`Скорость ветра: ${windspeed[windspeed.length - 1]}`}</div>
        <button className={b('close-btn')} onClick={close} type="button">
          <img src={closeIcon.src} alt="icon" />
        </button>
      </div>
    </div>
  );
}

export default Popup;
