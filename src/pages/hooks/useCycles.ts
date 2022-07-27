import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'

export const useCycles = () => useContext(CyclesContext)
