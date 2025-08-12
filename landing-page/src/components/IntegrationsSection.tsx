import { DashboardMockup } from "./animations/DashboardMockup";
import FeatureCard from "./animations/FeatrueCard";
import { IntegrationMockup } from "./animations/MockInterface";
import { motion } from "framer-motion";
function IntegrationsSection() {
  return (
    <div id="product" className="px-6 lg:px-12 py-20 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            מערכת חכמה, שליטה מלאה
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            לוח בקרה אינטראקטיבי וחיבור לכל הפלטפורמות - הכלים שאתה צריך כדי
            לנהל את התקשורת של העסק שלך בקלות.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Step 1 - Analytics & Insights (Half Width) */}
          <FeatureCard
            title="תובנות ומעקב בזמן אמת"
            description="קבלו דיווחים מפורטים על כל פנייה, זמני תגובה, שביעות רצון לקוחות ועוד."
            delay={0.4}
          >
            <DashboardMockup />
          </FeatureCard>

          {/* Step 2 - Multi-platform Integration (Half Width) */}
          <FeatureCard
            title="חיבור לכל הפלטפורמות"
            description="אין צורך לבחור פלטפורמה אחת. העוזר שלנו מתחבר לוואטסאפ, פייסבוק מסנג'ר, אינסטגרם ועוד."
            delay={0.6}
          >
            <IntegrationMockup />
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}

export default IntegrationsSection;
