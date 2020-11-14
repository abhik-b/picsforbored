import { NextSeo } from "next-seo";
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Post from "../components/Post";
import styles from "../styles/Home.module.css";
import Message from "../components/Meesage";
import Link from "next/link";

export async function getStaticProps() {
  try {
    const res = await fetch("https://www.reddit.com/r/memes.json");
    const posts = await res.json();
    return {
      props: {
        posts: posts.data.children,
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
export default function Home(props) {
  const [history, sethistory] = useState({});
  const [call, setCall] = useState(false);
  const [source, setsource] = useState("memes");
  const [posts, setPosts] = useState(props.posts);
  const [err, setErr] = useState(props.err);

  useEffect(() => {
    setCall(false);

    if (history[source]) {
      fetch(`https://www.reddit.com/r/${source}.json?after=${history[source]}`)
        .then((res) => res.json())
        .then((body) => {
          setPosts(body.data.children);
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
          setPosts(body.data.children);
          const newhist = history;
          newhist[source] = body.data.after;
          sethistory(newhist);
        })
        .catch((err) => {
          setErr(err);
        });
    }
  }, [call]);
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
        <p>Tap on any category to fetch pictures</p>
        <p>Tap the same category to fetch new pictures</p>
      </Message>

      <h1 className="headin"> Pics For Bored</h1>

      <Link href="/">
        <a className="footer">Change view</a>
      </Link>
      <div className={styles.grid}>
        <Filter setCall={setCall} setSource={setsource} />
        <div className={styles.container}>
          {err && <h1 className="error">Something went wrong Try Later !</h1>}
          {posts.map((p, index) => {
            if (index > 1 && p.data.post_hint === "image") {
              return (
                <Post
                  key={p.data.name}
                  title={p.data.title}
                  image={p.data.url_overridden_by_dest}
                  thumbnail={p.data.thumbnail}
                  height={p.data.thumbnail_height}
                  width={p.data.thumbnail_width}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

// url: 'https://ibb.co/CsVyDfv',
