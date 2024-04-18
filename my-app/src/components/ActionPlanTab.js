
import React, { useState, useEffect } from 'react';
import './ActionPlanTab.css';
import firebase from 'firebase/app';
import 'firebase/database';

const ActionPlanTab = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [pastPerformanceData, setPastPerformanceData] = useState([]);

  useEffect(() => {
    const database = firebase.database();
    const pastPerformanceRef = database.ref('pastPerformance');

    pastPerformanceRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const formattedData = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      setPastPerformanceData(formattedData);
    });

    return () => {
      pastPerformanceRef.off();
    };
  }, []);

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  return (
    <div className="action-plan-tab">
      <div className="tab-header">
        <h2>Action Plan</h2>
        <div className="date-range">
          <label htmlFor="fromDate">From:</label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={handleFromDateChange}
          />
          <label htmlFor="toDate">To:</label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={handleToDateChange}
          />
          <div className="company-dropdown">
            <label htmlFor="company">Company:</label>
            <select id="company" disabled>
              <option value="">Select Company</option>
            </select>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className="table-section">
          <h3>Past Performance</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Revenue</th>
                <th>Costs</th>
                <th>Investment</th>
              </tr>
            </thead>
            <tbody>
              {pastPerformanceData.map((item, index) => (
                <tr key={item.id}>
                  <td>Item {index + 1}</td>
                  <td>{item.revenue}</td>
                  <td>{item.costs}</td>
                  <td>{item.investment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-section">
          <h3>Future Projections</h3>
      
        </div>
      </div>
    </div>
  );
};

export default ActionPlanTab;