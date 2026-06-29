import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import func2url from '../../../func2url.json'

interface Props {
  isActive: boolean
}

export default function ApplicationForm({ isActive }: Props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const url = (func2url as Record<string, string>)['send-application']
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, description })
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setPhone('')
        setDescription('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col gap-4 max-w-md"
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {status === 'success' ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-white"
        >
          Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </motion.p>
      ) : (
        <>
          <Input
            placeholder="Ваше имя"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="bg-transparent border-neutral-600 text-white placeholder:text-neutral-500 focus:border-[#FF4D00]"
          />
          <Input
            placeholder="Телефон"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            type="tel"
            className="bg-transparent border-neutral-600 text-white placeholder:text-neutral-500 focus:border-[#FF4D00]"
          />
          <Textarea
            placeholder="Описание объекта (длина прокола, тип грунта, диаметр трубы...)"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
            className="bg-transparent border-neutral-600 text-white placeholder:text-neutral-500 focus:border-[#FF4D00] resize-none"
          />
          {status === 'error' && (
            <p className="text-red-400 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
          )}
          <Button
            type="submit"
            disabled={status === 'loading'}
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors self-start"
          >
            {status === 'loading' ? 'Отправляем...' : 'Оставить заявку'}
          </Button>
        </>
      )}
    </motion.form>
  )
}
