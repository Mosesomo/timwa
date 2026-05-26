import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import HomeSections from "@/components/home-sections";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HomeSections />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
