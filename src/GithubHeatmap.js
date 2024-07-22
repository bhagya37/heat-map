import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import 'react-tooltip/dist/react-tooltip.css';
import './App.css';
import { subDays, format } from 'date-fns';

const GithubHeatmap = ({ data = [] }) => {
  const today = new Date();

  return (
    <div>
      <h1 id='head'>GitHub-like Calendar Heatmap</h1>
      <CalendarHeatmap
        startDate={subDays(today, 365)}
        endDate={today}
        values={data}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          if (value.hours === 0) {
            return 'color-empty';
          } else if (value.hours <= 6) {
            return 'color-scale-1';
          } else if (value.hours <= 12) {
            return 'color-scale-2';
          } else if (value.hours <= 18) {
            return 'color-scale-3';
          } else {
            return 'color-scale-4';
          }
        }}
        tooltipDataAttrs={value => {
          return {
            'data-tooltip-id': 'heatmap-tooltip',
            'data-tooltip-content': value.date
              ? `${format(new Date(value.date), 'MMM d')}: ${value.hours} hours worked`
              : 'No data',
          };
        }}
        showWeekdayLabels
      />
      <Tooltip id="heatmap-tooltip" />
    </div>
  );
};

export default GithubHeatmap;