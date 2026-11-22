import allIndiaJobsHome from "@/assets/portfolio/Allindiajobs/image1.png";
import allIndiaJobsCompanies from "@/assets/portfolio/Allindiajobs/image2.png";
import allIndiaJobsLearning from "@/assets/portfolio/Allindiajobs/image3.png";
import allIndiaJobsListings from "@/assets/portfolio/Allindiajobs/image4.png";
import milkProInventory from "@/assets/portfolio/MiikSalespro/image1.png";
import milkProSales from "@/assets/portfolio/MiikSalespro/image2.png";
import milkProUsers from "@/assets/portfolio/MiikSalespro/image3.png";
import papakuttyHome from "@/assets/portfolio/papakutty/Image1.png";
import papakuttyProducts from "@/assets/portfolio/papakutty/Image2.png";
import papakuttyProductDetail from "@/assets/portfolio/papakutty/Image3.png";
import papakuttyAdmin from "@/assets/portfolio/papakutty/Image4.png";
import restaurantHome from "@/assets/portfolio/Resturent/image1.png";
import restaurantDining from "@/assets/portfolio/Resturent/image2.png";
import restaurantMenu from "@/assets/portfolio/Resturent/image3.pn.png";
import restaurantAbout from "@/assets/portfolio/Resturent/image4.png";
import restaurantContact from "@/assets/portfolio/Resturent/image5.png";
import restaurantDashboard from "@/assets/portfolio/Resturent/image6.png";
import restaurantFeedback from "@/assets/portfolio/Resturent/image7.png";
import scanCentreHome from "@/assets/portfolio/cumbunScancenter/image1.png";
import scanCentreGallery from "@/assets/portfolio/cumbunScancenter/image2.png";
import scanCentreContact from "@/assets/portfolio/cumbunScancenter/image3.png";
import scanCentreAppointment from "@/assets/portfolio/cumbunScancenter/image4.png";
import bossfitHome from "@/assets/portfolio/Bossfit/image1.png";
import bossfitPlans from "@/assets/portfolio/Bossfit/image2.png";
import bossfitTrainers from "@/assets/portfolio/Bossfit/image3.png";
import bossfitBmi from "@/assets/portfolio/Bossfit/image4.png";
import bossfitContact from "@/assets/portfolio/Bossfit/image5.png";

