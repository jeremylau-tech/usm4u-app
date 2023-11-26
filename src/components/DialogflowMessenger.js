// DialogflowMessenger.js
import React, { useEffect } from 'react';
import Navbar from './Navbar';

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
      <Navbar/>

      <head>
      <title>Student helpdesk - Demo</title>
      <meta name="viewport" content="width-device-width, initial-scale=1" />
      <style>
        {`
          df-messenger {
            --df-messenger-bot-message: #878fac;
            --df-messenger-user-message: #005457;
            --df-messenger-button-titlebar-color: #df9b56;
            --df-messenger-chat-background-color: #fafafa;
            --df-messenger-font-color: #005457;
            --df-messenger-send-icon: #005457;
            --df-messenger-user-message: #005457;
            --df-messenger-chat chat-title: black;
            --df-messenger-chat-padding: 60px;
          }
        `}
      </style>
      </head>

      {/* Optionally, you can add some custom styles here */}
      <div className="df-messenger-container">
      <style>
        {`
          .df-messenger-chat {
            --df-messenger-chat-title-background: green;
          }

          .df-messenger {
            display: block;
            height: 100vh;
            width: 100%;
          }
        `}
      </style>

      <df-messenger
        project-id="cocoapp-406110"
        agent-id="f8b7e3f5-d7e6-450b-ad59-9cabb136826a"
        language-code="en"
      >
        <df-messenger-chat chat-title="Ask CoCo (Scraped and Developed with ❤ by Hong Leong Database)"></df-messenger-chat>
      </df-messenger>
    </div>
    </div>
  );
};

export default DialogflowMessenger;
