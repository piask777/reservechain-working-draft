export type RegistryRecord = {
  id: string
  material: 'Copper powder' | 'Nickel wire'
  form: string
  identifier: string
  evidence: 'Under review' | 'Incomplete' | 'Ready for review'
}

export const registryRecords: RegistryRecord[] = [
  { id: 'RC-DEMO-CP-001', material: 'Copper powder', form: 'Batch / lot', identifier: 'LOT-CP-A01', evidence: 'Under review' },
  { id: 'RC-DEMO-CP-002', material: 'Copper powder', form: 'Batch / lot', identifier: 'LOT-CP-A02', evidence: 'Incomplete' },
  { id: 'RC-DEMO-NW-001', material: 'Nickel wire', form: 'Coil / container', identifier: 'COIL-NW-B01', evidence: 'Ready for review' },
  { id: 'RC-DEMO-NW-002', material: 'Nickel wire', form: 'Coil / container', identifier: 'COIL-NW-B02', evidence: 'Incomplete' },
]

export function filterRegistry(records: RegistryRecord[], query: string, material: string, evidence: string) {
  const term = query.trim().toLocaleLowerCase()
  return records.filter((record) => {
    const matchesQuery = !term || [record.id, record.material, record.identifier].some((value) => value.toLocaleLowerCase().includes(term))
    return matchesQuery && (material === 'All' || record.material === material) && (evidence === 'All' || record.evidence === evidence)
  })
}
