import Head from "next/head";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { createClient } from "next-sanity";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";

export default function Home({ profile, projects, blogs }) {
  return (
    <>
      <Head>
        <title>Home   | Nipun Kumar</title>
      </Head>
      <Navbar />
      <div className="snap-proximity flex flex-col md:snap-y w-full min-h-screen overflow-y-scroll">
        <section id="home" className="snap-center">
          <Main profile={profile} />
        </section>
        <section id="about" className="md:snap-center w-full md:h-screen">
          <About about={profile.about}  />
        </section>
        <section id="skills" className="md:snap-center w-full md:min-h-screen">
          <Skills skills={profile.skills} />
        </section>
        <section id="projects" className="md:snap-center w-full h-screen">
          <Projects projects={projects} />
        </section>
        <section id="blogs" className="md:snap-center w-full h-screen">
          <Blogs blogs={blogs} />
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
  const blogQuery = `*[_type == "blog"]`;
  const profile = await client.fetch(query);
  const projects = await client.fetch(projectQuery);
  const blogs = await client.fetch(blogQuery);
  return {
    props: {
      profile: profile,
      projects: projects,
      blogs: blogs
    }
  }
}
