import React, {useMemo} from 'react';
import populationData from '../../data/populationData';
import {LineChart} from '@mui/x-charts/LineChart';
import locationIcon from '../../assets/location.svg';

const PopulationPage = () => {
  const years = useMemo(() => populationData.map((item) => item.year), []);
  const menData = useMemo(() => populationData.map((item) => item.men), []);
  const womenData = useMemo(() => populationData.map((item) => item.women), []);

  return (
    <>
      <span className="text-4xl text-black">Population</span>
      <div className="flex flex-col relative w-[542px] h-[447px] mt-8 text-themeBlue flex-shrink-0 border-[1px] border-[rgba(0, 0, 0, 0.20)] bg-white p-8 rounded-lg">
        <div className="flex items-center mt-[5px]">
          <img src={locationIcon} alt="location" className="w-6 h-6" />
          <span className="text-xl font-bold leading-none text-themeBlue">Birth in Taiwan</span>
        </div>
        <span className="text-[14px] text-black opacity-60 absolute right-8 top-8">source: Ministry of the Interior</span>
        <LineChart
          slotProps={{
            legend: {
              direction: "row",
              position: {vertical: "bottom", horizontal: "middle"},
              padding: -10,
              itemMarkWidth: 60,
              itemMarkHeight: 10,
              itemGap: 20,
              markGap: 8,
              labelStyle: {fontSize: 14, color: "#000000", fontFamily: "Arial"},
            },
          }}
          grid={{horizontal: true}}
          xAxis={[
            {
              min: 2014.5,
              max: 2022.5,
              data: years,
              disableLine: true,
              disableTicks: true,
              tickLabelStyle: {fontSize: 14, color: "#000000", fontFamily: "Arial", marginTop: 5},
              valueFormatter: (value) => value.toString(),
            },
          ]}
          yAxis={[
            {
              min: 50000,
              max: 110000,
              disableLine: true,
              disableTicks: true,
              tickLabelStyle: {fontSize: 14, color: "#000000", fontFamily: "Arial", marginRight: 5},
              valueFormatter: (value) => value / 1000 + 'k',
              tickNumber: 8,
            },
          ]}
          series={[
            {
              data: menData,
              curve: "linear",
              label: 'Male',
              color: '#80B4FF',
            },
            {
              data: womenData,
              curve: "linear",
              label: 'Female',
              color: '#E86997',
            },
          ]}
          width={500}
          height={380}
        />
      </div>
    </>
  );
};

export default PopulationPage;