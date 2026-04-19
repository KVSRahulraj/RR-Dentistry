export interface Service {
  id: string;
  shortTitle: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export const servicesData: Service[] = [
  {
    id: "single-visit-crowns",
    shortTitle: "Crowns",
    title: "Single Visit Crowns",
    description: "Using state-of-the-art CAD/CAM technology, we design, fabricate, and place permanent, natural-looking crowns in just one visit. Say goodbye to uncomfortable temporary crowns and multiple appointments. Experience ultimate convenience and comfort.",
    benefits: ["One single appointment", "No messy impressions", "Highly durable and aesthetic", "Conserves more natural tooth structure"],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "microscope-root-canals",
    shortTitle: "Root Canals",
    title: "Microscope Assessed Root Canals",
    description: "Root canals don't have to be intimidating. We carefully perform root canal therapy using high-powered dental microscopes. This ensures maximum precision, ensuring the entire procedure is meticulous, painless, and completely eliminates the infection while maximizing your comfort.",
    benefits: ["Painless procedure", "Highest precision and success rate", "Saves the natural tooth", "Prevents further infection"],
    image: "https://images.unsplash.com/photo-1598256989467-33a8c3d0016e?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "full-mouth-rehab",
    shortTitle: "Rehabilitation",
    title: "Full Mouth Rehabilitation",
    description: "A comprehensive approach to restoring your smile's health, function, and aesthetics. Whether you have worn, damaged, or missing teeth, our experts create a personalized treatment plan combining various restorative procedures to give you back a fully functional and beautiful smile.",
    benefits: ["Restores proper chewing function", "Enhances facial aesthetics", "Corrects bite misalignment", "Long-lasting transformative results"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "invisalign",
    shortTitle: "Invisalign",
    title: "Invisalign & Clear Aligners",
    description: "Straighten your teeth discreetly and comfortably with Invisalign. These custom-made, virtually invisible aligners gently shift your teeth into proper alignment without the hassle of traditional metal braces. Enjoy your favorite foods and maintain easy oral hygiene during treatment.",
    benefits: ["Virtually invisible", "Removable for eating and cleaning", "Comfortable, smooth plastic", "Fewer clinic visits required"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "cleanups",
    shortTitle: "Cleanups",
    title: "Professional Dental Cleanings",
    description: "Maintain a bright, healthy smile with our thorough but gentle professional cleaning services. We remove stubborn plaque and tartar build-up, polish your teeth for a pristine finish, and provide guidance to keep your gums healthy and breath fresh.",
    benefits: ["Prevents gum disease and decay", "Freshens breath", "Removes surface stains", "Gentle, ultrasonic technology"],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "dental-implants",
    shortTitle: "Implants",
    title: "Advanced Dental Implants",
    description: "Replace missing teeth permanently with our advanced dental implants. Designed to look, feel, and function exactly like natural teeth, implants are the gold standard for tooth replacement, restoring your confidence to eat, speak, and smile beautifully.",
    benefits: ["Permanent and secure", "Preserves jawbone health", "Looks and feels natural", "No damage to adjacent teeth"],
    image: "https://images.unsplash.com/photo-1598256989467-33a8c3d0016e?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "teeth-whitening",
    shortTitle: "Teeth Whitening",
    title: "Professional Teeth Whitening",
    description: "Achieve a dazzling, brighter smile in just one hour. Our professional teeth whitening treatments use safe, advanced agents to lift years of deep stains caused by coffee, tea, and everyday lifestyle habits, giving you an instantly radiant smile.",
    benefits: ["Instant, noticeable results", "Safe for tooth enamel", "Removes deep stubborn stains", "Long-lasting brightness"],
    image: "https://images.unsplash.com/photo-1512739460295-8884d5df68bd?w=800&h=600&fit=crop&q=80"
  },
  {
    id: "pediatric-dentistry",
    shortTitle: "Pediatric",
    title: "Gentle Pediatric Dentistry",
    description: "We provide a warm, fun, and anxiety-free environment for your little ones. Our pediatric specialists focus on preventive care, gentle treatments, and educating children on good oral habits, ensuring a lifetime of healthy smiles.",
    benefits: ["Fun and relaxing environment", "Preventive treatments like sealants", "Cavity management", "Friendly, specialized staff"],
    image: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?w=800&h=600&fit=crop&q=80"
  }
];
