export const formAPI = {
    _options: {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
    },
    async sendForm(data: FormDataType) {
      if (!process.env.REACT_APP_FORM_SERVER) {
        throw new Error('process.env.REACT_APP_FORM_SERVER is not defined')
      }
      const res = await fetch(process.env.REACT_APP_FORM_SERVER, {
        ...this._options,
        body: JSON.stringify({ ...data }),
      })
      if (!res.ok) {
        throw new Error(res.statusText)
      }
    },
  }
  export type FormDataType = {
    name: string
    email: string
    message: string
  }