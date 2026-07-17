import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Step = 'closed' | 'questions' | 'result'

const questions = [
  {
    id: 'room',
    question: 'Where will it hang?',
    options: ['Living Room', 'Bedroom', 'Office', 'Hallway'],
  },
  {
    id: 'style',
    question: 'Your style?',
    options: ['Modern', 'Classic', 'Bold & Colourful', 'Minimal'],
  },
  {
    id: 'wall',
    question: 'Wall colour?',
    options: ['Light / White', 'Warm / Cream', 'Dark / Charcoal', 'Colourful'],
  },
]

const recommendations: Record<string, Record<string, string>> = {
  room: {
    'Living Room': '60 × 90 cm',
    Bedroom: '50 × 70 cm',
    Office: '40 × 60 cm',
    Hallway: '30 × 45 cm',
  },
  style: {
    Modern: 'Matte finish',
    Classic: 'Gloss finish',
    'Bold & Colourful': 'Gloss finish',
    Minimal: 'Matte finish',
  },
  wall: {
    'Light / White': 'Portrait orientation',
    'Warm / Cream': 'Landscape orientation',
    'Dark / Charcoal': 'Portrait orientation',
    Colourful: 'Square format',
  },
}

export function DesignAssistant() {
  const [step, setStep] = useState<Step>('closed')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setStep('result')
    }
  }

  const reset = () => {
    setStep('questions')
    setCurrentQ(0)
    setAnswers({})
  }

  const open = () => {
    setStep('questions')
    setCurrentQ(0)
    setAnswers({})
  }

  return (
    <>
      <AnimatePresence>
        {step === 'closed' && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 2 }}
            onClick={open}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 glass-strong px-5 py-3.5 text-sm font-medium text-cream shadow-2xl transition-transform hover:scale-[1.02]"
          >
            <Sparkles className="h-4 w-4" />
            Need help choosing?
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {step !== 'closed' && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[340px] overflow-hidden glass-strong shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent-light" />
                <span className="text-sm font-medium text-cream">
                  Design Assistant
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStep('closed')}
                className="text-cream/40 transition-colors hover:text-cream"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-5">
              {step === 'questions' && (
                <motion.div
                  key={currentQ}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="mb-4 flex gap-1">
                    {questions.map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          'h-0.5 flex-1 transition-colors',
                          i <= currentQ ? 'bg-accent' : 'bg-white/10'
                        )}
                      />
                    ))}
                  </div>
                  <p className="font-serif text-xl text-cream">
                    {questions[currentQ].question}
                  </p>
                  <div className="mt-4 space-y-2">
                    {questions[currentQ].options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          handleAnswer(questions[currentQ].id, option)
                        }
                        className="flex w-full items-center justify-between border border-white/10 px-4 py-3 text-left text-sm text-cream/70 transition-all hover:border-accent/50 hover:bg-white/5 hover:text-cream"
                      >
                        {option}
                        <ChevronRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 'result' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="font-serif text-xl text-cream">
                    We recommend:
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="border border-white/10 p-4">
                      <span className="text-[10px] uppercase tracking-wider text-accent-light">
                        Size
                      </span>
                      <p className="mt-1 font-serif text-2xl text-cream">
                        {recommendations.room[answers.room] ?? '60 × 90 cm'}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-white/10 p-3">
                        <span className="text-[10px] uppercase tracking-wider text-cream/40">
                          Finish
                        </span>
                        <p className="mt-1 text-sm text-cream">
                          {recommendations.style[answers.style] ?? 'Gloss'}
                        </p>
                      </div>
                      <div className="border border-white/10 p-3">
                        <span className="text-[10px] uppercase tracking-wider text-cream/40">
                          Orientation
                        </span>
                        <p className="mt-1 text-sm text-cream">
                          {recommendations.wall[answers.wall] ?? 'Portrait'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Button size="sm" variant="primary" className="flex-1" asChild>
                      <Link to="/studio">Upload Photo</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={reset}
                      className="text-cream/50"
                    >
                      Retry
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
