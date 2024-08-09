import Button, { BUTTON_TYPE } from '@/components/atoms/Button';
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
          <Typography type="heading5" as="heading6">
            Elit bibendum vitae
          </Typography>
          <Typography type="text" className="w-full lg:w-2/3">
            Elit bibendum vitae fermentum egestas amet senectus. Ullamcorper ultrices metus senectus
            scelerisque pretium etiam morbi semper hendrerit.
          </Typography>
          <Typography type="text" className="w-full lg:w-2/3">
            Elit viverra eget quis duis ut neque sit gravida. Sed magna erat non sit neque tellus.
            Turpis est viverra neque ac. Non ornare diam turpis nisl nec tempus porttitor nec proin.
          </Typography>
          <Button type={BUTTON_TYPE.TEXT} as="button">
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
}
