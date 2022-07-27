import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useCycles } from '../hooks/useCycles'

const newCycleFormValidationScheme = zod.object({
  task: zod.string().min(3, 'Informe a tarefa.'),
  minutesAmount: zod
    .number()
    .min(5, 'Tem que ter no mínimo 5 minutos.')
    .max(180, 'Só pode durar no máximo 3 horas.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>

export function Home() {
  const { activeCycle, createNewCycle, InterruptCurrentCycle } = useCycles()

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationScheme),
    defaultValues: {
      task: '',
      minutesAmount: undefined,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)

    reset()
  }

  function handleInterruptCycle() {
    InterruptCurrentCycle()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle}>
            <HandPalm size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} /> Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
