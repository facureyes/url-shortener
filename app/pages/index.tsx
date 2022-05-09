import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { toast } from 'react-toastify';

export default function Home() {
  const [inputUrl, setInputUrl] = useState("");
  const [outputUrl, setOutputUrl] = useState("");
  

  const handleClick = (event)=>{
    navigator.clipboard.writeText(outputUrl);
    toast.success("URL copied!", {icon: "🥳"});
  }


  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if(!inputUrl.includes(process.env.NEXT_PUBLIC_BASE_URL) && inputUrl.length){
      // Communicate to back-end
      let formResponse = await toast.promise(fetch('/api/add', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url: inputUrl})
      }),{
        pending: 'Feeding the hamster...',
        success: 'URL Shortened! 👌',
        error: 'SYSTEM FAILURE 🤯'
      }
        )
  
      if(formResponse.status === 200){
        const {shortenedUrl} = await formResponse.json();
        console.log(shortenedUrl)
        setOutputUrl(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortenedUrl}`);
      }
    } else {
      toast.warn("Check your link!")
    }
  };

  const handleInput = (event: React.SyntheticEvent<EventTarget>) => {
    setInputUrl((event.target as HTMLInputElement).value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>URL Shortener</title>
        <meta name="description" content="URL shortener app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>URL Shortener</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Paste your url..."
            className={styles.input}
            onChange={handleInput}
          ></input>
          <button type="submit" className={styles.button}>
            Go!
          </button>
        </form>
        {outputUrl && <><h2 className={styles.output} onClick={handleClick}>{outputUrl}</h2><p>{"(click to copy to clipboard)"}</p></>}
      </main>
    </div>
  );
}
