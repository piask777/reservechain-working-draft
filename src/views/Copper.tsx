import { ProgramView } from '../components/ProgramView'

export function Copper() {
  return <ProgramView
    type="copper"
    title="Ultrafine Copper Powder"
    subtitle="A proposed evidence framework for industrial copper powder records."
    description="The program is designed to organize material identity, batch-level documentation and review status before any future issuance decision."
    fields={['Lot identifier', 'Batch identifier', 'Material specification', 'Net mass', 'Packaging reference', 'Origin documentation', 'Inspection status', 'Evidence timestamps']}
    evidence={['Material specification', 'Weight documentation', 'Origin and chain of custody', 'Independent inspection']}
  />
}
