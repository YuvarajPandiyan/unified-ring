type PlanDataType = {
  planName: string;
  planPrice: string;
  planDetailsTitle: string;
  planDetails: string[];
  isRecommended?: boolean;
}[];
export const PLAN_DATA: PlanDataType = [
  {
    planName: "Starter",
    planPrice: "£6.99",
    planDetailsTitle: "Startup Plan",
    planDetails: [
      "Up to 20 users only",
      "Business phone or toll-free numbers",
      "Unlimited calls within the US/CA*",
      "Unlimited business SMS Voicemail-to-text",
      "Team messaging",
      "Document sharing",
    ],
  },
  {
    planName: "Standard",
    planPrice: "£12.99",
    planDetailsTitle: "Everything in Startup plus",
    planDetails: [
      "No limit on number of users",
      "Business phone numbers in over 100 countries",
      "Unlimited internet fax",
      "Unlimited audio conferencing",
      "Video meetings with up to 100 participants",
      "Up to 24-hour meeting duration",
      "Quality-of-service reports",
      "Popular integrations including Office 365,",
      "G Suite, Slack, and more 24/7 support",
    ],
  },
  {
    planName: "Professional",
    planPrice: "£20.99",
    planDetailsTitle: "Everything in Standard plus",
    planDetails: [
      "Automatic call recording",
      "Single Sign-on",
      "Multi-site admin and management",
      "Up to 8-digit extensions with site codes ",
      "Hot desking",
      "Advanced call handling including whisper, barge, and more",
      "Video meetings with up to 200 participants",
      "Real-time analytics",
      "Popular CRM integrations with Salesforce, Zendesk, and more",
    ],
    isRecommended: true,
  },
  {
    planName: "Enterprise",
    planPrice: "£26.99",
    planDetailsTitle: "Everything in Professional Plus",
    planDetails: [
      "Device status reports",
      "Device status alerts",
      "Unlimited storage**",
    ],
  },
];
