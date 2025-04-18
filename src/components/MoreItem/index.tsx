export const MoreItem = ({
  icon,
  title,
  desc,
}: {
  icon: string
  title: string
  desc: string
}) => {
  return (
    <div className="more-item">
      <img src={icon} alt="huialt" className="more-item__img" />
      <div className="more-item__title">{title}</div>
      <div className="more-item__desc">{desc}</div>
    </div>
  )
}
