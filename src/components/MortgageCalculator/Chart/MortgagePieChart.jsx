import React, { useRef, useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

export const MortgagePieChart = ({ data }) => {
    const chartRef = useRef(null);

    // Calculate total monthly payment
    const totalMonthlyPayment = data.reduce((acc, item) => acc + item.value, 0);

    // Prepare chart data
    const chartData = {
        labels: data.map((item) => item.name),
        datasets: [
            {
                data: data.map((item) => item.value),
                backgroundColor: ['#4CAF50', '#2196F3'], // Colors
                borderWidth: 1,
                hoverOffset: 10,
            },
        ],
    };

    // Chart options
    const chartOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const value = context.raw;
                        return `$${value.toLocaleString()}`;
                    },
                },
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: { size: 14 },
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 20,
        },
    };

    // Add central text to the chart
    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = chartRef.current;
            const ctx = chartInstance.ctx;
            ctx.font = 'bold 20px Arial';
            ctx.fillStyle = '#333';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const centerX = chartInstance.chartArea.width / 2 + chartInstance.chartArea.left;
            const centerY = chartInstance.chartArea.height / 2 + chartInstance.chartArea.top;

            ctx.fillText(`$${totalMonthlyPayment.toLocaleString()}`, centerX, centerY - 10);
            ctx.font = '14px Arial';
            ctx.fillText('Monthly Payment', centerX, centerY + 10);
        }
    }, [data]);

    return (
        <div style={{ width: '100%', height: 400, position: 'relative' }}>
            <Pie ref={chartRef} data={chartData} options={chartOptions} />
        </div>
    );
};
