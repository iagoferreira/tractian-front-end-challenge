import { useCompanieStore } from '../../../stores/CompanieStore'

export const Labels = () => {
  const companieName = useCompanieStore((state) => state.companieName)

  const ativosStyle = {
    color: '#24292F',
    fontWeight: '600',
    fontSize: '20px',
  }
  const companieNameStyle = {
    color: '#77818C',
    fontWeight: '400',
    fontSize: '14px',
  }

  return (
    <div>
      <span style={ativosStyle}>Ativos</span>{' '}
      <span style={companieNameStyle}>/ {companieName}</span>
    </div>
  )
}
