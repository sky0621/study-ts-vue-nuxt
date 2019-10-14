export default function ToMessage(vComponent) {
  const itemName = vComponent.$t(`item_name`)
  return vComponent.$t(`greeting`, [itemName, 'さぶろー'])
}
