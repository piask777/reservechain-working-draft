import { ProgramView } from '../components/ProgramView'

export function Nickel() {
  return <ProgramView
    type="nickel"
    title="Ultrafine Nickel Wire"
    subtitle="A proposed registry structure for 0.025 mm nickel wire."
    description="The program models coil and container identifiers alongside specification evidence, physical control records and review history."
    fields={['Lot identifier', 'Container identifier', 'Coil identifier', 'Diameter: 0.025 mm', 'Net mass', 'Material specification', 'Inspection status', 'Evidence timestamps']}
    evidence={['Coil and container schedule', 'Diameter specification', 'Weight documentation', 'Independent inspection']}
  />
}
