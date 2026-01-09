import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section4 from "@/components/sections/about/Section4";
import Section9 from "@/components/sections/home-1/Section9";
import Section7Home1 from "@/components/sections/home-1/Section10";
export default function About() {
  return (
    <>
      <Layout>
        <SectionHeader title="Nosotros" current="Nosotros" isGroup={false} linkGroup="" pageGroup="" />
        <Section1 background="vl-off-white-bg" />
        <Section2 />
        <Section4 />
        <Section7Home1 text_2="text-2" />
        <Section9 />
      </Layout>
    </>
  );
}
