import Link from 'next/link'
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactInfo({styles}) {
  return (
    <div className={styles.ContactInformation}>
        <h3>CONTACT INFORMATION</h3>
        <div className={styles.AddressContainer}>
            <div className={styles.AddressItem}>
                <img className={styles.Icon} src="/images/location-pin.png" alt='location pin' />
                <div className={styles.AddressText}>
                    <h3>OFFICE ADDRESS</h3>
                    <p>Office No- 3, 6th Floor, Stellar IT Park, Tower-A, Sector 62, Noida, Uttar Pradesh 201309</p>
                </div>
            </div>
            <div className={styles.AddressItem}>
                <img className={styles.Icon} src="/images/call.png" alt='call' />
                <div className={styles.AddressText}>
                    <h3>CONTACT NUMBER</h3>
                    <p>+919540200569</p>
                </div>
            </div>
            <div className={styles.AddressItem}>
                <img className={styles.Icon} src="/images/mail.png" alt='mail' />
                <div className={styles.AddressText}>
                    <h3>EMAIL</h3>
                    <p>it@jabitsoft.com</p>
                </div>
            </div>
            <div className={styles.AddressItem}>
                <img className={styles.Icon} src="/images/clock.png" alt='clock' />
                <div className={styles.AddressText}>
                    <h3>OFFICE HOURS</h3>
                    <p>Monday - Friday, 9am - 6pm</p>
                </div>
            </div>
        </div>
        <div className={styles.BottomSocialLinkContainer}>
                <div className={styles.SocialLinks}>
                <Link  href={"/"}><a ><img src="/images/instagram.png" /></a></Link>
                <Link href={"/"}><a><img src="/images/linkedin.png" /></a></Link>
                <Link href={"/"}><a><img src="/images/facebook.png" /></a></Link>
                <Link href={"/"}><a><img src="/images/twitter.png" /></a></Link>
                </div>
        </div>
    </div>
  )
}

export default ContactInfo