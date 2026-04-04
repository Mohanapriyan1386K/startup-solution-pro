import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, Clock, User, Code2, Sparkles } from "lucide-react";
import { useState } from "react";
import { projects, Sample } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);

  const siteUrl = "https://maventechnology.in";
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Helmet>
          <title>Project Not Found | Maven Technology</title>
          <meta name="description" content="The requested project could not be found. Explore our portfolio of modern websites for growing businesses." />
        </Helmet>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <button onClick={() => navigate("/")} className="text-primary hover:underline">
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{project.title} | Maven Technology</title>
        <meta name="description" content={project.description} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={`${project.title} | Maven Technology`} />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:image"
          content={project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}/project/${project.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Maven Technology`} />
        <meta name="twitter:description" content={project.description} />
        <meta
          name="twitter:image"
          content={project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`}
        />
        <link rel="canonical" href={`${siteUrl}/project/${project.id}`} />
      </Helmet>
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container px-6 mx-auto pb-10">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/#portfolio")}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4 font-medium"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground bg-gradient-to-r ${project.color} mb-3`}>
                {project.category}
              </span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
                {project.title}
              </h1>
              <p className="text-muted-foreground mt-2 max-w-xl text-lg">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sample Cards Grid */}
      <div className="container px-6 mx-auto py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-2xl md:text-3xl font-bold mb-2"
        >
          Design <span className="text-primary">Samples</span>
        </motion.h2>
        <p className="text-muted-foreground mb-10">Click on any sample to view full details.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.samples.map((sample, i) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => setSelectedSample(sample)}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                      <Sparkles size={14} className="text-primary" />
                      View Details
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {sample.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{sample.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {sample.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedSample && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSample(null)}
            className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border"
            >
              {/* Modal Header Image */}
              <div className="relative h-56 md:h-72 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedSample.image}
                  alt={selectedSample.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <button
                  onClick={() => setSelectedSample(null)}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                >
                  <X size={20} className="text-foreground" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 -mt-10 relative">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedSample.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {selectedSample.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedSample.details.overview}
                </p>

                {/* Info Cards */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground text-sm">{selectedSample.details.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <User size={18} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Client</p>
                      <p className="font-semibold text-foreground text-sm">{selectedSample.details.client}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedSample.details.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight size={14} className="text-primary mt-0.5 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                    <Code2 size={16} className="text-secondary" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSample.details.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
