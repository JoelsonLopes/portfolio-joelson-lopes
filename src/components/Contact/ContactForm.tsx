'use client'

import action from '@/actions/contact-form'
import { useActionState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const [status, formAction, isPending] = useActionState(action, null)

  if (status?.success) {
    return (
      <p className="text-accent self-center text-center text-2xl font-medium">
        {status.message}
      </p>
    )
  }

  return (
    <form action={formAction}>
      <Input
        label="Nome completo"
        id="name"
        name="name"
        placeholder="Seu nome aqui"
        required
      />
      <Input
        label="Endereço de e-mail"
        id="email"
        type="email"
        name="email"
        placeholder="Seu e-mail aqui"
        required
      />
      <Input
        label="Assunto"
        id="subject"
        name="subject"
        placeholder="Assunto da mensagem"
      />
      <Textarea
        label="Mensagem"
        id="message"
        name="message"
        placeholder="Sua mensagem aqui"
        rows={7}
        required
      />
      {!status?.success && (
        <p className="my-2 font-light text-red-600">{status?.message}</p>
      )}
      <Button
        text={isPending ? 'Enviando...' : 'Enviar'}
        disabled={isPending}
      />
    </form>
  )
}

export default ContactForm
