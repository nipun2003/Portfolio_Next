import Head from "next/head";
import Nabar from "@/components/Nabar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { createClient } from "next-sanity";
import Projects from "@/components/Projects";

export default function Home({ profile ,projects}) {
  return (
    <>
      <Head>
        <title>Home   | Nipun Kumar</title>
      </Head>
      <Nabar />
      <div className="snap-proximity snap-y w-full h-screen overflow-y-scroll">
        <section id="home" className="snap-center">
          <Main profile={profile} />
        </section>
        <section id="about" className="snap-center">
          <About about={profile.about} />
        </section>
        <section id="skills" className="snap-center">
          <Skills skills={profile.skills} />
        </section>
        <section id="projects" className="snap-center">
          <Projects projects={projects} />
        </section>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "ztwhfnur",
    dataset: "blog",
    useCdn: false
  })

  const query = `*[_type == "profile"][0]`;
  const projectQuery = `*[_type == "project"]`;
  const profile = await client.fetch(query);
  const projects = await client.fetch(projectQuery);
  return {
    props: {
      profile: profile,
      projects : projects
    }
  }
}
