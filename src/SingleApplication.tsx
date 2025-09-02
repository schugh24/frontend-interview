import React from "react";
import styles from "./SingleApplication.module.css";

const SingleApplication = ({ application }) => {
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        <span className={styles.columnText}>{application.company}</span>
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        <span className={styles.columnText}>
          {application.first_name} {application.last_name}
        </span>
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        <span className={styles.email}>{application.email}</span>
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        <span className={styles.columnText}>
          {formatLoanAmount(application.loan_amount)}
        </span>
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        <span className={styles.columnText}>
          {formatDate(application.date_created)}
        </span>
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        <span className={styles.columnText}>
          {formatDate(application.expiry_date)}
        </span>
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const formatLoanAmount = (amount) => {
  if (typeof amount === "number") {
    return `£${amount.toLocaleString("en-GB")}`;
  }
  const num = Number(amount);
  if (!isNaN(num)) {
    return `£${num.toLocaleString("en-GB")}`;
  }
  return amount;
};
export default SingleApplication;
