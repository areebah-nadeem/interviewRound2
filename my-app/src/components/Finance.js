
// import React, { useState } from 'react';
// import './Finance.css';
// import { firestore } from '../Firebase'; 
import React, { useState } from 'react';
import './Finance.css';
//import ActionPlanTab from './ActionPlanTab';


const Finance = () => {
    
//   const [activeTab, setActiveTab] = useState('Planning');

//   // State variables for past data
//   const [pastRevenue, setPastRevenue] = useState('');
//   const [pastCost, setPastCost] = useState('');
//   const [pastInvestments, setPastInvestments] = useState('');

//   // State variables for AI projected data
//   const [aiPreRevenue, setAiPreRevenue] = useState('');
//   const [aiCost, setAiCost] = useState('');
//   const [aiInvestments, setAiInvestments] = useState('');

//   // State variables for tax increase and other events
//   const [taxIncrease, setTaxIncrease] = useState('');
//   const [eventHighRevenue, setEventHighRevenue] = useState('');
//   const [costIncreasing, setCostIncreasing] = useState('');

//   // Function to handle saving data to Firestore
//   const saveDataToFirestore = () => {
//     firestore.collection('financeData').add({
//       pastRevenue,
//       pastCost,
//       pastInvestments,
//       aiPreRevenue,
//       aiCost,
//       aiInvestments,
//       taxIncrease,
//       eventHighRevenue,
//       costIncreasing
//     })
//     .then(() => {
//       console.log('Data saved to Firestore');
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     });
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//  

  const [activeTab, setActiveTab] = useState('Planning');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="finance-container">
      <div className="sidebar">
        {/* Your navigation bar content */}
      </div>
      <div className="tab-bar-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'Planning' ? 'active' : ''}`}
              aria-current="page"
              href="#"
              onClick={() => handleTabChange('Planning')}
            >
              Planning
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'DataSelection' ? 'active' : ''}`}
              href="#"
              onClick={() => handleTabChange('DataSelection')}
            >
              Data Selection
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'GoalMetrics' ? 'active' : ''}`}
              href="#"
              onClick={() => handleTabChange('GoalMetrics')}
            >
              Goal Metrics
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'ActionPlan' ? 'active' : ''}`}
              href="#"
              onClick={() => handleTabChange('ActionPlan')}
            >
              Action Plan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" aria-disabled="true">
              Accounting (Coming Soon)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" aria-disabled="true">
              Tax &amp; Compliance (Coming Soon)
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        {activeTab === 'Planning' && <PlanningTab />}
        {activeTab === 'DataSelection' && <DataSelectionTab />}
        {activeTab === 'GoalMetrics' && <GoalMetricsTab />}
        {activeTab === 'ActionPlan' && <ActionPlanTab />}
      </div>

    </div>

    
  );

};


const PlanningTab = () => <div>Planning Tab</div>;
const DataSelectionTab = () => <div>Data Selection Tab</div>;
const GoalMetricsTab = () => <div>Goal Metrics Tab</div>;
const ActionPlanTab = () => <div>Action Plan Tab</div>;



export default Finance;