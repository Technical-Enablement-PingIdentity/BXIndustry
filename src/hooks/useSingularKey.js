import React from 'react';
import { getApiUrl } from '@Helpers';

const DEFAULT_STATE = {
  loading: false,
}

//Singular key hook which renders appropriate SK flow and displays it in widget box
export function useSingularKey({ containerId }) {

  //object with "loading" key for prospect loading logic
  const [state, changeState] = React.useState(DEFAULT_STATE);

  //fetch data logic
  const startSKFlowPolicy = React.useCallback(async (companyKey, policyKey, apiKey) => {
    if (!policyKey) {
      return false;
    }

    changeState({ loading: true });
    window.singularkey.cleanup(document.getElementById(containerId));
    const apiUrl = getApiUrl({ company_key: companyKey });

    const res = await fetch(apiUrl, {
      method: 'get',
      headers: {
        'X-SK-API-KEY': apiKey || process.env.REACT_APP_API_KEY,
      },
    });

    if (res.status !== 200) {
      //some error logic might be developed here
      return changeState({ loading: false });
    }

    const data = await res.json();

    const props = {
      config: {
        method: 'runFlow',
        apiRoot: `${process.env.REACT_APP_API_URL}/v1`,
        accessToken: data.access_token,
        companyId: companyKey || process.env.REACT_APP_COMPANY_KEY,
        policyId: policyKey
      },
      useModal: false,
    }

    const widgetContainer = document.getElementById(containerId);

    // Used to scope bootstrap to just widgets
    widgetContainer.classList.add('widget-container');

    window.singularkey.skRenderScreen(widgetContainer, props)
    changeState({ loading: false });

    return true;
  }, [containerId]);

  return {
    ...state,
    startSKFlowPolicy,
  }
}