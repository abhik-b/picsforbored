import { NextSeo } from "next-seo";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Post from "../components/Post";
import styles from "../styles/Home.module.css";
import Message from "../components/Meesage";
import randomIndex from "../shared/randomIndex";
import { all } from "../shared/sources";
import Link from "next/link";

export async function getStaticProps() {
  try {
    const res = await fetch("https://www.reddit.com/r/memes.json");
    const posts = await res.json();
    return {
      props: {
        posts: posts.data.children,
        history: { memes: posts.data.after },
      }, // will be passed to the page component as props
    };
  } catch (error) {
    const err = error;
    return {
      props: {
        posts: [],
        err: JSON.stringify(err),
      }, // will be passed to the page component as props
    };
  }
}
export default function Random(props) {
  const [history, sethistory] = useState(props.history);
  const [source, setsource] = useState("memes");
  const [posts, setPosts] = useState(props.posts);
  const [err, setErr] = useState(props.err);
  function fetchMore() {
    if (history[source]) {
      setsource(all[randomIndex(all.length)]);
      fetch(`https://www.reddit.com/r/${source}.json?after=${history[source]}`)
        .then((res) => res.json())
        .then((body) => {
          setPosts((posts) => posts.concat(body.data.children));
          const newhist = history;
          newhist[source] = body.data.after;
          sethistory(newhist);
        })
        .catch((err) => {
          setErr(err);
        });
    } else {
      fetch(`https://www.reddit.com/r/${source}.json`)
        .then((res) => res.json())
        .then((body) => {
          setPosts((posts) => posts.concat(body.data.children));
          const newhist = history;
          newhist[source] = body.data.after;
          sethistory(newhist);
        })
        .catch((err) => {
          setErr(err);
        });
    }
  }

  return (
    <>
      <NextSeo
        title="Kill time with memes and pictures "
        titleTemplate="Pics For Bored | %s"
        description="Kill time with memes / pictures of nature , art and many more Pics For Bored,bored images, bored photos , pictures for bored,images for bored, time kill,pics for bored"
        canonical="https://picsforbored.vercel.app"
        openGraph={{
          type: "website",
          url: "https://picsforbored.vercel.app",
          title: "Pics/Memes to kill time,boredom",
          description:
            "Memes/pics of nature,art and many more to kill your time,cure boredom and refresh mood",
          images: [
            {
              url: "https://i.ibb.co/XYbRtpQ/og800600.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://i.ibb.co/YNMf3fx/og900800.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
          site_name: "PicsForBored",
        }}
        twitter={{
          handle: "@_abhikB",
          site: "@_abhikB",
          cardType: "summary_large_image",
        }}
      />
      <Message>
        <p>Tap on load more to load new messages</p>
      </Message>
      <h1 className="headin"> Pics For Bored</h1>

      <Link href="/category">
        <a className="footer">Change view</a>
      </Link>

      <h2 className="description">
        Bored Memes - Funny Boring Meme and Pictures , boredom stock images,
        bored images, bored pictures , pictures for bored,images for bored, time
        kill,pics for bored, Pics For Bored,Pics For Bored | Kill time with
        memes and random pictures, images, what to do when bored,when you are
        stuck inside and bored,fun websites, fun, images fun, fun images, Bored
        Memes. Best Collection of Funny Bored Pictures, Random pictures, random
        memes, dank memes, funniest memes, random pics, memes , time pass , time
        kill , Bored funniest memes Mood Off Kill time with memes & random
        pictures of nature , art and many more Pics For Bored | Kill time with
        memes and random pictures , kill your time,cure boredom and refresh mood
        bored Photos. boring tired stress sad yawn work angry happy frustrated
        thinking quarantine lazy sleepy alone stressed sleeping office time
        meeting waiting lonely excited sleep bored at work working Confused
        boredom Random Pics and Memes
      </h2>
      <div className={styles.container}>
        {err && <h1 className="error">Something went wrong Try Later !</h1>}
        {posts.map((p, index) => {
          if (index > 1 && p.data.post_hint === "image") {
            return (
              <Post
                key={`${p.data.name}-${index}`}
                title={p.data.title}
                image={p.data.url_overridden_by_dest}
                thumbnail={p.data.thumbnail}
                height={p.data.thumbnail_height}
                width={p.data.thumbnail_width}
              />
            );
          }
        })}
        <motion.div
          whileTap={{ scale: 0.7 }}
          className={styles.last}
          onClick={() => fetchMore()}
        >
          load more
        </motion.div>
      </div>
    </>
  );
}

// url: 'https://ibb.co/CsVyDfv',
