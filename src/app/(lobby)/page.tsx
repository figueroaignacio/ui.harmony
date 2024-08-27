export default function HomePage() {
  return (
    <section className="flex flex-col justify-center items-center text-center gap-5 py-40 lg:max-w-3xl mx-auto">
      <div className="text-pretty">
        <h1 className="text-4xl lg:text-6xl font-bold gradient-text"></h1>
        <p className="text-foreground text-sm"></p>
      </div>
      <div className="flex gap-3"></div>
    </section>
  );
}
