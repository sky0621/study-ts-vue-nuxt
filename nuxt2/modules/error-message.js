export default function ToMessage(vComponent) {
  if (vComponent.$t) {
    console.log(vComponent.$t(`item_name`))
    const itemName = vComponent.$t(`item_name`)
    return vComponent.$t(`greeting`, [itemName, 'さぶろー'])
  }
  return ''
}
