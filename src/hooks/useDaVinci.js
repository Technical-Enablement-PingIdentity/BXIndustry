import React from 'react';
import { getApiUrl } from '@Helpers';

const DEFAULT_STATE = {
  loading: false,
}

const UNIQUE_CONTAINER_IDS = [];

//Singular key hook which renders appropriate DV flow and displays it in widget box
export function useDaVinci({ containerId, dialog }) {

  if (!UNIQUE_CONTAINER_IDS.includes(containerId)) {
    UNIQUE_CONTAINER_IDS.push(containerId);
  }

  //object with "loading" key for prospect loading logic
  const [state, changeState] = React.useState(DEFAULT_STATE);

  //fetch data logic
  const startDVFlowPolicy = React.useCallback(async (companyKey, policyKey, apiKey, params) => {
    if (!policyKey) {
      return false;
    }

    changeState({ loading: true });

    UNIQUE_CONTAINER_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        window.singularkey.cleanup(el);
      }
    });
    
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
      errorCallback
    };

    function errorCallback(error) {
      console.log(error);
      window.singularkey.cleanup(document.getElementById(containerId));
      dialog?.current?.close();
  }


    if (params) {
      props.config.parameters = params;
    }

    const widgetContainer = document.getElementById(containerId);

    // Used to scope bootstrap to just widgets
    widgetContainer.classList.add('widget-container');

    window.singularkey.skRenderScreen(widgetContainer, props)
    changeState({ loading: false });

    return true;
  }, [containerId, dialog]);

  return {
    ...state,
    startDVFlowPolicy,
  }
}