import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
};

const RechartCard = ({ ratingsData }) => { 

    if (!Array.isArray(ratingsData) || ratingsData.length === 0) {
        return <div className="p-8 text-center text-gray-500">No rating data available.</div>;
    }

    const chartData = [...ratingsData].reverse();
    const maxCount = Math.max(...chartData.map(d => d.count));

    return (
        <div className=" ">
            <div className=" bg-white shadow-xl rounded-xl">
               <div className="p-6 bg-white rounded-b-lg mt-6">
                <h2 className="text-xl font-semibold mb-6">Ratings</h2>
                <div className="h-64"> 
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                            data={chartData} 
                            layout="vertical" 
                            margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
                        >
                            <YAxis 
                                dataKey="name" 
                                type="category" 
                                stroke="#333" 
                                tickLine={false} 
                                axisLine={false}
                                tick={{ fontSize: 12, fill: '#333' }}
                            />
                            
                            <XAxis 
                                type="number" 
                                stroke="#333" 
                                domain={[0, maxCount * 1.2]} 
                                tickFormatter={formatNumber} 
                                tick={{ fontSize: 12, fill: '#333' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            
                            <Tooltip 
                                formatter={(value) => [`${formatNumber(value)} reviews`, 'Count']}
                            />
                            
                            <Bar 
                                dataKey="count" 
                                fill="#ff8800" 
                                barSize={16} 
                                radius={[0, 4, 4, 0]} 
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            </div>
        </div>
    );
};

export default RechartCard;