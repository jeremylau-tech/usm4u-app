// DialogflowMessenger.js
import React, { useEffect } from 'react';

const DialogflowMessenger = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.dfMessenger.create({
        projectId: 'cocoapp-406110',
        agentId: 'smarta-bot_1700909313801',
        languageCode: 'en',
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>hiii</h1>
    </div>
  );
};

export default DialogflowMessenger;
