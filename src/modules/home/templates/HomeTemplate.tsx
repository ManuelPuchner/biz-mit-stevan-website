import Image from "next/image";

export default function HomeTemplate() {
  return (
    <main className="">
      <section className="container mx-auto p-4">
        
      </section>


      <div className="background h-screen w-screen absolute top-0 left-0 -z-10 overflow-hidden">
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
