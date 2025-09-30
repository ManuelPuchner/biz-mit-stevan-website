import Image from "next/image";

export default function HomeTemplate() {
  return (
    <main className="">
      <section className="container mx-auto p-4 flex flex-col md:gap-10 md:flex-row min-h-[calc(100vh-8rem)] ">
        <div className="text flex flex-col justify-center max-w-2xl">
          <h1 className="text-4xl font-bold">Willkommen bei Websters.at</h1>
          <p className="mt-4 ">
            Ihre Agentur für Webdesign, SEO und digitale Lösungen. Wir helfen
            Ihnen, online erfolgreich zu sein.
          </p>
        </div>
        <div className="mt-8 md:mt-0 flex justify-center items-center md:justify-end">
          <Image
            src="/assets/home/hero-image.png"
            alt="Hero Image"
            className="md:w-full md:h-auto
            sm:w-1/2 sm:h-1/2
            object-contain w-2/3 h-2/3"
            width={800}
            height={400}
          />
        </div>
      </section>

      <div className=" background min-h-screen h-full w-screen absolute top-0 left-0 -z-10 overflow-hidden">
        <img
          src="/assets/bg/bg-blob-2.png"
          className="absolute -top-50 right-0
         -z-10 pointer-events-none"
          alt="Background Blob 2"
        />
        <img
          src="/assets/bg/bg-blob-3.png"
          className="absolute -top-50 left-0
         -z-10 pointer-events-none"
          alt="Background Blob 3"
        />
      </div>
    </main>
  );
}
