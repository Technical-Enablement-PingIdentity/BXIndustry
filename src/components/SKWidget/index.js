import React from 'react';
import { useSingularKey } from '@Hooks';

//SK flow component for vertical admin page
export function SKWidget({ containerId = 'widgetbox', companyKey, policyKey, apiKey }) {

  const { startSKFlowPolicy } = useSingularKey({ containerId });

  React.useEffect(() => {
    startSKFlowPolicy(companyKey, policyKey, apiKey);
  }, [startSKFlowPolicy, companyKey, policyKey, apiKey])

  return (
    <div id={containerId} className="admin-sk-widget"></div>
  )
}