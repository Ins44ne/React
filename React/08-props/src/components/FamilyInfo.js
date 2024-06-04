function FamilyInfo(props) {
  const { number, relatives } = props
  console.log(props)
  return (
    <h1>
      I have a {number} {relatives}
    </h1>
  )
}

export default FamilyInfo
