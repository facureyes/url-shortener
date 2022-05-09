import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from '../styles/Redirect.module.css';

export default function RedirectUrls() {
  const router = useRouter();
  const shortenedUrl = router.query?.slug;
  
  const getUrl = async (shortenedUrl: string) => {
      const result = await fetch('/api/get-url', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({shortenedUrl})
      })
      if(result.status === 200){
        const {url} = await result.json();
        if(url){
          router.push(url);
        }
      } else {
        router.push({pathname: '/'})
      }
  }

  useEffect(()=>{
    if(shortenedUrl && typeof shortenedUrl === "string"){
      getUrl(shortenedUrl);
    }
  },[shortenedUrl])


  return (
    <>
      <Head>
        <title>Redirecting...</title>
        <meta name="description" content="URL shortener app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.ldsRipple}><div></div><div></div></div>
        <p className={styles.redirect}>Redirecting...</p>
      </div>
    </>
  );
}