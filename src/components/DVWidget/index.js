import React from 'react';
import { useDaVinci } from '@Hooks';

//DV flow component for vertical dashboard page
export function DVWidget({ containerId = 'widgetbox', companyKey, policyKey, apiKey }) {

  const { startDVFlowPolicy } = useDaVinci({ containerId });

  React.useEffect(() => {
    startDVFlowPolicy(companyKey, policyKey, apiKey);
  }, [startDVFlowPolicy, companyKey, policyKey, apiKey])

  return (
    <div id={containerId} className="dashboard-dv-widget"></div>
  )
}