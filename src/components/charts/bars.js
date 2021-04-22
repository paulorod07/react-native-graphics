import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../styles/colors';
import { Chart } from '../HighChart';

export const VerticalBarChart = () => {
  return (
    <Chart
      styles={{ height: 200, width: '100%', flex: 1 }}
      options={{
        chart: {
          type: 'column',
          backgroundColor: colors.dark,
          spacing: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
        },

        yAxis: {
          visible: false,
          minPadding: 0,
          maxPadding: 0,
        },

        tooltip: {
          backgroundColor: colors.dark,
          borderRadius: 10,
          borderWidth: 1,
        },

        credits: {
          enabled: false,
        },

        title: {
          text: '',
        },

        series: [
          {
            showInLegend: false,
            color: colors.success,
            borderWidth: 0,
            name: 'Call',
            data: [40, 30, 60, 20, 40, 50],
          },

          {
            showInLegend: false,
            color: colors.danger,
            borderWidth: 0,
            name: 'Put',
            data: [19, 20, 40, 10, 18, 52],
          },
        ],
      }}
    />
  );
};
