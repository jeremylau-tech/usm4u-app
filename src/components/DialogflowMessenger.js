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
        agentId: '178a788b-7072-48ea-93dc-887e12e9b07f',
        languageCode: 'en',
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Optionally, you can add some custom styles here */}
      <df-messenger
        project-id="cocoapp-406110"
        agent-id="178a788b-7072-48ea-93dc-887e12e9b07f"
        language-code="en">
        <df-messenger-chat
          chat-title="SmartA bot">
        </df-messenger-chat>
      </df-messenger>
    </div>
  );
};

export default DialogflowMessenger;
