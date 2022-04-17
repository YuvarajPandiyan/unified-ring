import { Header } from "../components/header/Header";
import { PlanHero } from "../components/plan-hero/plan-hero";
import { PlanCard } from "../components/plan-card/plan-card";
import { Footer } from "../components/footer/footer";
export const Plan = () => (
  <>
    <Header />
    <PlanHero />
    <PlanCard />
    <div style={{ marginTop: "26rem" }}>
      <Footer />
    </div>
  </>
);
