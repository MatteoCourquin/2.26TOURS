import Button, { BUTTON_TYPE } from '@/components/atoms/Button';
import { IconArrowUpRight, IconMail, IconPhone } from '@/components/atoms/Icons';
import Typography from '@/components/atoms/Typography';
import Input from '@/components/Input';
import { TypeFormContact } from '@/data/types';
import { submitContactForm } from '@/services/api';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';

export enum OBJECT_CONTACT {
  PARTY = 'Demander une soirée',
  COLLAB = 'Faire une collab',
  JOIN = 'Rejoindre 2.26 Tours',
  OTHER = 'Autre...',
}

export default function Contact() {
  const [formValues, setFormValues] = useState<TypeFormContact>({
    firstName: '',
    lastName: '',
    mail: '',
    phone: '',
    object: OBJECT_CONTACT.OTHER,
    message: '',
  });

  const resetForm = () => {
    setFormValues({
      firstName: '',
      lastName: '',
      mail: '',
      phone: '',
      object: OBJECT_CONTACT.OTHER,
      message: '',
    });
  };

  const submitFormMutation = useMutation({
    mutationFn: submitContactForm,
    onMutate: () => {
      // setFormState(FORM_STATE.LOAD);
    },
    onError: (error) => {
      // setFormState(FORM_STATE.ERROR);
      console.error('onError', error);
    },
    onSuccess: () => {
      resetForm();
      // router.push('/contact/success');
    },
  });

  const handdleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (formValues.name === '' && formValues.email === '') {
    //   setFormErrors({
    //     ...formErrors,
    //     name: data.contact.form.errors.name,
    //     email: data.contact.form.errors.email,
    //   });
    // } else if (formValues.name === '') {
    //   setFormErrors({ ...formErrors, name: data.contact.form.errors.name });
    // } else if (formValues.email === '') {
    //   setFormErrors({ ...formErrors, email: data.contact.form.errors.email });
    // } else if (!isEmail(formValues.email)) {
    //   setFormErrors({ ...formErrors, email: data.contact.form.errors.emailValid });
    // }

    // if (!formValues.name || !formValues.email || !isEmail(formValues.email)) return;

    submitFormMutation.mutate(formValues);
  };

  return (
    <div className="flex min-h-screen items-center px-x-default pt-header md:px-x-large">
      <div className="flex w-full flex-col justify-between gap-10 py-y-default md:flex-row">
        <div className="flex flex-col gap-10 sm:min-w-72">
          <Typography type="heading1" as="heading4" className="md:pb-4">
            Contacte nous
          </Typography>
          <div className="flex items-center gap-4">
            <Button type={BUTTON_TYPE.ICON} as="button">
              <IconMail />
            </Button>
            <div className="relative flex flex-col">
              <Typography type="heading6">MAIL</Typography>
              <Link href="mailto:2.26tours.wav@gmail.com" className="absolute top-8">
                <Typography type="text">2.26tours.wav@gmail.com</Typography>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button type={BUTTON_TYPE.ICON} as="button">
              <IconPhone />
            </Button>
            <div className="relative flex flex-col">
              <Typography type="heading6">PHONE</Typography>
              <Link href="tel:+33652647110" className="absolute top-8">
                <Typography className="whitespace-nowrap" type="text">
                  +33 6 52 64 71 10
                </Typography>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Button
              className="w-fit"
              as="a"
              href="https://www.instagram.com/2.26tours/"
              target="_blank"
              type={BUTTON_TYPE.TEXT}
            >
              <p className="pr-2">INSTAGRAM</p>
              <IconArrowUpRight />
            </Button>
            <Button
              className="w-fit"
              as="a"
              href="https://shotgun.live/venues/2-26-tours"
              target="_blank"
              type={BUTTON_TYPE.TEXT}
            >
              <p className="pr-2">SHOTGUN</p>
              <IconArrowUpRight />
            </Button>
            <Button
              className="w-fit"
              as="a"
              href="https://soundcloud.com/2-26-tours"
              target="_blank"
              type={BUTTON_TYPE.TEXT}
            >
              <p className="pr-2">SOUNDCLOUD</p>
              <IconArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="blur-filter blur-medium flex h-fit flex-col gap-10 !rounded-[40px] px-6 py-8 md:px-12 md:py-16">
          <Typography type="heading2" as="heading5" className="pb-4">
            Ou démarre une conversation avec nous :
          </Typography>
          <form action="" onSubmit={(e) => handdleFormSubmit(e)} className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Typography type="heading6">QUI ES TU ?</Typography>
              <div className="flex w-full flex-col gap-4 lg:flex-row">
                <Input
                  className="w-full"
                  placeholder="John"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
                />
                <Input
                  className="w-full"
                  placeholder="Doe"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
                />
              </div>
              <Input
                name="mail"
                type="email"
                placeholder="john@doe.fr"
                value={formValues.mail}
                onChange={(e) => setFormValues({ ...formValues, mail: e.target.value })}
              />
              <Input
                name="phone"
                type="phone"
                placeholder="+33 6 78 91 23 45"
                value={formValues.phone}
                onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
              />
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <Typography type="heading6">TA DEMANDE :</Typography>
                <Input
                  name="object"
                  type="select"
                  placeholder="Motif du contact"
                  value={formValues.object}
                  options={Object.values(OBJECT_CONTACT)}
                  onChange={(e) => setFormValues({ ...formValues, object: e.target.value })}
                />
                <Input
                  name="message"
                  placeholder="Message"
                  type="textarea"
                  value={formValues.message}
                  onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                />
              </div>
            </div>
            <Button className="!w-full sm:!w-fit" as="button" type={BUTTON_TYPE.TEXT}>
              ENVOYER
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
