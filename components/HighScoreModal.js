"use client";

import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import styles from "../styles/HighScoreModal.module.css";

export default function HighScoreModal({ score, onSubmit, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    if (name) {
      setIsSubmitting(true);
      try {
        await onSubmit(name);
      } finally {
        setIsSubmitting(false);
        onClose();
      }
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  const footerContent = (
    <div className={styles.buttonContainer}>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={handleClose}
        className="p-button-text"
        disabled={isSubmitting}
      />
      <Button
        label={isSubmitting ? "Saving..." : "Save Score"}
        icon="pi pi-check"
        type="submit"
        form="highScoreForm"
        disabled={isSubmitting}
        autoFocus
      />
    </div>
  );

  return (
    <Dialog
      visible={true}
      onHide={handleClose}
      header="🏆 New High Score!"
      footer={footerContent}
      className={styles.dialog}
      modal
      closeOnEscape
      dismissableMask
      draggable={false}
      resizable={false}
    >
      <div className="text-center">
        <p className={styles.message}>
          Congratulations! You scored {score} points!
        </p>
        <form
          id="highScoreForm"
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={styles.label}>
              Enter your name:
            </label>
            <InputText
              id="name"
              name="name"
              maxLength={50}
              minLength={2}
              pattern="[A-Za-z0-9\s]+"
              title="Please use only letters, numbers, and spaces"
              required
              autoFocus
            />
          </div>
        </form>
      </div>
    </Dialog>
  );
}
