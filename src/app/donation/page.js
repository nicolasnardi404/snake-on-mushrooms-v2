import styles from "../../../styles/Donation.module.css";

export default function DonationPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Support the Game</h1>
        <div className={styles.content}>
          <div className={styles.textCenter}>
            <p className={styles.subtitle}>
              Help us keep the mushrooms growing! 🍄
            </p>

            <div className={styles.donationBox}>
              <p>
                Your support helps keep this game free and enables future
                updates!
              </p>

              {/* Stripe Button */}
              <stripe-buy-button
                buy-button-id="buy_btn_1PwQaD09kQaCl5xpu4ZIwHKA"
                publishable-key="pk_live_51PwO6M09kQaCl5xpiYwXWc1lE6JSVV8H6a08o0HtO27vHyCP4IKSjxIHAs6HfsW90hdfBB7vMBzpWTO4AXmm6gOP003CShheae"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