export interface Sample {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: {
    overview: string;
    features: string[];
    techStack?: string[];
    duration?: string;
    client: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  color: string;
  samples: Sample[];
}

// Each project owns its screenshots; the first also serves as its portfolio cover.
// Delivery dates and implementation stacks are omitted until confirmed.
const createSample = (
  client: string,
  id: string,
  title: string,
  image: string,
  description: string,
  tags: string[],
  features: string[],
): Sample => ({
  id,
  title,
  image,
  description,
  tags,
  details: { overview: description, features, client },
});

export const projects: Project[] = [
  {
    id: "all-india-jobs",
    title: "All India Jobs",
    category: "Job Portal",
    image: allIndiaJobsHome,
    description: "A career and learning hub bringing together job openings, company profiles, and learning resources.",
    color: "from-primary to-emerald-400",
    samples: [
      createSample(
        "All India Jobs", "all-india-jobs-home", "Career & Learning Hub", allIndiaJobsHome,
        "The homepage introduces job discovery, company insights, career articles, and interview preparation resources.",
        ["Homepage", "Careers", "Learning"],
        ["Career resource navigation", "Job and company discovery", "Career articles", "Interview preparation resources"],
      ),
      createSample(
        "All India Jobs", "all-india-jobs-companies", "Company Directory", allIndiaJobsCompanies,
        "The company directory presents employers in a card layout with company names, locations, and profile view counts.",
        ["Companies", "Directory", "Profiles"],
        ["Company profile cards", "Company locations", "Profile view counts"],
      ),
      createSample(
        "All India Jobs", "all-india-jobs-learning", "Learning Resources", allIndiaJobsLearning,
        "The learning resource page organizes video tutorials for HTML, CSS, JavaScript, Tailwind CSS, React, Node.js, and MongoDB.",
        ["Learning", "Tutorials", "Resources"],
        ["MERN stack roadmap", "Embedded video tutorials", "Topic-based resource cards"],
      ),
      createSample(
        "All India Jobs", "all-india-jobs-listings", "Job Listings", allIndiaJobsListings,
        "The jobs page helps visitors browse openings and search by jobs, companies, locations, or skills.",
        ["Jobs", "Search", "Recruitment"],
        ["Job search field", "Company and location details", "Experience and salary information", "Applicant counts"],
      ),
    ],
  },
  {
    id: "milkpro-sales",
    title: "MilkPro Sales",
    category: "Business Application",
    image: milkProInventory,
    description: "A milk distribution management application with inventory, sales logs, and user management.",
    color: "from-blue-500 to-cyan-400",
    samples: [
      createSample(
        "MilkPro Sales", "milkpro-inventory", "Inventory Management", milkProInventory,
        "The inventory screen groups daily milk requirements into morning and evening slots for vendors and distributors, alongside a stock listing.",
        ["Inventory", "Distribution", "Dashboard"],
        ["Daily milk requirements", "Morning and evening slots", "Vendor and distributor groups", "Inventory quantity table"],
      ),
      createSample(
        "MilkPro Sales", "milkpro-sales-log", "Sales Log", milkProSales,
        "The sales log screen provides vendor and distributor filters with date selection and a table for quantities and distribution records.",
        ["Sales", "Filters", "Reporting"],
        ["Vendor and distributor filters", "Date selection", "Sales quantity summaries", "Distribution status table"],
      ),
      createSample(
        "MilkPro Sales", "milkpro-users", "User Management", milkProUsers,
        "The user management screen organizes customer records with filters for user type, customer type, line, price tag, payment type, and status.",
        ["Users", "Administration", "Filters"],
        ["Add user action", "Customer and user type filters", "Line and price tag filters", "Paginated user listing"],
      ),
    ],
  },
  {
    id: "papakutty-creations",
    title: "Papakutty Creations",
    category: "Product Showcase",
    image: papakuttyHome,
    description: "A handmade resin gifts website with a product catalogue, custom keepsakes, and an admin dashboard.",
    color: "from-purple-500 to-pink-400",
    samples: [
      createSample(
        "Papakutty Creations", "papakutty-home", "Handmade Gifts Homepage", papakuttyHome,
        "The homepage introduces handmade resin gifts with a product collage and links to explore products or contact the business through WhatsApp.",
        ["Homepage", "Handmade", "Gifts"],
        ["Gift showcase hero", "Product discovery", "WhatsApp contact", "Custom keepsake introduction"],
      ),
      createSample(
        "Papakutty Creations", "papakutty-products", "Product Catalogue", papakuttyProducts,
        "The product catalogue presents handmade keepsakes with category navigation, product descriptions, starting prices, and links to individual products.",
        ["Catalogue", "Categories", "Products"],
        ["Product category filters", "Product photo cards", "Starting prices", "Product detail links"],
      ),
      createSample(
        "Papakutty Creations", "papakutty-product-detail", "Product Details", papakuttyProductDetail,
        "The product detail page showcases a personalized floral name board with a large product image and an embedded Instagram preview.",
        ["Product Details", "Gallery", "Instagram"],
        ["Large product photography", "Instagram product preview", "Product category label", "Individual product title"],
      ),
      createSample(
        "Papakutty Creations", "papakutty-admin", "Admin Dashboard", papakuttyAdmin,
        "The administration dashboard includes category management and navigation for products, orders, and enquiries.",
        ["Admin", "Categories", "Dashboard"],
        ["Category listing", "Add and edit category actions", "Category status indicators", "Products, orders, and enquiry navigation"],
      ),
    ],
  },
  {
    id: "sree-sangeetham",
    title: "Sree Sangeetham",
    category: "Restaurant Website",
    image: restaurantHome,
    description: "A restaurant website showcasing South Indian cuisine, dining experiences, menu browsing, and customer feedback.",
    color: "from-orange-500 to-amber-400",
    samples: [
      createSample(
        "Sree Sangeetham", "restaurant-home", "Restaurant Homepage", restaurantHome,
        "The homepage introduces Sree Sangeetham with a restaurant storefront hero, South Indian cuisine highlights, and menu and table reservation links.",
        ["Homepage", "Restaurant", "Dining"],
        ["Restaurant storefront hero", "Menu navigation", "Table reservation links", "Dining highlights"],
      ),
      createSample(
        "Sree Sangeetham", "restaurant-dining", "Dining & Morning Specials", restaurantDining,
        "A dining feature pairs the restaurant interior with a morning tea showcase and an invitation to explore the menu.",
        ["Dining", "Interiors", "Beverages"],
        ["Restaurant interior showcase", "Morning tea feature", "Explore menu action"],
      ),
      createSample(
        "Sree Sangeetham", "restaurant-menu", "Food Menu", restaurantMenu,
        "The menu page organizes dishes by category and displays dish names, descriptions, prices, and order actions.",
        ["Menu", "Categories", "Food"],
        ["Food category navigation", "Dish descriptions", "Menu prices", "Order actions"],
      ),
      createSample(
        "Sree Sangeetham", "restaurant-about", "About the Restaurant", restaurantAbout,
        "The about page introduces the restaurant's South Indian food, traditional preparation, fresh ingredients, and hospitality.",
        ["About", "Tradition", "Hospitality"],
        ["Restaurant introduction", "Cuisine and hospitality highlights", "Location information"],
      ),
      createSample(
        "Sree Sangeetham", "restaurant-contact", "Contact & Enquiries", restaurantContact,
        "The contact page combines restaurant contact information and opening hours with a customer enquiry form.",
        ["Contact", "Enquiries", "Opening Hours"],
        ["Contact information", "Opening hours", "Customer enquiry form", "Message submission action"],
      ),
      createSample(
        "Sree Sangeetham", "restaurant-dashboard", "Administration Dashboard", restaurantDashboard,
        "The administration overview presents occupancy, revenue, guest activity, and ratings alongside menu management and feedback navigation.",
        ["Admin", "Dashboard", "Reporting"],
        ["Overview metric cards", "Occupancy summaries", "Revenue chart", "Guest ratings"],
      ),
      createSample(
        "Sree Sangeetham", "restaurant-feedback", "Customer Feedback", restaurantFeedback,
        "The feedback dashboard displays customer review cards with ratings for food, service, ambience, cleanliness, and value.",
        ["Feedback", "Ratings", "Admin"],
        ["Customer review cards", "Category ratings", "Recommendation status", "Review dates"],
      ),
    ],
  },
  {
    id: "cumbum-united-scan-centre",
    title: "Cumbum United Scan Centre",
    category: "Healthcare Website",
    image: scanCentreHome,
    description: "A diagnostic scan centre website presenting imaging services, facility photos, contact information, and appointment requests.",
    color: "from-blue-600 to-sky-400",
    samples: [
      createSample(
        "Cumbum United Scan Centre", "scan-centre-home", "Diagnostic Centre Homepage", scanCentreHome,
        "The homepage introduces the Cumbum scan centre with an imaging suite hero, MRI, CT, ultrasound and X-ray service highlights, and appointment and contact links.",
        ["Homepage", "Healthcare", "Diagnostics"],
        ["Diagnostic imaging introduction", "Scan service highlights", "Appointment and contact links", "WhatsApp contact action"],
      ),
      createSample(
        "Cumbum United Scan Centre", "scan-centre-gallery", "Facility Gallery", scanCentreGallery,
        "The gallery showcases the reception, MRI suite, CT scan room, ultrasound, digital X-ray, and reporting room in a labelled photo grid.",
        ["Gallery", "Facilities", "Imaging"],
        ["Facility photo grid", "Reception showcase", "Imaging room previews", "Reporting room preview"],
      ),
      createSample(
        "Cumbum United Scan Centre", "scan-centre-contact", "Contact & Location", scanCentreContact,
        "The contact section pairs address, phone, email, and opening hours with an embedded map to help visitors locate the scan centre.",
        ["Contact", "Location", "Map"],
        ["Contact information cards", "Opening hours", "Embedded location map", "Open in Maps action"],
      ),
      createSample(
        "Cumbum United Scan Centre", "scan-centre-appointment", "Appointment Request", scanCentreAppointment,
        "The appointment section presents a request form for patient name, mobile number, scan type, preferred date, and an optional message, followed by service and contact links.",
        ["Appointments", "Forms", "Patient Enquiries"],
        ["Patient contact fields", "Scan type selection", "Preferred date field", "Optional message field", "Service and contact footer"],
      ),
    ],
  },
  {
    id: "bossfit",
    title: "Boss Fitness",
    category: "Fitness Website",
    image: bossfitHome,
    description: "A gym website showcasing strength training, membership plans, expert coaches, a BMI tool, and contact enquiries.",
    color: "from-orange-500 to-red-500",
    samples: [
      createSample(
        "Boss Fitness", "bossfit-home", "Fitness Homepage", bossfitHome,
        "The homepage introduces Boss Fitness with a gym photo hero, training and tour actions, membership highlights, and navigation to plans, trainers, BMI, and contact sections.",
        ["Homepage", "Fitness", "Training"],
        ["Gym photo hero", "Training and tour actions", "Membership highlights", "Section navigation"],
      ),
      createSample(
        "Boss Fitness", "bossfit-plans", "Membership Plans", bossfitPlans,
        "The membership section compares Starter, Pro, and Elite plans with pricing, included benefits, and a highlighted popular plan.",
        ["Membership", "Plans", "Pricing"],
        ["Three membership tiers", "Plan pricing", "Benefit comparisons", "Popular plan highlight", "Get started actions"],
      ),
      createSample(
        "Boss Fitness", "bossfit-trainers", "Expert Coaches", bossfitTrainers,
        "The trainer section showcases coaches with portraits, training specialties, years of experience, and Instagram links.",
        ["Trainers", "Coaching", "Team"],
        ["Coach profile cards", "Trainer portraits", "Specialties and experience", "Instagram links"],
      ),
      createSample(
        "Boss Fitness", "bossfit-bmi", "BMI Tool", bossfitBmi,
        "The BMI section presents height and weight sliders alongside a circular result display and a category label.",
        ["BMI", "Fitness", "Tool"],
        ["Height slider", "Weight slider", "Circular BMI display", "Result category label"],
      ),
      createSample(
        "Boss Fitness", "bossfit-contact", "Contact & Enquiries", bossfitContact,
        "The contact section pairs the gym address, phone, and email with an enquiry form for visitor details and fitness goals.",
        ["Contact", "Enquiries", "Forms"],
        ["Gym contact details", "Name and email fields", "Optional phone field", "Fitness goals message", "Send message action"],
      ),
    ],
  },
];
