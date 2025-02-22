'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Review } from '@/types'
import { createUpdateReview } from '@/lib/actions/review.actions'

export default function ReviewChatbot({
  userId,
  productId,
  onComplete,
}: {
  userId: string
  productId: string
  onComplete: () => void
}) {
  const [step, setStep] = useState<'rating' | 'title' | 'description'>('rating')
  const [chatHistory, setChatHistory] = useState<Array<{type: 'bot' | 'user', message: string}>>([
    { type: 'bot', message: "Hi! I'll help you write your review. How would you rate this product from 1-5 stars?" }
  ])

  const form = useForm<Review>({
    defaultValues: {
      userId,
      productId,
      rating: 0,
      title: '',
      description: ''
    }
  })

  const handleUserInput = async (input: string) => {
    setChatHistory(prev => [...prev, { type: 'user', message: input }])

    switch(step) {
      case 'rating':
        const rating = parseInt(input)
        if (rating >= 1 && rating <= 5) {
          form.setValue('rating', rating)
          setStep('title')
          setChatHistory(prev => [...prev, { 
            type: 'bot', 
            message: "Great! Now, what would be a good title for your review?" 
          }])
        }
        break

      case 'title':
        form.setValue('title', input)
        setStep('description')
        setChatHistory(prev => [...prev, { 
          type: 'bot', 
          message: "Perfect! Finally, please share your detailed thoughts about the product." 
        }])
        break

      case 'description':
        form.setValue('description', input)
        // Submit the review using existing action
        const result = await createUpdateReview(form.getValues())
        if (result.success) {
          setChatHistory(prev => [...prev, { 
            type: 'bot', 
            message: "Thanks for your review! I've saved it successfully." 
          }])
          onComplete()
        }
        break
    }
  }

  return (
    <div className="chat-container">
      {chatHistory.map((chat, index) => (
        <div key={index} className={`chat-message ${chat.type}`}>
          {chat.message}
        </div>
      ))}
      <input 
        type="text" 
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleUserInput(e.currentTarget.value)
            e.currentTarget.value = ''
          }
        }}
        placeholder="Type your response..."
      />
    </div>
  )
}