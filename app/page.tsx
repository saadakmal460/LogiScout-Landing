import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Brain, Users, TrendingDown, AlertCircle, CheckCircle2, Github, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">LogiScout</span>
          </div>
          <div className="flex items-center gap-4">
            {/* <a
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a> */}
            {/* <Button variant="ghost">Docs</Button> */}
            {/* <Button>Notify Me</Button> */}
          </div>
        </div>
      </nav>

      {/* Coming Soon Badge */}
      <div className="bg-primary/10 border-b border-primary/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-primary flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Coming Soon • Built by engineers, for engineers
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
              When things break, <span className="text-primary">fix them fast</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Your AI co-pilot that learns from past incidents and helps your team solve problems in minutes, not hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="gap-2">
              Get Early Access <ArrowRight className="w-4 h-4" />
            </Button> */}
            {/* <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Github className="w-4 h-4" />
              Star on GitHub
            </Button> */}
          </div>
          <p className="text-sm text-muted-foreground">Launching Q1 2026 • Open source</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">The problem is real</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When your systems go down, every second counts. But your team is drowning in logs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: "Lost in the noise",
                desc: "Thousands of log lines. No clear answer. Hours wasted searching.",
              },
              {
                icon: Users,
                title: "Knowledge scattered everywhere",
                desc: "Past solutions buried in Slack, Jira, and people's heads.",
              },
              {
                icon: TrendingDown,
                title: "Recovery takes forever",
                desc: "Manual investigation means longer downtime and frustrated customers.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet your incident co-pilot</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              LogiScout learns from your past incidents and helps your team respond smarter, faster.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Instant answers",
                  desc: "AI analyzes your logs and metrics in real-time to find the root cause—no manual digging required.",
                },
                {
                  title: "Learn from history",
                  desc: "Your past incidents become your playbook. LogiScout remembers what worked before.",
                },
                {
                  title: "Right in your chat",
                  desc: "Get alerts and solutions directly in Slack or Teams. No context switching, no delays.",
                },
                {
                  title: "Transparent reasoning",
                  desc: "See exactly why LogiScout thinks something is the problem. Trust the AI, not blind faith.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <Brain className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">AI analyzing incident patterns...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Built for your workflow</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-time monitoring",
                desc: "Watches your systems 24/7 and alerts you instantly when something's wrong.",
              },
              {
                title: "Smart suggestions",
                desc: "Recommends fixes based on what worked in similar past incidents.",
              },
              {
                title: "Team collaboration",
                desc: "Slack & Teams integration keeps everyone on the same page during incidents.",
              },
              {
                title: "Knowledge base",
                desc: "Automatically learns from your postmortems and incident history.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "60%", label: "Faster incident resolution" },
              { number: "80%", label: "Less manual log searching" },
              { number: "24/7", label: "Always-on protection" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Built for the community</h2>
            <p className="text-lg text-muted-foreground">
              LogiScout is open source and self-hostable. Run it on your infrastructure, customize it for your needs,
              and contribute back to the community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Open Source", desc: "Full source code available on GitHub. No vendor lock-in." },
              { title: "Self-Hosted", desc: "Deploy on your own servers. Keep your data private." },
              {
                title: "Community Driven",
                desc: "Built by engineers, for engineers. Your feedback shapes the roadmap.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to fix incidents faster?</h2>
            <p className="text-lg opacity-90">
              Join the waitlist and be among the first to try LogiScout when it launches.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" variant="secondary" className="gap-2">
              Join Waitlist <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent gap-2"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </Button> */}
          </div>
          <p className="text-sm opacity-75">Launching Q1 2026 • Open source • MIT License</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">LogiScout</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered incident response for teams that move fast. Open source and self-hostable.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Roadmap", "GitHub"] },
              { title: "Community", links: ["Discord", "Discussions", "Contribute"] },
              { title: "Resources", links: ["Docs", "Blog", "Support"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 LogiScout. MIT License.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
