import Typography from '@/components/atoms/Typography';
import Image from 'next/image';

export default function About() {
  return (
    <section className="h-screen-header px-x-default py-[30vh] md:px-x-large">
      <Typography
        type="heading2"
        as="heading4"
        colored={false}
        className="w-full pb-28 text-center sm:text-left"
      >
        A PROPOS DE NOUS
      </Typography>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex w-full items-center pr-0 sm:pr-10">
          <Image width={800} height={800} src="/images/illustrations/dj.png" alt="" />
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-10 lg:col-span-2">
          <div className="col-span-1 flex flex-col justify-center gap-10 lg:col-span-2">
            <Typography type="heading5" as="heading6">
              2.26 Tours : Collectif techno parisien
            </Typography>
            <Typography type="text" className="w-full lg:w-2/3">
              2.26 Tours est un collectif parisien dédié à la musique électronique. Nous explorons
              et partageons une large palette de genres, du Minimal à la Hard Techno, en passant par
              la House et le Hardcore.
            </Typography>
            <Typography type="text" className="w-full lg:w-2/3">
              Notre mission : rassembler les amateurs de sons électroniques dans un esprit de
              plaisir et de découverte musicale. Rejoins-nous pour vivre une expérience auditive
              unique.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
