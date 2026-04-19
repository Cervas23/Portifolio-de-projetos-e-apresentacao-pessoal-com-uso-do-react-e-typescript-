import { useState } from "react"

type FormData = {
  name: string
  email: string
  message: string
}

export const useForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    })
  }

  return {
    form,
    handleChange,
    resetForm,
  }
}