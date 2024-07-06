import { useEffect } from 'react'
import TractianLogo from '../../assets/tractian-logo.svg'
import { Selector } from './selector/Selector'
import { useCompanieStore } from '../../stores/CompanieStore'
import { useShallow } from 'zustand/react/shallow'

export const Header = () => {
  const [companies, fetchCompanies] = useCompanieStore(
    useShallow((state) => [state.companies, state.fetchCompanies])
  )

  useEffect(() => {
    fetchCompanies()
  }, [fetchCompanies])

  const headerStyle = {
    backgroundColor: '#17192d',
    width: '100%',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    boxSizing: 'border-box',
    padding: '0 16px',
  }

  return (
    <div style={headerStyle}>
      <img src={TractianLogo} />
      <Selector values={companies} />
    </div>
  )
}
