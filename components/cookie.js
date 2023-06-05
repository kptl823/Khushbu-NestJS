import React, { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookie = () => {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    const isCookieAccepted = document.cookie.indexOf('myCookie=true') !== -1;
    setCookieAccepted(isCookieAccepted);
  }, []);

  const handleAccept = () => {
    document.cookie = 'myCookie=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    setCookieAccepted(true);
  };

  const handleReject = () => {
    document.cookie = 'myCookie=false; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    setCookieAccepted(false);
  };

  return (
    <div>
      {!cookieAccepted && (
        <CookieConsent
          disableStyles={true}
          location="bottom"
          buttonText="Accept"
          cookieName="myCookie"
          onAccept={handleAccept}
          onDecline={handleReject}
        >
          This website uses cookies to improve your experience.
        </CookieConsent>
      )}
    </div>
  );
};

export default Cookie;
