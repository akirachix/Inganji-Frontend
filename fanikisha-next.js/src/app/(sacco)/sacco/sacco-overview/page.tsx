'use client'
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { format, parse } from 'date-fns';
import Layout from '../components/Layout';
import { useFamers } from '@/app/hooks/useFarmer';
import { useLoanEligibility } from '@/app/hooks/useLoanEligibility';
import { useCooperative } from '@/app/hooks/useCooperative';
interface CreditScore {
  credit_score_id: number;
  farmer_id: number;
  score: number;
  credit_worthiness: string;
  loan_range: string;
  last_checked_date: string;
  is_eligible: boolean;
}
interface Cooperative {
  cooperative_id: number;
  cooperative_name: string;
  user: number;
}
const Overview: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [stats, setStats] = useState<Array<{ label: string; value: number }>>([]);
  const [pieData, setPieData] = useState<Array<{ name: string; value: number; color: string }>>([]);
  const [barData, setBarData] = useState<Array<{ name: string; value: number }>>([]);
  const [showNoDataPopup, setShowNoDataPopup] = useState(false); // New state for no data popup
  const { data: cooperativesData, loading: saccoLoading, error: saccoError } = useCooperative();
  const { data: loanEligibilityData, loading: loanLoading, error: loanError } = useLoanEligibility();
  const { data: farmersData, loading: farmersLoading, error: farmersError } = useFamers();
  useEffect(() => {
    if (cooperativesData && loanEligibilityData && farmersData) {
      const selectedMonth = format(date, 'yyyy-MM');
      const creditScoresData = (loanEligibilityData as CreditScore[]).filter((score) =>
        format(new Date(score.last_checked_date), 'yyyy-MM') === selectedMonth
      );
      const cooperatives = cooperativesData as Cooperative[];
      setStats([
        { label: 'Eligible to take a loan', value: creditScoresData.filter(score => score.is_eligible).length },
        { label: 'Total loan eligibilities checked', value: creditScoresData.length },
        { label: 'Not Eligible for loan', value: creditScoresData.filter(score => !score.is_eligible).length },
        { label: 'Total cooperatives', value: cooperatives.length },
      ]);
      if (creditScoresData.length === 0) {
        setShowNoDataPopup(true); 
      } else {
        setShowNoDataPopup(false);
      }
      const totalChecked = creditScoresData.length;
      const eligibleCount = creditScoresData.filter((score: CreditScore) => score.is_eligible).length;
      const ineligibleCount = totalChecked - eligibleCount;
      setPieData([
        { name: 'Eligible for Loans', value: eligibleCount, color: '#1E40AF' },
        { name: 'Not eligible for Loans', value: ineligibleCount, color: '#60A5FA' },
      ]);
      const eligibleFarmersForMonth = creditScoresData.filter(score => score.is_eligible).length;
      setBarData([{ name: format(date, 'MMM yyyy'), value: eligibleFarmersForMonth }]);
    }
  }, [cooperativesData, loanEligibilityData, farmersData, date]);
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(parse(event.target.value, 'yyyy-MM', new Date()));
  };
  if (saccoLoading || loanLoading || farmersLoading) {
    return <div className="text-center text-lg">Loading...</div>;
  }
  if (saccoError || loanError || farmersError) {
    return <div className="text-red-500 text-center">Error: {saccoError || loanError || farmersError}</div>;
  }
  return (
    <Layout>
      <div className="bg-white 2xl:px-8 lg:px-4">
          {showNoDataPopup && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-md shadow-md text-center">
              <p className="text-lg text-gray-800">No data available for the selected month.</p>
              <button
                onClick={() => setShowNoDataPopup(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="flex justify-between items-center 2xl:mb-6">
          <h1 className="2xl:text-4xl 2xl:mt-4 font-bold lg:text-2xl lg:mt-[-20px]">Overview</h1>
          <div className="rounded-md border-t border-blue-500 shadow-[0_2px_4px_0px_rgba(64,123,255)] 2xl:px-4 2xl:py-2 inline-block lg:mt-[-9px] lg:px-1 lg:py-1 lg:mr-3 xl:mr-4">
            <input
              type="month"
              id="date"
              name="date"
              value={format(date, 'yyyy-MM')}
              onChange={handleDateChange}
              className="border-none outline-none text-gray-700"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:gap-6 2xl:mt-12 lg:gap-[-10px] lg:mt-[15px] xl:mt-[30px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-[34px] flex flex-col justify-center items-center 2xl:w-[346px] lg:w-[150px] lg:h-[140px] xl:w-[220px] xl:h-[160px] lg:ml-[6px] lg:mt-2 2xl:h-[220px] border-t border-blue-500 shadow-[0_2px_6px_0px_rgba(64,123,255)]"
            >
              <div className="2xl:text-6xl lg:text-3xl text-right font-bold text-blue-600 2xl:mb-2">{stat.value}</div>
              <div className="text-xl text-gray-600 text-center px-4">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 2xl:gap-6 2xl:mt-24 lg:mt-14 lg:gap-[-1px] lg:ml-4">
          <div>
            <h2 className="2xl:text-2xl 2xl:mb-6 lg:text-[15px] xl:text-[20px] lg:mb-7">Loan Eligibility Checked</h2>
            <div className="bg-white rounded-[34px] 2xl:p-8  lg:px-6 lg:py-4 xl:px-20 xl:py-4 lg:h-[260px] lg:w-[320px] xl:h-[330px] xl:w-[450px] 2xl:w-[720px] 2xl:h-[400px] border-t border-blue-500 shadow-[0_2px_4px_0px_rgba(64,123,255)]">
              <div className="2xl:w-full 2xl:h-[300px] lg:w-[180px] lg:h-[180px] xl:w-[230px] xl:h-[230px] xl:w-ful">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, value }) => {
                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                        return (
                          <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                            {`${value} (${(percent * 100).toFixed(0)}%)`}
                          </text>
                        );
                      }}
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center mt-4">
                {pieData.map((entry, index) => (
                  <div key={index} className="flex items-center mx-2">
                    <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: entry.color }}></div>
                    <span className="text-sm">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="2xl:text-2xl 2xl:mb-6 lg:text-[15px] xl:text-[20px] lg:mb-7">Eligible Farmers for Selected Month</h2>
            <div className="bg-white rounded-[34px] 2xl:p-8 lg:px-6 lg:py-4 xl:px-20 xl:py-4 lg:h-[260px] lg:w-[320px] xl:h-[330px] xl:w-[450px] 2xl:w-[720px] 2xl:h-[400px] border-t border-blue-500 shadow-[0_2px_4px_0px_rgba(64,123,255)]">
              <div className="w-full h-[300px] 2xl:h-[300px] lg:h-[200px] xl:h-[280px]  2xl:w-full lg:w-[250px] xl:w-[320px] ">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                   <XAxis dataKey="name" label={{ value: 'Month', position: 'insideBottom', offset: -3 }} />
                    <YAxis
                      domain={[0, 'dataMax + 1']}
                      label={{ value: 'Number of Farmers eligible', angle: -90}}
                      tickFormatter={(value) => Math.round(value).toString()}
                    />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884D8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Overview;




