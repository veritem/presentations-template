export function Slide({ children, id, className }) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  )
}
