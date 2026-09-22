export function MetalArt({ type }: { type: 'copper' | 'nickel' }) {
  return (
    <div className={`metal-art ${type}`} aria-label={type === 'copper' ? 'Abstract copper powder illustration' : 'Abstract nickel wire coil illustration'} role="img">
      <span className="art-grid" />
      {type === 'copper' ? (
        <><i className="grain one" /><i className="grain two" /><i className="grain three" /><i className="grain four" /><b>Cu</b></>
      ) : (
        <><i className="coil one" /><i className="coil two" /><i className="coil three" /><b>Ni</b></>
      )}
      <small>{type === 'copper' ? 'MATERIAL / POWDER' : 'MATERIAL / WIRE'}</small>
    </div>
  )
}
