function FamilyInfo(props) {
  const { number, relatives, hasRelatives } = props

  return hasRelatives ? (
    <h1>{`I have a ${number} ${relatives}`}</h1>
  ) : (
    <h2>{`I'dont have any relatives`}</h2>
  )
}

export default FamilyInfo
