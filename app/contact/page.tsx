import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/contact/Section1";
import SectionHeader from "@/components/layout/SectionHeader";
import Section9 from "@/components/sections/home-1/Section9";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="Contacto" isGroup={false} linkGroup="" pageGroup="" current="Contacto" />
        <Section1 />
        <Section9 />
      </Layout>
    </>
  );
}
