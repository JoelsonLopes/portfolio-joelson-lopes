'use server'

const action = async (
  _: { success: boolean; message: string } | null,
  formData: FormData
) => {
  try {
    const name = formData.get('name')
    if (!name)
      return {
        success: false,
        message: 'Por favor, informe seu nome.',
      }

    const email = formData.get('email')
    if (!email)
      return {
        success: false,
        message: 'Por favor, informe seu endereço de e-mail.',
      }

    const subject = formData.get('subject')
    if (!subject)
      return {
        success: false,
        message: 'Por favor, informe um assunto.',
      }

    const message = formData.get('message')
    if (!message)
      return {
        success: false,
        message: 'Por favor, digite uma mensagem.',
      }

    // Create a clean object with only the form fields we want to send
    const formPayload = {
      name: name.toString(),
      email: email.toString(),
      subject: subject.toString(),
      message: message.toString(),
    }

    const res = await fetch(process.env.CONTACT_FORM_ACTION_URL!, {
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (res.ok) {
      return { success: true, message: 'Sua mensagem foi enviada com sucesso!' }
    } else {
      const data = await res.json()
      console.error(data?.error)

      return {
        success: false,
        message: 'Oops! Ocorreu um problema ao enviar seu formulário.',
      }
    }
  } catch (error) {
    console.error('Contact form submission error: ' + error)
    return {
      success: false,
      message: 'Oops! Ocorreu um problema ao enviar seu formulário.',
    }
  }
}

export default action
