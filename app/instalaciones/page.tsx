import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section2 from "@/components/sections/instalaciones/Section1";
import Section9 from "@/components/sections/home-1/Section9";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Instalaciones" current="Instalaciones" isGroup={false} linkGroup="" pageGroup="" />
        <Section2 />
        <Section9 />
      </Layout>
    </>
  );
}
