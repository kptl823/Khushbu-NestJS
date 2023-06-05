import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "../pages/api/Newsletter";
import utilStyles from '../styles/utils.module.css';

export default function SubscribeForm() {
  return (
    <footer className={`${utilStyles.flex} ${utilStyles.justifyBetween} ${utilStyles.itemsCenter} ${utilStyles.py4} ${utilStyles.bgGray}`}>
      <div className={`${utilStyles.flex} ${utilStyles.flexCol} ${utilStyles.w50} ${utilStyles.mr4}`}>
        <MailchimpSubscribe
          url={""}
          render={(props) => {
            const { status, subscribe, message } = props || {};
            return (
              <NewsLetterForm
                className={`${utilStyles.wFull} ${utilStyles.p2} ${utilStyles.mb4} ${utilStyles.border} ${utilStyles.borderGray} ${utilStyles.rounded}`}
                status={status}
                message={message}
                onValidated={(formData) =>  subscribe(formData)}
              />
            );
          }}
        />
      </div>
      <div className={`${utilStyles.flex} ${utilStyles.itemsCenter}`}>
        <a href="#" className={`${utilStyles.mr2} ${utilStyles.textGray}`}>Facebook</a>
        <a href="#" className={`${utilStyles.mr2} ${utilStyles.textGray}`}>Twitter</a>
        <a href="#" className={`${utilStyles.textGray}`}>Instagram</a>
      </div>
    </footer>
  );
}
