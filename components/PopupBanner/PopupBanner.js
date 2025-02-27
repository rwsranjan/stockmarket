import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PopupBanner.module.css'; // Optional: Add styles
import imageLoader, { imageCustom } from '@/lib/imageLoader';
import Link from 'next/link';
const PopupBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Set a delay for the popup to appear (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  // Close the popup
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.closeButton} onClick={handleClose}>
              &times;
            </div>
            <Link href="#registrationModal" data-bs-toggle="modal"
              data-bs-target="#registrationModal" >
              <img
                src="assets/images/myimages/offer/stockbrainbanner.png" // Replace with the path to your image
                alt="Popup Banner"
                width={0} // Adjust image dimensions
                height={0}
                className={styles.animatedImage}
              />
            </Link>

          </div>
        </div>
      )}
    </>
  );
};

export default PopupBanner;
