import Head from "next/head";
import Nabar from "@/components/Nabar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { createClient } from "next-sanity";

export default function Home({profile}) {
  return (
    <>
      <Head>
        <title>Home   | Nipun Kumar</title>
      </Head>
      <Nabar />
      <div className="snap-mandatory snap-y w-full h-screen overflow-y-scroll">
        <section id="home" className="snap-center">
          <Main profile={profile} />
        </section>
        <section id="about" className="snap-center">
          <About about={profile.about} />
        </section>
        <section  id="skills" className="snap-center">
          <Skills skills={profile.skills} />
        </section>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "ztwhfnur",
    dataset: "blog",
    useCdn : false
  })

  const query = `*[_type == "profile"][0]`;
  const profile = await client.fetch(query);
  return {
    props: {
      profile: profile
    }
  }
}
