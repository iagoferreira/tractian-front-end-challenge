import { useEffect, useMemo } from 'react'
import { useCompanieStore } from '../../stores/CompanieStore'
import { useShallow } from 'zustand/react/shallow'
import { AssetTree } from './asset-tree/AssetTree'
import { Filters } from './filters/Filters'
import { Labels } from './labels/Labels'
import { getTreeData } from '../../utils/getTreeData'

const Content = () => {
  const [fetchLocationsAndAssets, companyId, locations, assets] =
    useCompanieStore(
      useShallow((state) => [
        state.fetchLocationsAndAssets,
        state.selectedId,
        state.locations,
        state.assets,
      ])
    )

  useEffect(() => {
    // TODO: is there a better way or place to handle this if usage?
    if (companyId) {
      fetchLocationsAndAssets(companyId)
    }
  }, [fetchLocationsAndAssets, companyId])

  const treeData = useMemo(
    () => getTreeData(locations, assets),
    [locations, assets]
  )

  const contentStyle = {
    backgroundColor: '#FFFFFF',
    margin: '12px',
    border: '1px solid #D8DFE6',
    borderRadius: '4px',
    height: '92vh',
    padding: '16px',
  }
  const labelsAndFiltersStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  }

  return (
    <div style={contentStyle}>
      <div style={labelsAndFiltersStyle}>
        <Labels />
        <Filters />
      </div>
      <AssetTree data={treeData} />
    </div>
  )
}

export { Content }
