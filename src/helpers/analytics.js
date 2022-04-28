import ReactGA4 from 'react-ga4';

// Temporarily supporting UA (it is EOL in June 2023) but
// keeping both so we have consistent data coming into GA4
// to help with configuring dimensions and reports
import ReactGA from 'react-ga';

export function initGA() {
  ReactGA4.initialize('G-QMV831Z69N');
  
  // Universal Analytics, remove when switched to GA4
  ReactGA.initialize('UA-196676451-5');
}

export function gaPageView() {
  const path = window.location.pathname;
  ReactGA4.send({ 
    hitType:'pageview', 
    page: path
  });
  
  // Universal Analytics, remove when switched to GA4
  ReactGA.pageview(path);
}

export function gaEvent(action, label) {
  if (!action) {
    console.warn('category and action are required parameters to send an event to Google Analytics');
    return;
  }
  
  const sourceProject = window.location.host.indexOf('glitch.me') 
    ? window.location.host.split('.')[0] // Send the remix project name
    : 'bxindustry'; // Indicates it's coming from our main bxgeneric instance (e.g. demo.bxgeneric.org)
  
  const event = {
    category: sourceProject,
    action: action,
    label: label, //optional
  }
  
  ReactGA4.event(event);
  
  // Universal Analytics, remove when switched to GA4
  ReactGA.event(event);
}

window.bxi_trackGaEvent = gaEvent;