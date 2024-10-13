const addChildsAsSubRowsIfExists = (possibleChilds, parent, hasParentId) => {
  const isChildOfParent = (possibleChild) => {
    return possibleChild.parentId === parent.id
  }
  const isChildOfLocation = (possibleChild) => {
    return possibleChild.locationId === parent.id
  }

  const childs = possibleChilds.filter(
    hasParentId ? isChildOfParent : isChildOfLocation
  )

  if (childs.length > 0) {
    parent.subRows = childs // TODO: have empty subRows arrays or don't have it at all
  }

  return parent
}

const mapDataWithChilds = (data) => {
  return data.reduce((acc, curr) => {
    if (!curr.parentId) {
      acc.push(addChildsAsSubRowsIfExists(data, curr, true))
    }
    return acc
  }, [])
}

const mapLocationsWithAssets = (locations, mappedAssets) => {
  return locations.reduce((acc, curr) => {
    acc.push(addChildsAsSubRowsIfExists(mappedAssets, curr, false))
    return acc
  }, [])
}

export const getTreeData = (locations, assets) => {
  const mappedAssets = mapDataWithChilds(assets)
  const locationsWithAssets = mapLocationsWithAssets(locations, mappedAssets)
  return mapDataWithChilds(locationsWithAssets)
}
