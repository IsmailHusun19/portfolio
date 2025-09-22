import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer, Web Engineer, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white font-semibold">
              Halo! Saya Ismail Husun, seorang Full-Stack Web Developer yang bersemangat dalam membangun aplikasi web dinamis menggunakan React, dan MySQL. Saya menikmati proses membuat antarmuka yang ramah pengguna sekaligus sistem backend yang andal untuk menghadirkan solusi yang lengkap.
              </p>
              <p className="text-white">
              Fokus saya adalah mengembangkan aplikasi yang efisien dan dapat di-scale, mulai dari desain frontend hingga arsitektur backend. Saat ini, saya sedang memperluas keahlian di framework modern seperti React dan Express untuk memperkuat kemampuan saya sebagai full-stack developer yang lebih fleksibel.
              </p>
              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  Saya adalah seorang pembelajar sepanjang hayat, didorong oleh rasa ingin tahu dan semangat memecahkan masalah. Melalui proyek freelance, magang, dan studi independen, saya telah membangun sistem nyata yang memberikan nilai praktis. Ke depan, saya ingin terus meningkatkan keterampilan sekaligus berkontribusi pada proyek-proyek berdampak di komunitas pengembang web.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Ismail Husun
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
